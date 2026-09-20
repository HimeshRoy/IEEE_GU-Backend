import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import {
  createEventSchema,
  eventListQuerySchema,
  rejectEventSchema,
  updateEventSchema,
} from "./events.dto.js";
import {
  approveEvent,
  cancelEvent,
  completeEvent,
  createEvent,
  deleteEvent,
  getStudentEvents,
  getEventById,
  getEvents,
  publishEvent,
  rejectEvent,
  getEventBySlug,
  submitEventForApproval,
  updateEvent,
  uploadEventBanner,
  removeEventBanner,
} from "./events.service.js";

function getEventId(req: Request): string | null {
  const value = req.params.eventId;

  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

function getErrorStatus(error: unknown): number {
  if (!(error instanceof Error)) {
    return 500;
  }

  if (error.message.includes("not found")) {
    return 404;
  }

  if (
    error.message.includes("not authorized") ||
    error.message.includes("authorized")
  ) {
    return 403;
  }

  return 400;
}

export async function createEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const input = createEventSchema.parse(req.body);
    const event = await createEvent(userId, input);

    return res.status(201).json({
      success: true,
      message: "Event created successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function getEventsController(req: Request, res: Response) {
  try {
    const query = eventListQuerySchema.parse(req.query);

    const isStaff =
      req.user?.role === "WEBMASTER" ||
      req.user?.role === "IEEE_COUNSELOR" ||
      req.user?.role === "FACULTY_ADVISOR" ||
      req.user?.role === "CHAIRMAN";

    const events = await getEvents(query, isStaff);

    return res.status(200).json({
      success: true,
      message: "Events retrieved successfully",
      data: events,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function getEventController(req: Request, res: Response) {
  try {
    const eventId = getEventId(req);

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const isStaff =
      req.user?.role === "WEBMASTER" ||
      req.user?.role === "IEEE_COUNSELOR" ||
      req.user?.role === "FACULTY_ADVISOR" ||
      req.user?.role === "CHAIRMAN";

    const event = await getEventById(eventId, isStaff);

    return res.status(200).json({
      success: true,
      message: "Event retrieved successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function getEventManagementController(
  req: Request,
  res: Response,
) {
  try {
    const query = eventListQuerySchema.parse(req.query);

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const isStaff =
      req.user?.role === "WEBMASTER" ||
      req.user?.role === "IEEE_COUNSELOR" ||
      req.user?.role === "FACULTY_ADVISOR" ||
      req.user?.role === "CHAIRMAN";

    if (!isStaff) {
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

      if (!chairman) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to manage events",
        });
      }
    }

    const events = await getEvents(query, true);

    return res.status(200).json({
      success: true,
      message: "Event management list retrieved successfully",
      data: events,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function updateEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const input = updateEventSchema.parse(req.body);
    const event = await updateEvent(userId, eventId, input);

    return res.status(200).json({
      success: true,
      message: "Event updated successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function uploadEventBannerController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Event banner image is required",
      });
    }

    const result = await uploadEventBanner(userId, eventId, req.file);

    return res.status(200).json({
      success: true,
      message: "Event banner uploaded successfully",
      data: result.event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function removeEventBannerController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await removeEventBanner(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event banner removed successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function deleteEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    await deleteEvent(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function submitEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await submitEventForApproval(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event submitted for approval",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function approveEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await approveEvent(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event approved successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function rejectEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const { rejectionReason } = rejectEventSchema.parse(req.body);
    const event = await rejectEvent(userId, eventId, rejectionReason);

    return res.status(200).json({
      success: true,
      message: "Event rejected successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function publishEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await publishEvent(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event published successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function cancelEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await cancelEvent(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event cancelled successfully",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function completeEventController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;
    const eventId = getEventId(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!eventId) {
      return res.status(400).json({
        success: false,
        message: "Event ID is required",
      });
    }

    const event = await completeEvent(userId, eventId);

    return res.status(200).json({
      success: true,
      message: "Event marked as completed",
      data: event,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}

export async function getEventBySlugController(req: Request, res: Response) {
  try {
    const slug = req.params.slug;

    if (!slug || Array.isArray(slug)) {
      return res.status(400).json({
        success: false,
        message: "Event slug is required",
      });
    }

    const event = await getEventBySlug(slug);

    return res.status(200).json({
      success: true,
      message: "Event retrieved successfully",
      data: event,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Event not found",
    });
  }
}

export async function getStudentEventsController(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const events = await getStudentEvents(userId);

    return res.status(200).json({
      success: true,
      message: "Student events retrieved successfully",
      data: events,
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    });
  }
}
