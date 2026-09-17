import { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../../config/prisma.js";
import { createNotification } from "../notifications/notifications.service.js";

import type {
  PublicRegistrationInput,
  RegistrationListFilters,
} from "./registrations.types.js";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

async function createRegistrationWithCapacityCheck(
  eventId: string,
  input: PublicRegistrationInput,
  userId: string | undefined,
) {
  return prisma.$transaction(
    async (tx) => {
      const event = await tx.event.findUnique({
        where: {
          id: eventId,
        },
      });

      if (!event) {
        throw new Error("Event not found");
      }

      if (event.status !== "PUBLISHED") {
        throw new Error("Registration is available only for published events");
      }

      if (event.access === "INVITE_ONLY") {
        throw new Error("This event requires an invitation");
      }

      if (
        event.registrationDeadline &&
        new Date() > event.registrationDeadline
      ) {
        throw new Error("Registration for this event has closed");
      }

      const email = normalizeEmail(input.email);

      const existingRegistration = await tx.eventRegistration.findUnique({
        where: {
          eventId_email: {
            eventId,
            email,
          },
        },
      });

      if (existingRegistration) {
        if (existingRegistration.registrationStatus === "CANCELLED") {
          throw new Error(
            "This email was previously registered and cancelled. Please contact the branch team.",
          );
        }

        throw new Error("This email is already registered for this event");
      }

      if (event.access === "MEMBERS_ONLY" || event.access === "UNIVERSITY") {
        if (!userId) {
          throw new Error("You must be logged in to register for this event");
        }
      }

      if (event.access === "MEMBERS_ONLY") {
        if (!userId) {
          throw new Error("Authentication required");
        }

        const memberProfile = await tx.memberProfile.findUnique({
          where: {
            userId,
          },
          select: {
            membershipStatus: true,
          },
        });

        if (!memberProfile || memberProfile.membershipStatus !== "ACTIVE") {
          throw new Error(
            "An active IEEE GU membership is required for this event",
          );
        }
      }

      if (event.access === "UNIVERSITY") {
        if (!userId) {
          throw new Error("Authentication required");
        }

        const universityUser = await tx.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            id: true,
          },
        });

        if (!universityUser) {
          throw new Error("User account not found");
        }
      }

      const registeredCount = await tx.eventRegistration.count({
        where: {
          eventId,
          registrationStatus: {
            in: ["REGISTERED", "ATTENDED"],
          },
        },
      });

      const isFull =
        event.capacity !== null && registeredCount >= event.capacity;

      const registrationStatus = isFull ? "WAITLISTED" : "REGISTERED";

      const registration = await tx.eventRegistration.create({
        data: {
          eventId,
          userId: userId ?? null,
          name: input.name,
          email,
          phone: input.phone ?? null,
          registrationStatus,
        },
      });

      await tx.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "REGISTER",
          entityType: "EVENT_REGISTRATION",
          entityId: registration.id,
          description: `Registered for event "${event.title}"`,
        },
      });

      if (userId) {
        await createNotification(
          {
            userId,
            title:
              registrationStatus === "WAITLISTED"
                ? "Added to Waitlist"
                : "Registration Confirmed",
            message:
              registrationStatus === "WAITLISTED"
                ? `The event "${event.title}" is currently full. You have been added to the waitlist.`
                : `You have successfully registered for "${event.title}".`,
            type: "EVENT",
          },
          tx,
        );
      }

      return registration;
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      maxWait: 5000,
      timeout: 10000,
    },
  );
}

export async function registerForEvent(
  eventId: string,
  input: PublicRegistrationInput,
  userId?: string,
) {
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await createRegistrationWithCapacityCheck(eventId, input, userId);
    } catch (error) {
      const isSerializationConflict =
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2034";

      if (!isSerializationConflict || attempt === maxRetries) {
        throw error;
      }
    }
  }

  throw new Error("Registration could not be completed. Please try again.");
}

export async function getEventRegistrations(
  eventId: string,
  filters: RegistrationListFilters = {},
) {
  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    select: {
      id: true,
      title: true,
      capacity: true,
    },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  const registrations = await prisma.eventRegistration.findMany({
    where: {
      eventId,
      ...(filters.status
        ? {
            registrationStatus: filters.status,
          }
        : {}),
    },
    orderBy: {
      registeredAt: "asc",
    },
  });

  const total = registrations.length;

  const registered = registrations.filter(
    (registration) => registration.registrationStatus === "REGISTERED",
  ).length;

  const waitlisted = registrations.filter(
    (registration) => registration.registrationStatus === "WAITLISTED",
  ).length;

  const attended = registrations.filter(
    (registration) => registration.registrationStatus === "ATTENDED",
  ).length;

  const absent = registrations.filter(
    (registration) => registration.registrationStatus === "ABSENT",
  ).length;

  const cancelled = registrations.filter(
    (registration) => registration.registrationStatus === "CANCELLED",
  ).length;

  const availableSeats =
    event.capacity === null
      ? null
      : Math.max(event.capacity - registered - attended, 0);

  return {
    event,
    statistics: {
      total,
      registered,
      waitlisted,
      attended,
      absent,
      cancelled,
      availableSeats,
    },
    registrations,
  };
}

export async function updateRegistrationStatus(
  registrationId: string,
  status: "REGISTERED" | "CANCELLED" | "ATTENDED" | "ABSENT" | "WAITLISTED",
  actorId: string,
) {
  const result = await prisma.$transaction(
    async (tx) => {
      const registration = await tx.eventRegistration.findUnique({
        where: {
          id: registrationId,
        },
        include: {
          event: {
            select: {
              id: true,
              title: true,
              capacity: true,
            },
          },
        },
      });

      if (!registration) {
        throw new Error("Registration not found");
      }

      const currentStatus = registration.registrationStatus;

      const validTransitions: Record<string, string[]> = {
        REGISTERED: ["ATTENDED", "ABSENT", "CANCELLED"],
        WAITLISTED: ["REGISTERED", "CANCELLED"],
        ATTENDED: [],
        ABSENT: [],
        CANCELLED: [],
      };

      const allowedTransitions = validTransitions[currentStatus] ?? [];

      if (!allowedTransitions.includes(status)) {
        throw new Error(
          `Invalid registration status transition from ${currentStatus} to ${status}`,
        );
      }

      if (status === "REGISTERED") {
        if (registration.event.capacity !== null) {
          const activeCount = await tx.eventRegistration.count({
            where: {
              eventId: registration.event.id,
              registrationStatus: {
                in: ["REGISTERED", "ATTENDED"],
              },
            },
          });

          if (activeCount >= registration.event.capacity) {
            throw new Error("Event capacity has been reached");
          }
        }
      }

      const updatedRegistration = await tx.eventRegistration.update({
        where: {
          id: registrationId,
        },
        data: {
          registrationStatus: status,
          attendedAt: status === "ATTENDED" ? new Date() : null,
        },
      });

      await tx.auditLog.create({
        data: {
          userId: actorId,
          action:
            status === "ATTENDED"
              ? "ATTEND"
              : status === "CANCELLED"
                ? "CANCEL"
                : "UPDATE",
          entityType: "EVENT_REGISTRATION",
          entityId: registrationId,
          description: `Registration status changed from ${currentStatus} to ${status} for event "${registration.event.title}"`,
        },
      });

      let promotedRegistration = null;

      if (
        status === "CANCELLED" &&
        currentStatus === "REGISTERED" &&
        registration.event.capacity !== null
      ) {
        const activeCount = await tx.eventRegistration.count({
          where: {
            eventId: registration.event.id,
            registrationStatus: {
              in: ["REGISTERED", "ATTENDED"],
            },
          },
        });

        if (activeCount < registration.event.capacity) {
          const nextWaitlisted = await tx.eventRegistration.findFirst({
            where: {
              eventId: registration.event.id,
              registrationStatus: "WAITLISTED",
            },
            orderBy: {
              registeredAt: "asc",
            },
          });

          if (nextWaitlisted) {
            promotedRegistration = await tx.eventRegistration.update({
              where: {
                id: nextWaitlisted.id,
              },
              data: {
                registrationStatus: "REGISTERED",
              },
            });

            await tx.auditLog.create({
              data: {
                userId: actorId,
                action: "UPDATE",
                entityType: "EVENT_REGISTRATION",
                entityId: nextWaitlisted.id,
                description: `Waitlisted participant automatically promoted after cancellation for event "${registration.event.title}"`,
              },
            });

            if (nextWaitlisted.userId) {
              await createNotification(
                {
                  userId: nextWaitlisted.userId,
                  title: "Waitlist Promotion",
                  message: `A seat has become available. You have been moved from the waitlist to registered for "${registration.event.title}".`,
                  type: "EVENT",
                },
                tx,
              );
            }
          }
        }
      }

      return {
        registration: updatedRegistration,
        promotedRegistration,
      };
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      maxWait: 5000,
      timeout: 10000,
    },
  );

  return result.registration;
}

export async function promoteNextWaitlisted(eventId: string, actorId: string) {
  const event = await prisma.event.findUnique({
    where: {
      id: eventId,
    },
    select: {
      id: true,
      title: true,
      capacity: true,
    },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  if (event.capacity === null) {
    throw new Error(
      "Waitlist promotion is only applicable to capacity-limited events",
    );
  }

  const activeCount = await prisma.eventRegistration.count({
    where: {
      eventId,
      registrationStatus: {
        in: ["REGISTERED", "ATTENDED"],
      },
    },
  });

  if (activeCount >= event.capacity) {
    throw new Error("There are no available seats");
  }

  const nextWaitlisted = await prisma.eventRegistration.findFirst({
    where: {
      eventId,
      registrationStatus: "WAITLISTED",
    },
    orderBy: {
      registeredAt: "asc",
    },
  });

  if (!nextWaitlisted) {
    throw new Error("No participants are currently waitlisted");
  }

  const promoted = await prisma.eventRegistration.update({
    where: {
      id: nextWaitlisted.id,
    },
    data: {
      registrationStatus: "REGISTERED",
    },
  });

  await prisma.auditLog.create({
    data: {
      userId: actorId,
      action: "UPDATE",
      entityType: "EVENT_REGISTRATION",
      entityId: promoted.id,
      description: `Waitlisted participant promoted for event "${event.title}"`,
    },
  });

  if (promoted.userId) {
    await createNotification({
      userId: promoted.userId,
      title: "Waitlist Promotion",
      message: `A seat has become available. You have been moved from the waitlist to registered for "${event.title}".`,
      type: "EVENT",
    });
  }

  return promoted;
}

export async function getMyRegistrations(userId: string) {
  const registrations = await prisma.eventRegistration.findMany({
    where: {
      userId,
    },
    orderBy: {
      registeredAt: "desc",
    },
    include: {
      event: {
        select: {
          id: true,
          slug: true,
          title: true,
          shortDescription: true,
          bannerImage: true,
          eventDate: true,
          startTime: true,
          endTime: true,
          venue: true,
          access: true,
          status: true,
        },
      },
    },
  });

  return registrations;
}