import { prisma } from "../../config/prisma.js";
export async function createNotification(input, db = prisma) {
    return db.notification.create({
        data: {
            userId: input.userId,
            title: input.title,
            message: input.message,
            type: input.type,
        },
    });
}
export async function createNotifications(inputs, db = prisma) {
    if (inputs.length === 0) {
        return {
            count: 0,
        };
    }
    return db.notification.createMany({
        data: inputs,
    });
}
export async function getUserNotifications(userId, filters = {}) {
    return prisma.notification.findMany({
        where: {
            userId,
            ...(filters.isRead !== undefined
                ? { isRead: filters.isRead }
                : {}),
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}
export async function getUnreadNotificationCount(userId) {
    return prisma.notification.count({
        where: {
            userId,
            isRead: false,
        },
    });
}
export async function markNotificationAsRead(userId, notificationId) {
    const notification = await prisma.notification.findFirst({
        where: {
            id: notificationId,
            userId,
        },
    });
    if (!notification) {
        throw new Error("Notification not found");
    }
    if (notification.isRead) {
        return notification;
    }
    return prisma.notification.update({
        where: {
            id: notificationId,
        },
        data: {
            isRead: true,
        },
    });
}
export async function markAllNotificationsAsRead(userId) {
    const result = await prisma.notification.updateMany({
        where: {
            userId,
            isRead: false,
        },
        data: {
            isRead: true,
        },
    });
    return {
        updatedCount: result.count,
    };
}
export async function deleteNotification(userId, notificationId) {
    const notification = await prisma.notification.findFirst({
        where: {
            id: notificationId,
            userId,
        },
    });
    if (!notification) {
        throw new Error("Notification not found");
    }
    await prisma.notification.delete({
        where: {
            id: notificationId,
        },
    });
    return {
        deleted: true,
    };
}
//# sourceMappingURL=notifications.service.js.map