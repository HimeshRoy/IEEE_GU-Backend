import { prisma } from "../../config/prisma.js";
import { cloudinary } from "../../config/cloudinary.js";
import {
  createNotification,
  createNotifications,
} from "../notifications/notifications.service.js";
import type {
  CreateEventInput,
  EventListFilters,
  UpdateEventInput,
} from "./events.types.js";

async function hasOperationalAccess(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      role: true,
    },
  });

  if (!user) {
    throw new Error("Authenticated user not found");
  }

  if (
    user.role === "WEBMASTER" ||
    user.role === "IEEE_COUNSELOR" ||
    user.role === "FACULTY_ADVISOR"
  ) {
    return true;
  }

  const chairman = await prisma.branchLeadership.findFirst({
    where: {
      userId,
      position: "CHAIRMAN",
      isCurrent: true,
    },
    select: {
      id: true,
    },
  });

  return Boolean(chairman);
}

async function hasApprovalAccess(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      role: true,
    },
  });

  if (!user) {
    throw new Error("Authenticated user not found");
  }

  if (
    user.role === "WEBMASTER" ||
    user.role === "IEEE_COUNSELOR" ||
    user.role === "FACULTY_ADVISOR"
  ) {
    return true;
  }

  const chairman = await prisma.branchLeadership.findFirst({
    where: {
      userId,
      position: "CHAIRMAN",
      isCurrent: true,
    },
    select: {
      id: true,
    },
  });

  return Boolean(chairman);
}

async function ensureEventExists(eventId: string) {
  const event = await prisma.event.findUnique({
    where: { id: eventId },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  return event;
}

export async function createEvent(userId: string, input: CreateEventInput) {
  if (!(await hasOperationalAccess(userId))) {
    throw new Error("You are not authorized to create events");
  }

  const existingSlug = await prisma.event.findUnique({
    where: {
      slug: input.slug,
    },
    select: {
      id: true,
    },
  });

  if (existingSlug) {
    throw new Error("An event with this slug already exists");
  }

  if (input.startTime && input.endTime && input.endTime <= input.startTime) {
    throw new Error("Event end time must be after start time");
  }

  if (
    input.registrationDeadline &&
    input.registrationDeadline >= input.eventDate
  ) {
    throw new Error("Registration deadline must be before the event date");
  }

  const event = await prisma.event.create({
    data: {
      title: input.title,
      slug: input.slug,
      description: input.description,
      eventDate: input.eventDate,
      status: "DRAFT",
      access: input.access,
      createdById: userId,
      approvalStatus: "PENDING",
      isFeatured: input.isFeatured ?? false,
      ...(input.shortDescription !== undefined && {
        shortDescription: input.shortDescription,
      }),
      ...(input.bannerImage !== undefined && {
        bannerImage: input.bannerImage,
      }),
      ...(input.venue !== undefined && {
        venue: input.venue,
      }),
      ...(input.startTime !== undefined && {
        startTime: input.startTime,
      }),
      ...(input.endTime !== undefined && {
        endTime: input.endTime,
      }),
      ...(input.registrationDeadline !== undefined && {
        registrationDeadline: input.registrationDeadline,
      }),
      ...(input.capacity !== undefined && {
        capacity: input.capacity,
      }),
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "CREATE",
      entityType: "EVENT",
      entityId: event.id,
      description: `Created event "${event.title}"`,
    },
  });

  return event;
}

export async function updateEvent(
  userId: string,
  eventId: string,
  input: UpdateEventInput,
) {
  if (!(await hasOperationalAccess(userId))) {
    throw new Error("You are not authorized to update events");
  }

  const event = await ensureEventExists(eventId);

  if (
    event.status === "PUBLISHED" ||
    event.status === "COMPLETED" ||
    event.status === "CANCELLED"
  ) {
    throw new Error("This event cannot be edited in its current state");
  }

  if (input.slug && input.slug !== event.slug) {
    const existingSlug = await prisma.event.findUnique({
      where: {
        slug: input.slug,
      },
      select: {
        id: true,
      },
    });

    if (existingSlug && existingSlug.id !== eventId) {
      throw new Error("An event with this slug already exists");
    }
  }

  const eventDate = input.eventDate ?? event.eventDate;
  const startTime = input.startTime ?? event.startTime;
  const endTime = input.endTime ?? event.endTime;
  const registrationDeadline =
    input.registrationDeadline ?? event.registrationDeadline;

  if (startTime && endTime && endTime <= startTime) {
    throw new Error("Event end time must be after start time");
  }

  if (registrationDeadline && registrationDeadline >= eventDate) {
    throw new Error("Registration deadline must be before the event date");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      ...(input.title !== undefined && {
        title: input.title,
      }),
      ...(input.slug !== undefined && {
        slug: input.slug,
      }),
      ...(input.shortDescription !== undefined && {
        shortDescription: input.shortDescription,
      }),
      ...(input.description !== undefined && {
        description: input.description,
      }),
      ...(input.bannerImage !== undefined && {
        bannerImage: input.bannerImage,
      }),
      ...(input.venue !== undefined && {
        venue: input.venue,
      }),
      ...(input.eventDate !== undefined && {
        eventDate: input.eventDate,
      }),
      ...(input.startTime !== undefined && {
        startTime: input.startTime,
      }),
      ...(input.endTime !== undefined && {
        endTime: input.endTime,
      }),
      ...(input.registrationDeadline !== undefined && {
        registrationDeadline: input.registrationDeadline,
      }),
      ...(input.capacity !== undefined && {
        capacity: input.capacity,
      }),
      ...(input.access !== undefined && {
        access: input.access,
      }),
      ...(input.isFeatured !== undefined && {
        isFeatured: input.isFeatured,
      }),
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "UPDATE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Updated event "${updatedEvent.title}"`,
    },
  });

  return updatedEvent;
}

export async function uploadEventBanner(
  userId: string,
  eventId: string,
  file: Express.Multer.File,
) {
  if (!(await hasOperationalAccess(userId))) {
    throw new Error("You are not authorized to upload event banners");
  }

  if (!file) {
    throw new Error("Event banner image is required");
  }

  const event = await ensureEventExists(eventId);

  if (
    event.status === "PUBLISHED" ||
    event.status === "COMPLETED" ||
    event.status === "CANCELLED"
  ) {
    throw new Error("The event banner cannot be changed in its current state");
  }

  const uploadedImage = await new Promise<{
    secure_url: string;
    public_id: string;
  }>((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "ieee-geeta-university/events",
        resource_type: "image",
        public_id: `event-${eventId}`,
        overwrite: true,
        invalidate: true,
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Failed to upload event banner"));
          return;
        }

        resolve({
          secure_url: result.secure_url,
          public_id: result.public_id,
        });
      },
    );

    uploadStream.end(file.buffer);
  });

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      bannerImage: uploadedImage.secure_url,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "UPDATE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Uploaded banner image for event "${event.title}"`,
    },
  });

  return {
    event: updatedEvent,
    image: uploadedImage,
  };
}

export async function removeEventBanner(userId: string, eventId: string) {
  if (!(await hasOperationalAccess(userId))) {
    throw new Error("You are not authorized to remove event banners");
  }

  const event = await ensureEventExists(eventId);

  if (
    event.status === "PUBLISHED" ||
    event.status === "COMPLETED" ||
    event.status === "CANCELLED"
  ) {
    throw new Error("The event banner cannot be changed in its current state");
  }

  if (event.bannerImage) {
    await cloudinary.uploader.destroy(
      `ieee-geeta-university/events/event-${eventId}`,
      {
        resource_type: "image",
        invalidate: true,
      },
    );
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      bannerImage: null,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "UPDATE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Removed banner image from event "${event.title}"`,
    },
  });

  return updatedEvent;
}

export async function getEvents(
  filters: EventListFilters = {},
  includeUnpublished = false,
) {
  const where: {
    status?:
      | "DRAFT"
      | "PENDING_APPROVAL"
      | "APPROVED"
      | "REJECTED"
      | "PUBLISHED"
      | "CANCELLED"
      | "COMPLETED";
    access?: "PUBLIC" | "UNIVERSITY" | "MEMBERS_ONLY" | "INVITE_ONLY";
    isFeatured?: boolean;
  } = {};

  if (filters.status !== undefined) {
    where.status = filters.status;
  }

  if (filters.access !== undefined) {
    where.access = filters.access;
  }

  if (filters.featured !== undefined) {
    where.isFeatured = filters.featured;
  }

  if (!includeUnpublished) {
    where.status = "PUBLISHED";
    where.access = "PUBLIC";
  }

  return prisma.event.findMany({
    where,
    orderBy: {
      eventDate: "asc",
    },
    include: {
      createdBy: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      _count: {
        select: {
          registrations: true,
        },
      },
    },
  });
}

export async function getEventById(
  eventId: string,
  includeUnpublished = false,
) {
  const event = await prisma.event.findFirst({
    where: {
      id: eventId,
      ...(includeUnpublished
        ? {}
        : {
            status: "PUBLISHED",
            access: "PUBLIC",
          }),
    },
    include: {
      createdBy: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      _count: {
        select: {
          registrations: true,
        },
      },
    },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  return event;
}

export async function submitEventForApproval(userId: string, eventId: string) {
  if (!(await hasOperationalAccess(userId))) {
    throw new Error("You are not authorized to submit events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status !== "DRAFT" && event.status !== "REJECTED") {
    throw new Error("Only draft or rejected events can be submitted");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      status: "PENDING_APPROVAL",
      approvalStatus: "PENDING",
      approvedById: null,
      approvedAt: null,
      rejectionReason: null,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "UPDATE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Submitted event "${event.title}" for approval`,
    },
  });

  return updatedEvent;
}

export async function approveEvent(userId: string, eventId: string) {
  if (!(await hasApprovalAccess(userId))) {
    throw new Error("You are not authorized to approve events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status !== "PENDING_APPROVAL") {
    throw new Error("Only pending events can be approved");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      status: "APPROVED",
      approvalStatus: "APPROVED",
      approvedById: userId,
      approvedAt: new Date(),
      rejectionReason: null,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "APPROVE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Approved event "${event.title}"`,
    },
  });

  await createNotification({
    userId: event.createdById,
    title: "Event Approved",
    message: `Your event "${event.title}" has been approved.`,
    type: "APPROVAL",
  });

  return updatedEvent;
}

export async function rejectEvent(
  userId: string,
  eventId: string,
  rejectionReason: string,
) {
  if (!(await hasApprovalAccess(userId))) {
    throw new Error("You are not authorized to reject events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status !== "PENDING_APPROVAL") {
    throw new Error("Only pending events can be rejected");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      status: "REJECTED",
      approvalStatus: "REJECTED",
      approvedById: userId,
      approvedAt: new Date(),
      rejectionReason,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "REJECT",
      entityType: "EVENT",
      entityId: eventId,
      description: `Rejected event "${event.title}"`,
    },
  });

  await createNotification({
    userId: event.createdById,
    title: "Event Rejected",
    message: `Your event "${event.title}" has been rejected. Reason: ${rejectionReason}`,
    type: "APPROVAL",
  });

  return updatedEvent;
}

export async function publishEvent(userId: string, eventId: string) {
  if (!(await hasApprovalAccess(userId))) {
    throw new Error("You are not authorized to publish events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status !== "APPROVED") {
    throw new Error("Only approved events can be published");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      status: "PUBLISHED",
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "PUBLISH",
      entityType: "EVENT",
      entityId: eventId,
      description: `Published event "${event.title}"`,
    },
  });

  await createNotification({
    userId: event.createdById,
    title: "Event Published",
    message: `Your event "${event.title}" has been published and is now visible on the IEEE Geeta University website.`,
    type: "EVENT",
  });

  return updatedEvent;
}

export async function cancelEvent(userId: string, eventId: string) {
  if (!(await hasApprovalAccess(userId))) {
    throw new Error("You are not authorized to cancel events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status === "CANCELLED" || event.status === "COMPLETED") {
    throw new Error("This event cannot be cancelled");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      status: "CANCELLED",
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "CANCEL",
      entityType: "EVENT",
      entityId: eventId,
      description: `Cancelled event "${event.title}"`,
    },
  });

  await createNotification({
    userId: event.createdById,
    title: "Event Cancelled",
    message: `Your event "${event.title}" has been cancelled.`,
    type: "EVENT",
  });

  const registrations = await prisma.eventRegistration.findMany({
    where: {
      eventId,
      registrationStatus: {
        in: ["REGISTERED", "WAITLISTED"],
      },
      userId: {
        not: null,
      },
    },
    select: {
      userId: true,
    },
  });

  const participantNotifications = registrations
    .filter(
      (registration): registration is { userId: string } =>
        registration.userId !== null,
    )
    .map((registration) => ({
      userId: registration.userId,
      title: "Event Cancelled",
      message: `The event "${event.title}" has been cancelled.`,
      type: "EVENT" as const,
    }));

  await createNotifications(participantNotifications);

  return updatedEvent;
}

export async function completeEvent(userId: string, eventId: string) {
  if (!(await hasApprovalAccess(userId))) {
    throw new Error("You are not authorized to complete events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status !== "PUBLISHED") {
    throw new Error("Only published events can be marked as completed");
  }

  const updatedEvent = await prisma.event.update({
    where: {
      id: eventId,
    },
    data: {
      status: "COMPLETED",
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "UPDATE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Completed event "${event.title}"`,
    },
  });

  return updatedEvent;
}

export async function deleteEvent(userId: string, eventId: string) {
  if (!(await hasOperationalAccess(userId))) {
    throw new Error("You are not authorized to delete events");
  }

  const event = await ensureEventExists(eventId);

  if (event.status === "PUBLISHED" || event.status === "COMPLETED") {
    throw new Error("Published or completed events cannot be deleted");
  }

  if (event.bannerImage) {
    await cloudinary.uploader.destroy(
      `ieee-geeta-university/events/event-${eventId}`,
      {
        resource_type: "image",
        invalidate: true,
      },
    );
  }

  await prisma.event.delete({
    where: {
      id: eventId,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "DELETE",
      entityType: "EVENT",
      entityId: eventId,
      description: `Deleted event "${event.title}"`,
    },
  });
}

export async function getEventBySlug(slug: string, includeUnpublished = false) {
  const event = await prisma.event.findFirst({
    where: {
      slug,
      ...(includeUnpublished
        ? {}
        : {
            status: "PUBLISHED",
            access: "PUBLIC",
          }),
    },
    include: {
      createdBy: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      _count: {
        select: {
          registrations: true,
        },
      },
    },
  });

  if (!event) {
    throw new Error("Event not found");
  }

  return event;
}

export async function getStudentEvents(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      role: true,
      memberProfile: {
        select: {
          membershipStatus: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("Authenticated user not found");
  }

  const isActiveMember = user.memberProfile?.membershipStatus === "ACTIVE";

  const accessValues: Array<"PUBLIC" | "UNIVERSITY" | "MEMBERS_ONLY"> = [
    "PUBLIC",
    "UNIVERSITY",
  ];

  if (isActiveMember) {
    accessValues.push("MEMBERS_ONLY");
  }

  return prisma.event.findMany({
    where: {
      status: "PUBLISHED",
      access: {
        in: accessValues,
      },
    },
    orderBy: {
      eventDate: "asc",
    },
    include: {
      createdBy: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
      _count: {
        select: {
          registrations: true,
        },
      },
    },
  });
}
