import type { Request, Response } from "express";
import { prisma } from "../../config/prisma.js";

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

  return 400;
}

export async function getAuditLogsController(req: Request, res: Response) {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (user.role !== "WEBMASTER") {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to view audit logs",
      });
    }

    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 25, 1), 100);

    const skip = (page - 1) * limit;

    const action =
      typeof req.query.action === "string" ? req.query.action : undefined;

    const entityType =
      typeof req.query.entityType === "string"
        ? req.query.entityType
        : undefined;

    const search =
      typeof req.query.search === "string" ? req.query.search.trim() : "";

    const where = {
      ...(action && action !== "ALL"
        ? {
            action: action as any,
          }
        : {}),

      ...(entityType && entityType !== "ALL"
        ? {
            entityType: entityType as any,
          }
        : {}),

      ...(search
        ? {
            description: {
              contains: search,
              mode: "insensitive" as const,
            },
          }
        : {}),
    };

    const [logs, total] = await prisma.$transaction([
      prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              role: true,
            },
          },
        },
      }),

      prisma.auditLog.count({
        where,
      }),
    ]);

    return res.status(200).json({
      success: true,
      message: "Audit logs retrieved successfully",
      data: {
        logs,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    return res.status(getErrorStatus(error)).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to retrieve audit logs",
    });
  }
}
