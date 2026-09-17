import { prisma } from "../../config/prisma.js";
import type { Prisma } from "../../generated/prisma/client.js";
import type {
  CreateNotificationInput,
  NotificationListFilters,
} from "./notifications.types.js";

type PrismaClientOrTransaction = Prisma.TransactionClient | typeof prisma;

export async function createNotification(
  input: CreateNotificationInput,
  db: PrismaClientOrTransaction = prisma,
) {
  return db.notification.create({
    data: {
      userId: input.userId,
      title: input.title,
      message: input.message,
      type: input.type,
    },
  });
}

export async function createNotifications(
  inputs: CreateNotificationInput[],
  db: PrismaClientOrTransaction = prisma,
) {
  if (inputs.length === 0) {
    return {
      count: 0,
    };
  }

  return db.notification.createMany({
    data: inputs,
  });
}

export async function getUserNotifications(
  userId: string,
  filters: NotificationListFilters = {},
) {
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

export async function getUnreadNotificationCount(userId: string) {
  return prisma.notification.count({
    where: {
      userId,
      isRead: false,
    },
  });
}

export async function markNotificationAsRead(
  userId: string,
  notificationId: string,
) {
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

export async function markAllNotificationsAsRead(userId: string) {
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

export async function deleteNotification(
  userId: string,
  notificationId: string,
) {
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