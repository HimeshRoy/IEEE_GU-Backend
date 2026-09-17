import type { Request, Response } from "express";
import {
  publicRegistrationSchema,
  registrationListQuerySchema,
  updateRegistrationStatusSchema,
} from "./registrations.dto.js";
import {
  getEventRegistrations,
  promoteNextWaitlisted,
  registerForEvent,
  getMyRegistrations,
  updateRegistrationStatus,
} from "./registrations.service.js";
import { syncEventRegistrationsToExcel } from "./registrations.excel.js";

function getParam(value: string | string[] | undefined): string | null {
  if (typeof value === "string" && value.length > 0) {
    return value;
  }

  return null;
}

function getDownloadFileName(eventTitle: string) {
  const safeTitle = eventTitle
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return `${safeTitle || "Event"}-Registrations.xlsx`;
}

export async function registerForEventController(req: Request, res: Response) {
  try {
    const eventId = getParam(req.params.eventId);

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const input = publicRegistrationSchema.parse(req.body);

    const registration = await registerForEvent(eventId, input, req.user?.id);

    try {
      await syncEventRegistrationsToExcel(eventId);
    } catch (excelError) {
      console.error(
        "Excel synchronization failed after registration:",
        excelError,
      );
    }

    return res.status(201).json({
      success: true,
      message:
        registration.registrationStatus === "WAITLISTED"
          ? "Event is full. You have been added to the waitlist."
          : "Event registration successful",
      data: registration,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to register for event";

    const status = message === "Event not found" ? 404 : 400;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function getEventRegistrationsController(
  req: Request,
  res: Response,
) {
  try {
    const eventId = getParam(req.params.eventId);

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const filters = registrationListQuerySchema.parse(req.query);

    const result = await getEventRegistrations(eventId, filters);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to fetch registrations";

    const status = message === "Event not found" ? 404 : 400;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function updateRegistrationStatusController(
  req: Request,
  res: Response,
) {
  try {
    const registrationId = getParam(req.params.registrationId);

    if (!registrationId) {
      return res.status(400).json({
        success: false,
        message: "Registration ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const input = updateRegistrationStatusSchema.parse(req.body);

    const registration = await updateRegistrationStatus(
      registrationId,
      input.status,
      req.user.id,
    );

    try {
      await syncEventRegistrationsToExcel(registration.eventId);
    } catch (excelError) {
      console.error(
        "Excel synchronization failed after registration status update:",
        excelError,
      );
    }

    return res.status(200).json({
      success: true,
      message: "Registration status updated successfully",
      data: registration,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to update registration";

    const status = message === "Registration not found" ? 404 : 400;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function promoteNextWaitlistedController(
  req: Request,
  res: Response,
) {
  try {
    const eventId = getParam(req.params.eventId);

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const registration = await promoteNextWaitlisted(eventId, req.user.id);

    try {
      await syncEventRegistrationsToExcel(eventId);
    } catch (excelError) {
      console.error(
        "Excel synchronization failed after waitlist promotion:",
        excelError,
      );
    }

    return res.status(200).json({
      success: true,
      message: "Next waitlisted participant promoted successfully",
      data: registration,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to promote waitlisted participant";

    const status = message === "Event not found" ? 404 : 400;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function syncEventRegistrationsToExcelController(
  req: Request,
  res: Response,
) {
  try {
    const eventId = getParam(req.params.eventId);

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const result = await syncEventRegistrationsToExcel(eventId);

    return res.status(200).json({
      success: true,
      message: "Event registrations exported to Excel successfully",
      data: {
        eventId: result.eventId,
        eventTitle: result.eventTitle,
        registrationCount: result.registrationCount,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to export registrations to Excel";

    const status = message === "Event not found" ? 404 : 500;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function downloadEventRegistrationsExcelController(
  req: Request,
  res: Response,
) {
  try {
    const eventId = getParam(req.params.eventId);

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const result = await syncEventRegistrationsToExcel(eventId);

    const fileName = getDownloadFileName(result.eventTitle);

    return res.download(result.filePath, fileName, (error) => {
      if (error) {
        console.error("Excel download failed:", error);

        if (!res.headersSent) {
          res.status(500).json({
            success: false,
            message: "Failed to download Excel file",
          });
        }
      }
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to download registrations Excel file";

    const status = message === "Event not found" ? 404 : 500;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function getMyRegistrationsController(
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

    const registrations = await getMyRegistrations(req.user.id);

    return res.status(200).json({
      success: true,
      data: registrations,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch your registrations";

    return res.status(500).json({
      success: false,
      message,
    });
  }
}