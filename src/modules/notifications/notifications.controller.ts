import type { Request, Response } from "express";
import { z } from "zod";
import { notificationQuerySchema } from "./notifications.dto.js";
import {
  deleteNotification,
  getUnreadNotificationCount,
  getUserNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "./notifications.service.js";

function getParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

function getErrorStatus(message: string) {
  if (message === "Notification not found") {
    return 404;
  }

  return 400;
}

export async function getNotificationsController(req: Request, res: Response) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const filters = notificationQuerySchema.parse(req.query);

    const notifications = await getUserNotifications(req.user.id, filters);

    return res.status(200).json({
      success: true,
      data: notifications,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid notification filters",
        errors: error.flatten(),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to fetch notifications",
    });
  }
}

export async function getUnreadNotificationCountController(
  req: Request,
  res: Response,
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const count = await getUnreadNotificationCount(req.user.id);

    return res.status(200).json({
      success: true,
      data: {
        count,
      },
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch unread notification count",
    });
  }
}

export async function markNotificationAsReadController(
  req: Request,
  res: Response,
) {
  try {
    const notificationId = getParam(req.params.notificationId);

    if (!notificationId) {
      return res.status(400).json({
        success: false,
        message: "Notification ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const notification = await markNotificationAsRead(
      req.user.id,
      notificationId,
    );

    return res.status(200).json({
      success: true,
      message: "Notification marked as read",
      data: notification,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to mark notification as read";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}

export async function markAllNotificationsAsReadController(
  req: Request,
  res: Response,
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const result = await markAllNotificationsAsRead(req.user.id);

    return res.status(200).json({
      success: true,
      message: "All notifications marked as read",
      data: result,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Failed to mark notifications as read",
    });
  }
}

export async function deleteNotificationController(
  req: Request,
  res: Response,
) {
  try {
    const notificationId = getParam(req.params.notificationId);

    if (!notificationId) {
      return res.status(400).json({
        success: false,
        message: "Notification ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const result = await deleteNotification(req.user.id, notificationId);

    return res.status(200).json({
      success: true,
      message: "Notification deleted successfully",
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to delete notification";

    return res.status(getErrorStatus(message)).json({
      success: false,
      message,
    });
  }
}
