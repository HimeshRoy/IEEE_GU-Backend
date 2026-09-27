import type { Request, Response } from "express";
import { updateMaintenanceSchema } from "./maintenance.dto.js";
import {
  getMaintenanceStatus,
  updateMaintenance,
} from "./maintenance.service.js";

function getErrorStatus(error: unknown) {
  if (!(error instanceof Error)) {
    return 500;
  }

  if (
    error.message.includes("not authorized") ||
    error.message.includes("authorized")
  ) {
    return 403;
  }

  if (error.message.includes("not found")) {
    return 404;
  }

  return 400;
}

export async function getMaintenanceController(
  _req: Request,
  res: Response,
) {
  try {
    const status = await getMaintenanceStatus();

    return res.status(200).json({
      success: true,
      message: "Maintenance status retrieved successfully",
      data: status,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
}

export async function updateMaintenanceController(
  req: Request,
  res: Response,
) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const input = updateMaintenanceSchema.parse(req.body);

    const status = await updateMaintenance(userId, input);

    return res.status(200).json({
      success: true,
      message: input.enabled
        ? "Maintenance mode enabled successfully"
        : "Maintenance mode disabled successfully",
      data: status,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Something went wrong",
    });
  }
}