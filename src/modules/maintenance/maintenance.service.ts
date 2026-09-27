import { prisma } from "../../config/prisma.js";
import type { UpdateMaintenanceInput } from "./maintenance.types.js";

async function ensureWebmaster(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      role: true,
    },
  });

  if (!user) {
    throw new Error("Authenticated user not found");
  }

  if (user.role !== "WEBMASTER") {
    throw new Error("You are not authorized to manage maintenance mode");
  }

  return user;
}

async function getOrCreateSettings() {
  let settings = await prisma.maintenanceSettings.findFirst();

  if (!settings) {
    settings = await prisma.maintenanceSettings.create({
      data: {
        enabled: false,
      },
    });
  }

  return settings;
}

export async function getMaintenanceStatus() {
  const settings = await getOrCreateSettings();

  return {
    enabled: settings.enabled,
    title: settings.title,
    message: settings.message,
    updatedAt: settings.updatedAt,
  };
}

export async function updateMaintenance(
  userId: string,
  input: UpdateMaintenanceInput,
) {
  await ensureWebmaster(userId);

  const current = await getOrCreateSettings();

  const settings = await prisma.maintenanceSettings.update({
    where: {
      id: current.id,
    },
    data: {
      enabled: input.enabled,
      ...(input.title !== undefined && {
        title: input.title,
      }),
      ...(input.message !== undefined && {
        message: input.message,
      }),
      updatedById: userId,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId,
      action: "UPDATE",
      entityType: "MAINTENANCE",
      entityId: settings.id,
      description: input.enabled
        ? "Enabled website maintenance mode"
        : "Disabled website maintenance mode",
    },
  });

  return {
    enabled: settings.enabled,
    title: settings.title,
    message: settings.message,
    updatedAt: settings.updatedAt,
  };
}