import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import {
  applyForMembershipApplication,
  approveMembershipApplication,
  getMyMembershipDetails,
  getPendingMembershipApplications,
  rejectMembershipApplication,
} from "./membership.controller.js";

const router = Router();

router.post("/apply", authenticate, applyForMembershipApplication);

router.get("/me", authenticate, getMyMembershipDetails);

const membershipManagementAccess = authorizeRolesOrPositions(
  ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
  ["CHAIRMAN"],
);

router.get(
  "/pending",
  authenticate,
  membershipManagementAccess,
  getPendingMembershipApplications,
);

router.patch(
  "/:memberProfileId/approve",
  authenticate,
  membershipManagementAccess,
  approveMembershipApplication,
);

router.patch(
  "/:memberProfileId/reject",
  authenticate,
  membershipManagementAccess,
  rejectMembershipApplication,
);

export default router;
