import { prisma } from "../../config/prisma.js";
import { announcementQuerySchema, createAnnouncementSchema, rejectAnnouncementSchema, updateAnnouncementSchema, } from "./announcements.dto.js";
import { approveAnnouncement, createAnnouncement, deleteAnnouncement, getAnnouncementById, getAnnouncements, publishAnnouncement, rejectAnnouncement, submitAnnouncement, unpublishAnnouncement, updateAnnouncement, } from "./announcements.service.js";
function getParam(value) {
    if (typeof value === "string" && value.length > 0) {
        return value;
    }
    return null;
}
function getErrorStatus(message) {
    if (message === "Announcement not found") {
        return 404;
    }
    if (message.includes("do not have permission")) {
        return 403;
    }
    return 400;
}
async function hasManagementAccess(userId) {
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
        user.role === "WEBMASTER") {
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
export async function createAnnouncementController(req, res) {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const input = createAnnouncementSchema.parse(req.body);
        const announcement = await createAnnouncement(req.user.id, input);
        return res.status(201).json({
            success: true,
            message: "Announcement created successfully",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to create announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function getAnnouncementsController(req, res) {
    try {
        const filters = announcementQuerySchema.parse(req.query);
        const isManagementUser = req.user
            ? await hasManagementAccess(req.user.id)
            : false;
        const announcements = await getAnnouncements(isManagementUser
            ? filters
            : {
                visibility: "PUBLIC",
                isPublished: true,
            });
        return res.status(200).json({
            success: true,
            data: announcements,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to fetch announcements";
        return res.status(400).json({
            success: false,
            message,
        });
    }
}
export async function getAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        const isManagementUser = req.user
            ? await hasManagementAccess(req.user.id)
            : false;
        const announcement = await getAnnouncementById(announcementId, isManagementUser);
        return res.status(200).json({
            success: true,
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to fetch announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function updateAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const input = updateAnnouncementSchema.parse(req.body);
        const announcement = await updateAnnouncement(req.user.id, announcementId, input);
        return res.status(200).json({
            success: true,
            message: "Announcement updated successfully",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to update announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function submitAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const announcement = await submitAnnouncement(req.user.id, announcementId);
        return res.status(200).json({
            success: true,
            message: "Announcement submitted for approval",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to submit announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function approveAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const announcement = await approveAnnouncement(req.user.id, announcementId);
        return res.status(200).json({
            success: true,
            message: "Announcement approved successfully",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to approve announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function rejectAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const input = rejectAnnouncementSchema.parse(req.body);
        const announcement = await rejectAnnouncement(req.user.id, announcementId, input.rejectionReason);
        return res.status(200).json({
            success: true,
            message: "Announcement rejected successfully",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to reject announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function publishAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const announcement = await publishAnnouncement(req.user.id, announcementId);
        return res.status(200).json({
            success: true,
            message: "Announcement published successfully",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to publish announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function unpublishAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const announcement = await unpublishAnnouncement(req.user.id, announcementId);
        return res.status(200).json({
            success: true,
            message: "Announcement unpublished successfully",
            data: announcement,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to unpublish announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function deleteAnnouncementController(req, res) {
    try {
        const announcementId = getParam(req.params.announcementId);
        if (!announcementId) {
            return res.status(400).json({
                success: false,
                message: "Announcement ID is required",
            });
        }
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const result = await deleteAnnouncement(req.user.id, announcementId);
        return res.status(200).json({
            success: true,
            message: "Announcement deleted successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Failed to delete announcement";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
//# sourceMappingURL=announcements.controller.js.map