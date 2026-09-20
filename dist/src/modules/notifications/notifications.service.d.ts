import { prisma } from "../../config/prisma.js";
import type { Prisma } from "../../generated/prisma/client.js";
import type { CreateNotificationInput, NotificationListFilters } from "./notifications.types.js";
type PrismaClientOrTransaction = Prisma.TransactionClient | typeof prisma;
export declare function createNotification(input: CreateNotificationInput, db?: PrismaClientOrTransaction): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    type: import("../../generated/prisma/enums.js").NotificationType;
    message: string;
    title: string;
    isRead: boolean;
}>;
export declare function createNotifications(inputs: CreateNotificationInput[], db?: PrismaClientOrTransaction): Promise<{
    count: number;
}>;
export declare function getUserNotifications(userId: string, filters?: NotificationListFilters): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    type: import("../../generated/prisma/enums.js").NotificationType;
    message: string;
    title: string;
    isRead: boolean;
}[]>;
export declare function getUnreadNotificationCount(userId: string): Promise<number>;
export declare function markNotificationAsRead(userId: string, notificationId: string): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    type: import("../../generated/prisma/enums.js").NotificationType;
    message: string;
    title: string;
    isRead: boolean;
}>;
export declare function markAllNotificationsAsRead(userId: string): Promise<{
    updatedCount: number;
}>;
export declare function deleteNotification(userId: string, notificationId: string): Promise<{
    deleted: boolean;
}>;
export {};
//# sourceMappingURL=notifications.service.d.ts.map