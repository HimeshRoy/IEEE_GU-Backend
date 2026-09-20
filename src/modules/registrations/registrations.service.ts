import { Prisma } from "../../generated/prisma/client.js";
import { randomBytes } from "node:crypto";
import { prisma } from "../../config/prisma.js";
import { createNotification } from "../notifications/notifications.service.js";
import type {
  FormAnswerInput,
  PublicRegistrationInput,
  RegistrationListFilters,
} from "./registrations.types.js";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isChoiceFieldType(type: string) {
  return (
    type === "MULTIPLE_CHOICE" || type === "DROPDOWN" || type === "CHECKBOXES"
  );
}

function validateAnswerValue(
  field: {
    key: string;
    label: string;
    type: string;
    required: boolean;
    options: unknown;
    validation: unknown;
  },
  value: unknown,
) {
  if (value === undefined || value === null || value === "") {
    if (field.required) {
      throw new Error(`"${field.label}" is required`);
    }

    return;
  }

  if (field.type === "SHORT_ANSWER" || field.type === "PARAGRAPH") {
    if (typeof value !== "string") {
      throw new Error(`"${field.label}" must be text`);
    }
  }

  if (field.type === "EMAIL") {
    if (typeof value !== "string") {
      throw new Error(`"${field.label}" must be a valid email address`);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value.trim())) {
      throw new Error(`"${field.label}" must be a valid email address`);
    }
  }

  if (field.type === "PHONE") {
    if (typeof value !== "string") {
      throw new Error(`"${field.label}" must be a valid phone number`);
    }

    const phone = value.trim();

    if (!/^\+?[0-9\s()-]{10,20}$/.test(phone)) {
      throw new Error(`"${field.label}" must be a valid phone number`);
    }
  }

  if (field.type === "NUMBER") {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new Error(`"${field.label}" must be a valid number`);
    }
  }

  if (field.type === "DATE") {
    if (typeof value !== "string") {
      throw new Error(`"${field.label}" must be a valid date`);
    }

    if (Number.isNaN(Date.parse(value))) {
      throw new Error(`"${field.label}" must be a valid date`);
    }
  }

  if (field.type === "TIME") {
    if (typeof value !== "string" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(value)) {
      throw new Error(`"${field.label}" must be a valid time`);
    }
  }

  if (field.type === "FILE_UPLOAD" || field.type === "IMAGE_UPLOAD") {
    if (typeof value !== "string" && !Array.isArray(value)) {
      throw new Error(`"${field.label}" contains an invalid file value`);
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item !== "string") {
          throw new Error(`"${field.label}" contains an invalid file value`);
        }
      }
    }
  }

  if (field.type === "CHECKBOXES") {
    if (
      !Array.isArray(value) ||
      value.some((item) => typeof item !== "string")
    ) {
      throw new Error(`"${field.label}" contains invalid selections`);
    }
  }

  if (field.type === "MULTIPLE_CHOICE" || field.type === "DROPDOWN") {
    if (typeof value !== "string") {
      throw new Error(`"${field.label}" contains an invalid selection`);
    }
  }

  if (isChoiceFieldType(field.type)) {
    if (!Array.isArray(field.options)) {
      throw new Error(
        `The options for "${field.label}" are not configured correctly`,
      );
    }

    if (field.type === "CHECKBOXES") {
      const selectedValues = value as string[];

      for (const selectedValue of selectedValues) {
        if (!field.options.includes(selectedValue)) {
          throw new Error(`"${field.label}" contains an invalid option`);
        }
      }
    } else if (typeof value === "string" && !field.options.includes(value)) {
      throw new Error(`"${field.label}" contains an invalid option`);
    }
  }

  const validation =
    field.validation &&
    typeof field.validation === "object" &&
    !Array.isArray(field.validation)
      ? (field.validation as Record<string, unknown>)
      : {};

  if (typeof value === "string") {
    const minLength = validation.minLength;
    const maxLength = validation.maxLength;

    if (typeof minLength === "number" && value.length < minLength) {
      throw new Error(
        `"${field.label}" is shorter than the minimum allowed length`,
      );
    }

    if (typeof maxLength === "number" && value.length > maxLength) {
      throw new Error(`"${field.label}" exceeds the maximum allowed length`);
    }

    const pattern = validation.pattern;

    if (typeof pattern === "string") {
      let regex: RegExp;

      try {
        regex = new RegExp(pattern);
      } catch {
        throw new Error(
          `The validation pattern for "${field.label}" is invalid`,
        );
      }

      if (!regex.test(value)) {
        throw new Error(`"${field.label}" has an invalid format`);
      }
    }
  }

  if (typeof value === "number") {
    const min = validation.min;
    const max = validation.max;

    if (typeof min === "number" && value < min) {
      throw new Error(`"${field.label}" is below the minimum allowed value`);
    }

    if (typeof max === "number" && value > max) {
      throw new Error(`"${field.label}" exceeds the maximum allowed value`);
    }
  }

  if (Array.isArray(value)) {
    const minSelections = validation.minSelections;
    const maxSelections = validation.maxSelections;

    if (typeof minSelections === "number" && value.length < minSelections) {
      throw new Error(`"${field.label}" requires more selections`);
    }

    if (typeof maxSelections === "number" && value.length > maxSelections) {
      throw new Error(`"${field.label}" allows fewer selections`);
    }
  }
}

function validateFormAnswers(
  fields: Array<{
    id: string;
    key: string;
    label: string;
    type: string;
    scope: string;
    required: boolean;
    options: unknown;
    validation: unknown;
  }>,
  answers: FormAnswerInput,
) {
  const fieldMap = new Map(fields.map((field) => [field.key, field]));

  for (const [key, value] of Object.entries(answers)) {
    const field = fieldMap.get(key);

    if (!field) {
      throw new Error(`Unknown registration field: ${key}`);
    }

    if (field.scope !== "PARTICIPANT") {
      throw new Error(
        `The field "${field.label}" must be submitted at team level`,
      );
    }

    validateAnswerValue(field, value);
  }

  for (const field of fields) {
    if (field.scope === "PARTICIPANT" && field.required) {
      const value = answers[field.key];

      validateAnswerValue(field, value);
    }
  }
}

function getTeamFields(
  fields: Array<{
    id: string;
    key: string;
    label: string;
    type: string;
    scope: string;
    required: boolean;
    options: unknown;
    validation: unknown;
  }>,
) {
  return fields.filter((field) => field.scope === "TEAM");
}

function validateTeamAnswers(
  fields: Array<{
    id: string;
    key: string;
    label: string;
    type: string;
    scope: string;
    required: boolean;
    options: unknown;
    validation: unknown;
  }>,
  answers: FormAnswerInput,
  teamName: string | undefined,
) {
  const teamFields = getTeamFields(fields);

  const normalizedAnswers: FormAnswerInput = {
    ...answers,
  };

  if (teamName && !normalizedAnswers.team_name) {
    normalizedAnswers.team_name = teamName;
  }

  for (const [key, value] of Object.entries(normalizedAnswers)) {
    const field = teamFields.find((item) => item.key === key);

    if (!field) {
      throw new Error(`Unknown team registration field: ${key}`);
    }

    validateAnswerValue(field, value);
  }

  for (const field of teamFields) {
    if (!field.required) {
      continue;
    }

    const value =
      field.key === "team_name" ? teamName : normalizedAnswers[field.key];

    validateAnswerValue(field, value);
  }
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
        include: {
          registrationForm: {
            include: {
              fields: {
                orderBy: {
                  order: "asc",
                },
              },
            },
          },
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

      const form = event.registrationForm;

      if (!form) {
        throw new Error("Registration form is not available");
      }

      if (form.status !== "PUBLISHED") {
        throw new Error("Registration form is not open");
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

      const requiresAuthentication =
        event.access === "MEMBERS_ONLY" || event.access === "UNIVERSITY";

      if (requiresAuthentication && !userId) {
        throw new Error("You must be logged in to register for this event");
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

      validateFormAnswers(form.fields, input.answers);

      const isTeamEvent = event.participationType === "TEAM";

      if (!isTeamEvent && input.teamName) {
        throw new Error("Team name cannot be provided for an individual event");
      }

      if (!isTeamEvent && input.teamMembers.length > 0) {
        throw new Error(
          "Team members cannot be provided for an individual event",
        );
      }

      if (isTeamEvent) {
        if (!input.teamName) {
          throw new Error("Team name is required for team registration");
        }

        validateTeamAnswers(form.fields, input.teamAnswers, input.teamName);

        for (const member of input.teamMembers) {
          validateFormAnswers(form.fields, member.answers);
        }
      }
      const submittedTeamMembers = input.teamMembers.map((member) => ({
        name: member.name.trim(),
        email: normalizeEmail(member.email),
        phone: member.phone?.trim() || null,
        answers: member.answers,
      }));

      if (isTeamEvent) {
        const emails = [
          email,
          ...submittedTeamMembers.map((member) => member.email),
        ];

        const uniqueEmails = new Set(emails);

        if (uniqueEmails.size !== emails.length) {
          throw new Error(
            "The same email address cannot be used more than once in a team",
          );
        }

        const existingEventRegistrations = await tx.eventRegistration.findMany({
          where: {
            eventId,
            email: {
              in: emails,
            },
          },
          select: {
            email: true,
            registrationStatus: true,
          },
        });

        const existingRegistration = existingEventRegistrations[0];

        if (existingRegistration) {
          throw new Error(
            `The email ${existingRegistration.email} is already registered for this event`,
          );
        }
      }

      let teamId: string | null = null;
      let isTeamLeader = false;
      let existingTeamMemberCount = 0;

      if (isTeamEvent) {
        const existingTeam = await tx.eventTeam.findUnique({
          where: {
            eventId_name: {
              eventId,
              name: input.teamName!,
            },
          },
        });

        if (existingTeam) {
          throw new Error(
            "A team with this name already exists. Please use a different team name.",
          );
        }

        const team = await tx.eventTeam.create({
          data: {
            eventId,
            name: input.teamName!,
          },
        });

        teamId = team.id;
        isTeamLeader = true;

        const finalTeamSize = 1 + submittedTeamMembers.length;

        if (event.maxTeamSize !== null && finalTeamSize > event.maxTeamSize) {
          throw new Error(
            `Team cannot have more than ${event.maxTeamSize} members`,
          );
        }

        if (event.minTeamSize !== null && finalTeamSize < event.minTeamSize) {
          throw new Error(
            `Team must have at least ${event.minTeamSize} members`,
          );
        }
      }

      const totalRegistrationsToCreate = 1 + submittedTeamMembers.length;

      const registeredCount = await tx.eventRegistration.count({
        where: {
          eventId,
          registrationStatus: {
            in: ["REGISTERED", "ATTENDED"],
          },
        },
      });

      const availableCapacity =
        event.capacity === null
          ? null
          : Math.max(event.capacity - registeredCount, 0);

      const registrationStatus =
        availableCapacity !== null &&
        totalRegistrationsToCreate > availableCapacity
          ? "WAITLISTED"
          : "REGISTERED";

      const createQrToken = () =>
        event.enableQrAttendance ? randomBytes(32).toString("hex") : null;

      const leaderRegistration = await tx.eventRegistration.create({
        data: {
          eventId,
          userId: userId ?? null,
          teamId,
          name: input.name.trim(),
          email,
          phone: input.phone?.trim() ?? null,
          qrToken: registrationStatus === "REGISTERED" ? createQrToken() : null,
          isTeamLeader,
          registrationStatus,
        },
      });

      const allFormAnswers: FormAnswerInput = {
        ...input.answers,
      };

      if (isTeamEvent) {
        for (const [key, value] of Object.entries(input.teamAnswers)) {
          allFormAnswers[key] = value;
        }

        const teamNameField = form.fields.find(
          (field) => field.scope === "TEAM" && field.key === "team_name",
        );

        if (teamNameField && !allFormAnswers.team_name) {
          allFormAnswers.team_name = input.teamName!;
        }
      }

      const answerEntries = Object.entries(allFormAnswers).filter(([key]) =>
        form.fields.some((field) => field.key === key),
      );

      if (answerEntries.length > 0) {
        await tx.eventFormResponse.create({
          data: {
            formId: form.id,
            registrationId: leaderRegistration.id,
            answers: {
              create: answerEntries.map(([key, value]) => {
                const field = form.fields.find((item) => item.key === key);

                if (!field) {
                  throw new Error(`Unknown registration field: ${key}`);
                }

                return {
                  fieldId: field.id,
                  value: value as Prisma.InputJsonValue,
                };
              }),
            },
          },
        });
      }

      const createdTeamMembers: Array<{
        id: string;
        name: string;
        email: string;
        phone: string | null;
        answers: FormAnswerInput;
      }> = [];

      for (const member of submittedTeamMembers) {
        const memberRegistration = await tx.eventRegistration.create({
          data: {
            eventId,
            userId: null,
            teamId,
            name: member.name,
            email: member.email,
            phone: member.phone,
            qrToken:
              event.enableQrAttendance && registrationStatus === "REGISTERED"
                ? randomBytes(32).toString("hex")
                : null,
            isTeamLeader: false,
            registrationStatus,
          },
        });

        const memberAnswerEntries = Object.entries(member.answers).filter(
          ([key]) => form.fields.some((field) => field.key === key),
        );

        if (memberAnswerEntries.length > 0) {
          await tx.eventFormResponse.create({
            data: {
              formId: form.id,
              registrationId: memberRegistration.id,
              answers: {
                create: memberAnswerEntries.map(([key, value]) => {
                  const field = form.fields.find((item) => item.key === key);

                  if (!field) {
                    throw new Error(`Unknown registration field: ${key}`);
                  }

                  if (field.scope !== "PARTICIPANT") {
                    throw new Error(
                      `The field "${field.label}" must be submitted at team level`,
                    );
                  }

                  return {
                    fieldId: field.id,
                    value: value as Prisma.InputJsonValue,
                  };
                }),
              },
            },
          });
        }

        createdTeamMembers.push({
          id: memberRegistration.id,
          name: memberRegistration.name,
          email: memberRegistration.email,
          phone: memberRegistration.phone,
          answers: member.answers,
        });
      }

      await tx.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "REGISTER",
          entityType: "EVENT_REGISTRATION",
          entityId: leaderRegistration.id,
          description: `Registered for event "${event.title}"${
            isTeamEvent ? ` with team "${input.teamName}"` : ""
          }`,
        },
      });

      if (userId) {
        await createNotification(
          {
            userId,
            title: "Registration Confirmed",
            message: `You have successfully registered for "${event.title}".`,
            type: "EVENT",
          },
          tx,
        );
      }

      return {
        ...(await tx.eventRegistration.findUniqueOrThrow({
          where: {
            id: leaderRegistration.id,
          },
          include: {
            team: true,
            formResponse: {
              include: {
                answers: {
                  include: {
                    field: true,
                  },
                },
              },
            },
            event: {
              select: {
                id: true,
                title: true,
                slug: true,
                enableQrAttendance: true,
              },
            },
          },
        })),
        teamMembers: createdTeamMembers,
      };
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
      participationType: true,
      minTeamSize: true,
      maxTeamSize: true,
      enableQrAttendance: true,
      registrationForm: {
        select: {
          id: true,
          title: true,
          status: true,
        },
      },
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
    include: {
      team: true,
      formResponse: {
        include: {
          answers: {
            include: {
              field: true,
            },
          },
        },
      },
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
              enableQrAttendance: true,
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

      if (status === "ATTENDED" && registration.event.enableQrAttendance) {
        throw new Error(
          "Attendance must be recorded by scanning the participant QR code",
        );
      }

      if (status === "REGISTERED" && registration.event.capacity !== null) {
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

      const updatedRegistration = await tx.eventRegistration.update({
        where: {
          id: registrationId,
        },
        data: {
          registrationStatus: status,
          attendedAt: status === "ATTENDED" ? new Date() : null,
          qrToken:
            status === "REGISTERED" && registration.event.enableQrAttendance
              ? (registration.qrToken ?? randomBytes(32).toString("hex"))
              : status === "REGISTERED"
                ? registration.qrToken
                : null,
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
                qrToken: registration.event.enableQrAttendance
                  ? randomBytes(32).toString("hex")
                  : null,
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
  const result = await prisma.$transaction(
    async (tx) => {
      const event = await tx.event.findUnique({
        where: {
          id: eventId,
        },
        select: {
          id: true,
          title: true,
          capacity: true,
          enableQrAttendance: true,
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

      const activeCount = await tx.eventRegistration.count({
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

      const nextWaitlisted = await tx.eventRegistration.findFirst({
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

      const promoted = await tx.eventRegistration.update({
        where: {
          id: nextWaitlisted.id,
        },
        data: {
          registrationStatus: "REGISTERED",
          qrToken: event.enableQrAttendance
            ? randomBytes(32).toString("hex")
            : null,
        },
      });

      await tx.auditLog.create({
        data: {
          userId: actorId,
          action: "UPDATE",
          entityType: "EVENT_REGISTRATION",
          entityId: promoted.id,
          description: `Waitlisted participant promoted for event "${event.title}"`,
        },
      });

      if (promoted.userId) {
        await createNotification(
          {
            userId: promoted.userId,
            title: "Waitlist Promotion",
            message: `A seat has become available. You have been moved from the waitlist to registered for "${event.title}".`,
            type: "EVENT",
          },
          tx,
        );
      }

      return promoted;
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      maxWait: 5000,
      timeout: 10000,
    },
  );

  return result;
}

export async function scanRegistrationQr(
  qrToken: string,
  eventId: string,
  actorId: string,
) {
  const normalizedToken = qrToken.trim();

  if (!normalizedToken) {
    throw new Error("QR token is required");
  }

  if (!eventId.trim()) {
    throw new Error("Event ID is required");
  }

  const result = await prisma.$transaction(
    async (tx) => {
      const registration = await tx.eventRegistration.findUnique({
        where: {
          qrToken: normalizedToken,
        },
        include: {
          event: {
            select: {
              id: true,
              title: true,
              enableQrAttendance: true,
            },
          },
          team: true,
        },
      });

      if (!registration) {
        throw new Error("Invalid QR code");
      }

      if (registration.event.id !== eventId) {
        throw new Error("This QR code does not belong to this event");
      }

      if (!registration.event.enableQrAttendance) {
        throw new Error("QR attendance is not enabled for this event");
      }

      if (registration.registrationStatus === "CANCELLED") {
        throw new Error("This registration has been cancelled");
      }

      if (registration.registrationStatus === "WAITLISTED") {
        throw new Error("Waitlisted participants cannot be marked as attended");
      }

      if (registration.registrationStatus === "ATTENDED") {
        throw new Error("Attendance has already been recorded");
      }

      if (registration.registrationStatus !== "REGISTERED") {
        throw new Error("This participant is not eligible for attendance");
      }

      const attendedAt = new Date();

      let participants;

      if (registration.teamId) {
        const teamRegistrations = await tx.eventRegistration.findMany({
          where: {
            teamId: registration.teamId,
            eventId,
          },
          include: {
            team: true,
          },
          orderBy: [
            {
              isTeamLeader: "desc",
            },
            {
              registeredAt: "asc",
            },
          ],
        });

        const registeredTeamMembers = teamRegistrations.filter(
          (member) => member.registrationStatus === "REGISTERED",
        );

        if (registeredTeamMembers.length === 0) {
          throw new Error(
            "No registered team members are eligible for attendance",
          );
        }

        await tx.eventRegistration.updateMany({
          where: {
            teamId: registration.teamId,
            eventId,
            registrationStatus: "REGISTERED",
          },
          data: {
            registrationStatus: "ATTENDED",
            attendedAt,
          },
        });

        const updatedTeamMembers = await tx.eventRegistration.findMany({
          where: {
            teamId: registration.teamId,
            eventId,
          },
          include: {
            team: true,
          },
          orderBy: [
            {
              isTeamLeader: "desc",
            },
            {
              registeredAt: "asc",
            },
          ],
        });

        for (const member of registeredTeamMembers) {
          await tx.auditLog.create({
            data: {
              userId: actorId,
              action: "ATTEND",
              entityType: "EVENT_REGISTRATION",
              entityId: member.id,
              description: `QR attendance recorded for "${member.name}" at event "${registration.event.title}" as part of team "${registration.team?.name ?? "Team"}"`,
            },
          });

          if (member.userId) {
            await createNotification(
              {
                userId: member.userId,
                title: "Attendance Recorded",
                message: `Your attendance for "${registration.event.title}" has been recorded successfully.`,
                type: "EVENT",
              },
              tx,
            );
          }
        }

        participants = updatedTeamMembers.map((member) => ({
          id: member.id,
          name: member.name,
          email: member.email,
          phone: member.phone,
          isTeamLeader: member.isTeamLeader,
          registrationStatus: member.registrationStatus,
          attendedAt: member.attendedAt,
        }));

        return {
          type: "TEAM" as const,
          event: {
            id: registration.event.id,
            title: registration.event.title,
          },
          team: registration.team
            ? {
                id: registration.team.id,
                name: registration.team.name,
              }
            : null,
          scannedParticipant: {
            id: registration.id,
            name: registration.name,
          },
          participants,
          attendanceRecordedAt: attendedAt,
        };
      }

      const updated = await tx.eventRegistration.update({
        where: {
          id: registration.id,
        },
        data: {
          registrationStatus: "ATTENDED",
          attendedAt,
        },
      });

      await tx.auditLog.create({
        data: {
          userId: actorId,
          action: "ATTEND",
          entityType: "EVENT_REGISTRATION",
          entityId: registration.id,
          description: `QR attendance recorded for "${registration.name}" at event "${registration.event.title}"`,
        },
      });

      if (registration.userId) {
        await createNotification(
          {
            userId: registration.userId,
            title: "Attendance Recorded",
            message: `Your attendance for "${registration.event.title}" has been recorded successfully.`,
            type: "EVENT",
          },
          tx,
        );
      }

      participants = [
        {
          id: updated.id,
          name: updated.name,
          email: updated.email,
          phone: updated.phone,
          isTeamLeader: updated.isTeamLeader,
          registrationStatus: updated.registrationStatus,
          attendedAt: updated.attendedAt,
        },
      ];

      return {
        type: "INDIVIDUAL" as const,
        event: {
          id: registration.event.id,
          title: registration.event.title,
        },
        team: null,
        scannedParticipant: {
          id: registration.id,
          name: registration.name,
        },
        participants,
        attendanceRecordedAt: attendedAt,
      };
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      maxWait: 5000,
      timeout: 10000,
    },
  );

  return result;
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
      team: true,
      formResponse: {
        include: {
          answers: {
            include: {
              field: true,
            },
          },
        },
      },
      event: {
        select: {
          id: true,
          slug: true,
          title: true,
          shortDescription: true,
          description: true,
          bannerImage: true,
          eventDate: true,
          startTime: true,
          endTime: true,
          registrationDeadline: true,
          venue: true,
          access: true,
          status: true,
          capacity: true,
          participationType: true,
          minTeamSize: true,
          maxTeamSize: true,
          enableQrAttendance: true,
        },
      },
    },
  });

  return registrations;
}
