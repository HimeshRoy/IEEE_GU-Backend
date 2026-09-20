import { prisma } from "../../config/prisma.js";
import { createNotification } from "../notifications/notifications.service.js";
async function hasOperationalAccess(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            role: true,
        },
    });
    if (!user) {
        return false;
    }
    if (user.role === "IEEE_COUNSELOR" ||
        user.role === "WEBMASTER" ||
        user.role === "FACULTY_ADVISOR" ||
        user.role === "CHAIRMAN") {
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
        where: {
            id: userId,
        },
        select: {
            role: true,
        },
    });
    if (!user) {
        return false;
    }
    if (user.role === "FACULTY_ADVISOR" ||
        user.role === "IEEE_COUNSELOR" ||
        user.role === "WEBMASTER" ||
        user.role === "CHAIRMAN") {
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
export async function createAnnouncement(actorId, input) {
    const canCreate = await hasOperationalAccess(actorId);
    if (!canCreate) {
        throw new Error("You do not have permission to create announcements");
    }
    const announcement = await prisma.announcement.create({
        data: {
            title: input.title,
            content: input.content,
            imageUrl: input.imageUrl ?? null,
            visibility: input.visibility,
            isPublished: false,
            approvalStatus: "PENDING",
            createdById: actorId,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "CREATE",
            entityType: "ANNOUNCEMENT",
            entityId: announcement.id,
            description: `Created announcement "${announcement.title}"`,
        },
    });
    return announcement;
}
export async function updateAnnouncement(actorId, announcementId, input) {
    const canUpdate = await hasOperationalAccess(actorId);
    if (!canUpdate) {
        throw new Error("You do not have permission to update announcements");
    }
    const existing = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!existing) {
        throw new Error("Announcement not found");
    }
    if (existing.isPublished || existing.approvalStatus === "APPROVED") {
        throw new Error("Published or approved announcements cannot be edited");
    }
    const data = {};
    if (input.title !== undefined) {
        data.title = input.title;
    }
    if (input.content !== undefined) {
        data.content = input.content;
    }
    if (input.imageUrl !== undefined) {
        data.imageUrl = input.imageUrl;
    }
    if (input.visibility !== undefined) {
        data.visibility = input.visibility;
    }
    data.approvalStatus = "PENDING";
    data.isPublished = false;
    data.publishedAt = null;
    data.approvedById = null;
    data.approvedAt = null;
    data.rejectionReason = null;
    const announcement = await prisma.announcement.update({
        where: {
            id: announcementId,
        },
        data,
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "UPDATE",
            entityType: "ANNOUNCEMENT",
            entityId: announcement.id,
            description: `Updated announcement "${announcement.title}"`,
        },
    });
    return announcement;
}
export async function getAnnouncements(filters = {}) {
    return prisma.announcement.findMany({
        where: {
            ...(filters.visibility
                ? {
                    visibility: filters.visibility,
                }
                : {}),
            ...(filters.approvalStatus
                ? {
                    approvalStatus: filters.approvalStatus,
                }
                : {}),
            ...(filters.isPublished !== undefined
                ? {
                    isPublished: filters.isPublished,
                }
                : {}),
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}
export async function getAnnouncementById(announcementId, includeUnpublished = false) {
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (!includeUnpublished && !announcement.isPublished) {
        throw new Error("Announcement not found");
    }
    return announcement;
}
export async function submitAnnouncement(actorId, announcementId) {
    const canSubmit = await hasOperationalAccess(actorId);
    if (!canSubmit) {
        throw new Error("You do not have permission to submit announcements");
    }
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (announcement.approvalStatus !== "REJECTED" &&
        announcement.approvalStatus !== "PENDING") {
        throw new Error("This announcement cannot be submitted");
    }
    const updated = await prisma.announcement.update({
        where: {
            id: announcementId,
        },
        data: {
            approvalStatus: "PENDING",
            isPublished: false,
            publishedAt: null,
            approvedById: null,
            approvedAt: null,
            rejectionReason: null,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "UPDATE",
            entityType: "ANNOUNCEMENT",
            entityId: announcementId,
            description: `Submitted announcement "${updated.title}" for approval`,
        },
    });
    return updated;
}
export async function approveAnnouncement(actorId, announcementId) {
    const canApprove = await hasApprovalAccess(actorId);
    if (!canApprove) {
        throw new Error("You do not have permission to approve announcements");
    }
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (announcement.approvalStatus !== "PENDING") {
        throw new Error("Only pending announcements can be approved");
    }
    const updated = await prisma.announcement.update({
        where: {
            id: announcementId,
        },
        data: {
            approvalStatus: "APPROVED",
            approvedById: actorId,
            approvedAt: new Date(),
            rejectionReason: null,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "APPROVE",
            entityType: "ANNOUNCEMENT",
            entityId: announcementId,
            description: `Approved announcement "${updated.title}"`,
        },
    });
    try {
        await createNotification({
            userId: announcement.createdById,
            title: "Announcement Approved",
            message: `Your announcement "${updated.title}" has been approved.`,
            type: "APPROVAL",
        });
    }
    catch (error) {
        console.error("Failed to create announcement approval notification:", error);
    }
    return updated;
}
export async function rejectAnnouncement(actorId, announcementId, rejectionReason) {
    const canReject = await hasApprovalAccess(actorId);
    if (!canReject) {
        throw new Error("You do not have permission to reject announcements");
    }
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (announcement.approvalStatus !== "PENDING") {
        throw new Error("Only pending announcements can be rejected");
    }
    const updated = await prisma.announcement.update({
        where: {
            id: announcementId,
        },
        data: {
            approvalStatus: "REJECTED",
            approvedById: null,
            approvedAt: null,
            isPublished: false,
            publishedAt: null,
            rejectionReason,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "REJECT",
            entityType: "ANNOUNCEMENT",
            entityId: announcementId,
            description: `Rejected announcement "${updated.title}"`,
        },
    });
    try {
        await createNotification({
            userId: announcement.createdById,
            title: "Announcement Rejected",
            message: `Your announcement "${updated.title}" has been rejected. Reason: ${rejectionReason}`,
            type: "APPROVAL",
        });
    }
    catch (error) {
        console.error("Failed to create announcement rejection notification:", error);
    }
    return updated;
}
export async function publishAnnouncement(actorId, announcementId) {
    const canPublish = await hasApprovalAccess(actorId);
    if (!canPublish) {
        throw new Error("You do not have permission to publish announcements");
    }
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (announcement.approvalStatus !== "APPROVED") {
        throw new Error("Only approved announcements can be published");
    }
    const updated = await prisma.announcement.update({
        where: {
            id: announcementId,
        },
        data: {
            isPublished: true,
            publishedAt: new Date(),
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "PUBLISH",
            entityType: "ANNOUNCEMENT",
            entityId: announcementId,
            description: `Published announcement "${updated.title}"`,
        },
    });
    try {
        await createNotification({
            userId: announcement.createdById,
            title: "Announcement Published",
            message: `Your announcement "${updated.title}" has been published and is now visible on the IEEE Geeta University website.`,
            type: "ANNOUNCEMENT",
        });
    }
    catch (error) {
        console.error("Failed to create announcement publication notification:", error);
    }
    return updated;
}
export async function unpublishAnnouncement(actorId, announcementId) {
    const canUnpublish = await hasApprovalAccess(actorId);
    if (!canUnpublish) {
        throw new Error("You do not have permission to unpublish announcements");
    }
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (!announcement.isPublished) {
        throw new Error("Announcement is not currently published");
    }
    const updated = await prisma.announcement.update({
        where: {
            id: announcementId,
        },
        data: {
            isPublished: false,
            publishedAt: null,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "UPDATE",
            entityType: "ANNOUNCEMENT",
            entityId: announcementId,
            description: `Unpublished announcement "${updated.title}"`,
        },
    });
    return updated;
}
export async function deleteAnnouncement(actorId, announcementId) {
    const canDelete = await hasOperationalAccess(actorId);
    if (!canDelete) {
        throw new Error("You do not have permission to delete announcements");
    }
    const announcement = await prisma.announcement.findUnique({
        where: {
            id: announcementId,
        },
    });
    if (!announcement) {
        throw new Error("Announcement not found");
    }
    if (announcement.isPublished) {
        throw new Error("Published announcements cannot be deleted. Unpublish them first.");
    }
    await prisma.announcement.delete({
        where: {
            id: announcementId,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId: actorId,
            action: "DELETE",
            entityType: "ANNOUNCEMENT",
            entityId: announcement.id,
            description: `Deleted announcement "${announcement.title}"`,
        },
    });
    return {
        id: announcementId,
    };
}
//# sourceMappingURL=announcements.service.js.map