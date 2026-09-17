import type { Request, Response } from "express";
import { membershipRejectionSchema } from "./membership.dto.js";
import {
  approveMembership,
  applyForMembership,
  getMyMembership,
  getPendingMemberships,
  rejectMembership,
} from "./membership.service.js";

function getMemberProfileId(
  req: Request,
): string | null {
  const value = req.params.memberProfileId;

  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return value ?? null;
}

export async function applyForMembershipApplication(
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

    const memberProfile =
      await applyForMembership(userId);

    return res.status(201).json({
      success: true,
      message:
        "IEEE membership application submitted successfully",
      data: memberProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function getMyMembershipDetails(
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

    const memberProfile =
      await getMyMembership(userId);

    return res.status(200).json({
      success: true,
      message:
        "Membership details retrieved successfully",
      data: memberProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      const statusCode =
        error.message.includes("not found")
          ? 404
          : 400;

      return res.status(statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function getPendingMembershipApplications(
  _req: Request,
  res: Response,
) {
  try {
    const memberships =
      await getPendingMemberships();

    return res.status(200).json({
      success: true,
      message:
        "Pending membership applications retrieved successfully",
      data: memberships,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function approveMembershipApplication(
  req: Request,
  res: Response,
) {
  try {
    const approverId = req.user?.id;
    const memberProfileId =
      getMemberProfileId(req);

    if (!approverId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!memberProfileId) {
      return res.status(400).json({
        success: false,
        message:
          "Member profile ID is required",
      });
    }

    const memberProfile =
      await approveMembership(
        memberProfileId,
        approverId,
      );

    return res.status(200).json({
      success: true,
      message:
        "Membership approved successfully",
      data: memberProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      const statusCode =
        error.message.includes("not found")
          ? 404
          : 400;

      return res.status(statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function rejectMembershipApplication(
  req: Request,
  res: Response,
) {
  try {
    const approverId = req.user?.id;
    const memberProfileId =
      getMemberProfileId(req);

    if (!approverId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!memberProfileId) {
      return res.status(400).json({
        success: false,
        message:
          "Member profile ID is required",
      });
    }

    const { rejectionReason } =
      membershipRejectionSchema.parse(
        req.body,
      );

    const memberProfile =
      await rejectMembership(
        memberProfileId,
        approverId,
        rejectionReason,
      );

    return res.status(200).json({
      success: true,
      message:
        "Membership rejected successfully",
      data: memberProfile,
    });
  } catch (error) {
    if (error instanceof Error) {
      const statusCode =
        error.message.includes("not found")
          ? 404
          : 400;

      return res.status(statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}