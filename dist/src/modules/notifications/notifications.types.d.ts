import type { NotificationType } from "../../generated/prisma/client.js";
export interface CreateNotificationInput {
    userId: string;
    title: string;
    message: string;
    type: NotificationType;
}
export interface NotificationListFilters {
    isRead?: boolean | undefined;
}
export interface NotificationResponse {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: NotificationType;
    isRead: boolean;
    createdAt: Date;
}
//# sourceMappingURL=notifications.types.d.ts.map