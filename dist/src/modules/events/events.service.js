import { prisma } from "../../config/prisma.js";
import { randomBytes } from "node:crypto";
import { cloudinary } from "../../config/cloudinary.js";
import { createNotification, createNotifications, } from "../notifications/notifications.service.js";
function getTemplateParticipation(template) {
    if (template?.endsWith("_TEAM")) {
        return "TEAM";
    }
    if (template?.endsWith("_INDIVIDUAL")) {
        return "INDIVIDUAL";
    }
    return null;
}
function getDefaultFormFields(template, participationType) {
    const fields = [
        {
            key: "name",
            label: "Full Name",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your full name",
            isSystemField: true,
        },
        {
            key: "email",
            label: "Email Address",
            type: "EMAIL",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your email address",
            isSystemField: true,
        },
        {
            key: "phone",
            label: "Mobile Number",
            type: "PHONE",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your mobile number",
            isSystemField: true,
        },
    ];
    if (template === "UNIVERSITY_INDIVIDUAL" || template === "UNIVERSITY_TEAM") {
        fields.push({
            key: "department",
            label: "Department",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your department",
            isSystemField: false,
        }, {
            key: "course",
            label: "Course",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your course",
            isSystemField: false,
        }, {
            key: "year",
            label: "Academic Year",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your academic year",
            isSystemField: false,
        }, {
            key: "roll_number",
            label: "Roll Number",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your roll number",
            isSystemField: false,
        }, {
            key: "ieee_membership_number",
            label: "IEEE Membership Number",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: false,
            placeholder: "Enter your IEEE membership number",
            isSystemField: false,
        });
    }
    if (template === "INTER_UNIVERSITY_INDIVIDUAL" ||
        template === "INTER_UNIVERSITY_TEAM") {
        fields.push({
            key: "institution",
            label: "Institution",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your institution",
            isSystemField: false,
        }, {
            key: "department",
            label: "Department",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your department",
            isSystemField: false,
        }, {
            key: "course",
            label: "Course",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your course",
            isSystemField: false,
        }, {
            key: "year",
            label: "Academic Year",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your academic year",
            isSystemField: false,
        });
    }
    if (participationType === "TEAM") {
        fields.unshift({
            key: "team_name",
            label: "Team Name",
            type: "SHORT_ANSWER",
            scope: "TEAM",
            required: true,
            placeholder: "Enter your team name",
            isSystemField: true,
        });
    }
    return fields;
}
async function ensureRegistrationForm(tx, event) {
    const existing = await tx.eventForm.findUnique({
        where: { eventId: event.id },
    });
    if (existing) {
        return existing;
    }
    const fields = getDefaultFormFields(event.registrationTemplate, event.participationType);
    return tx.eventForm.create({
        data: {
            eventId: event.id,
            title: `${event.title} Registration Form`,
            description: "Complete the registration form for this event.",
            template: event.registrationTemplate ?? null,
            status: "DRAFT",
            fields: {
                create: fields.map((field, index) => ({
                    ...field,
                    order: index + 1,
                })),
            },
        },
    });
}
async function hasOperationalAccess(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            role: true,
        },
    });
    if (!user) {
        throw new Error("Authenticated user not found");
    }
    if (user.role === "WEBMASTER" ||
        user.role === "IEEE_COUNSELOR" ||
        user.role === "FACULTY_ADVISOR") {
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
async function hasApprovalAccess(userId) {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            role: true,
        },
    });
    if (!user) {
        throw new Error("Authenticated user not found");
    }
    if (user.role === "WEBMASTER" ||
        user.role === "IEEE_COUNSELOR" ||
        user.role === "FACULTY_ADVISOR") {
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
async function ensureEventExists(eventId) {
    const event = await prisma.event.findUnique({
        where: { id: eventId },
    });
    if (!event) {
        throw new Error("Event not found");
    }
    return event;
}
export async function createEvent(userId, input) {
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
    if (input.registrationDeadline &&
        input.registrationDeadline >= input.eventDate) {
        throw new Error("Registration deadline must be before the event date");
    }
    const event = await prisma.$transaction(async (tx) => {
        const createdEvent = await tx.event.create({
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
                participationType: input.participationType,
                enableQrAttendance: input.enableQrAttendance ?? false,
                ...(input.registrationTemplate !== undefined && {
                    registrationTemplate: input.registrationTemplate,
                }),
                ...(input.minTeamSize !== undefined && {
                    minTeamSize: input.minTeamSize,
                }),
                ...(input.maxTeamSize !== undefined && {
                    maxTeamSize: input.maxTeamSize,
                }),
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
        await ensureRegistrationForm(tx, {
            id: createdEvent.id,
            title: createdEvent.title,
            registrationTemplate: createdEvent.registrationTemplate ?? undefined,
            participationType: createdEvent.participationType,
        });
        await tx.auditLog.create({
            data: {
                userId,
                action: "CREATE",
                entityType: "EVENT",
                entityId: createdEvent.id,
                description: `Created event "${createdEvent.title}"`,
            },
        });
        return createdEvent;
    });
    return event;
}
export async function updateEvent(userId, eventId, input) {
    if (!(await hasOperationalAccess(userId))) {
        throw new Error("You are not authorized to update events");
    }
    const event = await ensureEventExists(eventId);
    if (event.status === "PUBLISHED" ||
        event.status === "COMPLETED" ||
        event.status === "CANCELLED") {
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
    const existingRegistrationCount = await prisma.eventRegistration.count({
        where: {
            eventId,
        },
    });
    const nextParticipationType = input.participationType ?? event.participationType;
    const nextTemplate = input.registrationTemplate ?? event.registrationTemplate ?? undefined;
    const templateParticipation = getTemplateParticipation(nextTemplate);
    if (templateParticipation &&
        templateParticipation !== nextParticipationType) {
        throw new Error("Registration template and participation type must match");
    }
    if (nextParticipationType === "TEAM") {
        const nextMinTeamSize = input.minTeamSize ?? event.minTeamSize;
        const nextMaxTeamSize = input.maxTeamSize ?? event.maxTeamSize;
        if (nextMinTeamSize === null || nextMinTeamSize === undefined) {
            throw new Error("Minimum team size is required for team events");
        }
        if (nextMaxTeamSize === null || nextMaxTeamSize === undefined) {
            throw new Error("Maximum team size is required for team events");
        }
        if (nextMinTeamSize > nextMaxTeamSize) {
            throw new Error("Maximum team size must be greater than or equal to minimum team size");
        }
    }
    else if (input.minTeamSize !== undefined ||
        input.maxTeamSize !== undefined) {
        throw new Error("Team size can only be configured for team events");
    }
    if (existingRegistrationCount > 0 &&
        (input.participationType !== undefined ||
            input.registrationTemplate !== undefined ||
            input.minTeamSize !== undefined ||
            input.maxTeamSize !== undefined)) {
        throw new Error("Registration settings cannot be changed after registrations have been created");
    }
    const eventDate = input.eventDate ?? event.eventDate;
    const startTime = input.startTime ?? event.startTime;
    const endTime = input.endTime ?? event.endTime;
    const registrationDeadline = input.registrationDeadline ?? event.registrationDeadline;
    if (startTime && endTime && endTime <= startTime) {
        throw new Error("Event end time must be after start time");
    }
    if (registrationDeadline && registrationDeadline >= eventDate) {
        throw new Error("Registration deadline must be before the event date");
    }
    const updatedEvent = await prisma.$transaction(async (tx) => {
        const updated = await tx.event.update({
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
                ...(input.registrationTemplate !== undefined && {
                    registrationTemplate: input.registrationTemplate,
                }),
                ...(input.participationType !== undefined && {
                    participationType: input.participationType,
                }),
                ...(input.minTeamSize !== undefined && {
                    minTeamSize: input.minTeamSize,
                }),
                ...(input.maxTeamSize !== undefined && {
                    maxTeamSize: input.maxTeamSize,
                }),
                ...(input.enableQrAttendance !== undefined && {
                    enableQrAttendance: input.enableQrAttendance,
                }),
            },
        });
        if (input.enableQrAttendance !== undefined &&
            input.enableQrAttendance !== event.enableQrAttendance) {
            if (input.enableQrAttendance) {
                await tx.eventRegistration.updateMany({
                    where: {
                        eventId,
                        registrationStatus: "REGISTERED",
                    },
                    data: {
                        qrToken: null,
                    },
                });
                const registered = await tx.eventRegistration.findMany({
                    where: {
                        eventId,
                        registrationStatus: "REGISTERED",
                    },
                    select: { id: true },
                });
                for (const registration of registered) {
                    await tx.eventRegistration.update({
                        where: { id: registration.id },
                        data: {
                            qrToken: randomBytes(32).toString("hex"),
                        },
                    });
                }
            }
            else {
                await tx.eventRegistration.updateMany({
                    where: { eventId },
                    data: { qrToken: null },
                });
            }
        }
        if (input.registrationTemplate !== undefined ||
            input.participationType !== undefined) {
            const form = await tx.eventForm.findUnique({
                where: { eventId },
            });
            if (form && form.status === "DRAFT") {
                await tx.eventForm.update({
                    where: { id: form.id },
                    data: {
                        template: updated.registrationTemplate ?? null,
                    },
                });
            }
        }
        await tx.auditLog.create({
            data: {
                userId,
                action: "UPDATE",
                entityType: "EVENT",
                entityId: eventId,
                description: `Updated event "${updated.title}"`,
            },
        });
        return updated;
    });
    return updatedEvent;
}
export async function uploadEventBanner(userId, eventId, file) {
    if (!(await hasOperationalAccess(userId))) {
        throw new Error("You are not authorized to upload event banners");
    }
    if (!file) {
        throw new Error("Event banner image is required");
    }
    const event = await ensureEventExists(eventId);
    if (event.status === "PUBLISHED" ||
        event.status === "COMPLETED" ||
        event.status === "CANCELLED") {
        throw new Error("The event banner cannot be changed in its current state");
    }
    const uploadedImage = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder: "ieee-geeta-university/events",
            resource_type: "image",
            public_id: `event-${eventId}`,
            overwrite: true,
            invalidate: true,
        }, (error, result) => {
            if (error || !result) {
                reject(error ?? new Error("Failed to upload event banner"));
                return;
            }
            resolve({
                secure_url: result.secure_url,
                public_id: result.public_id,
            });
        });
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
export async function removeEventBanner(userId, eventId) {
    if (!(await hasOperationalAccess(userId))) {
        throw new Error("You are not authorized to remove event banners");
    }
    const event = await ensureEventExists(eventId);
    if (event.status === "PUBLISHED" ||
        event.status === "COMPLETED" ||
        event.status === "CANCELLED") {
        throw new Error("The event banner cannot be changed in its current state");
    }
    if (event.bannerImage) {
        await cloudinary.uploader.destroy(`ieee-geeta-university/events/event-${eventId}`, {
            resource_type: "image",
            invalidate: true,
        });
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
export async function getEvents(filters = {}, includeUnpublished = false) {
    const where = {};
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
export async function getEventById(eventId, includeUnpublished = false) {
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
export async function submitEventForApproval(userId, eventId) {
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
export async function approveEvent(userId, eventId) {
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
export async function rejectEvent(userId, eventId, rejectionReason) {
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
export async function publishEvent(userId, eventId) {
    if (!(await hasApprovalAccess(userId))) {
        throw new Error("You are not authorized to publish events");
    }
    const event = await ensureEventExists(eventId);
    if (event.status !== "APPROVED") {
        throw new Error("Only approved events can be published");
    }
    const form = await prisma.eventForm.findUnique({
        where: { eventId },
        select: {
            id: true,
            status: true,
        },
    });
    if (!form) {
        throw new Error("Registration form is not available");
    }
    if (form.status !== "PUBLISHED") {
        throw new Error("Registration form must be published before the event can be published");
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
export async function cancelEvent(userId, eventId) {
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
        .filter((registration) => registration.userId !== null)
        .map((registration) => ({
        userId: registration.userId,
        title: "Event Cancelled",
        message: `The event "${event.title}" has been cancelled.`,
        type: "EVENT",
    }));
    await createNotifications(participantNotifications);
    return updatedEvent;
}
export async function completeEvent(userId, eventId) {
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
export async function deleteEvent(userId, eventId) {
    if (!(await hasOperationalAccess(userId))) {
        throw new Error("You are not authorized to delete events");
    }
    const event = await ensureEventExists(eventId);
    if (event.status === "PUBLISHED" || event.status === "COMPLETED") {
        throw new Error("Published or completed events cannot be deleted");
    }
    if (event.bannerImage) {
        await cloudinary.uploader.destroy(`ieee-geeta-university/events/event-${eventId}`, {
            resource_type: "image",
            invalidate: true,
        });
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
export async function getEventBySlug(slug, includeUnpublished = false) {
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
export async function getStudentEvents(userId) {
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
    const accessValues = [
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
//# sourceMappingURL=events.service.js.map