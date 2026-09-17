import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import {
  approveAnnouncementController,
  createAnnouncementController,
  deleteAnnouncementController,
  getAnnouncementController,
  getAnnouncementsController,
  publishAnnouncementController,
  rejectAnnouncementController,
  submitAnnouncementController,
  unpublishAnnouncementController,
  updateAnnouncementController,
} from "./announcements.controller.js";

const router = Router();

const operationalAccess = authorizeRolesOrPositions(
  ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER", "CHAIRMAN"],
  ["CHAIRMAN"],
);

const approvalAccess = authorizeRolesOrPositions(
  ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER", "CHAIRMAN"],
  ["CHAIRMAN"],
);

router.get("/", getAnnouncementsController);

router.get(
  "/manage",
  authenticate,
  operationalAccess,
  getAnnouncementsController,
);

router.get(
  "/manage/:announcementId",
  authenticate,
  operationalAccess,
  getAnnouncementController,
);

router.get("/:announcementId", getAnnouncementController);

router.post(
  "/",
  authenticate,
  operationalAccess,
  createAnnouncementController,
);

router.patch(
  "/:announcementId",
  authenticate,
  operationalAccess,
  updateAnnouncementController,
);

router.post(
  "/:announcementId/submit",
  authenticate,
  operationalAccess,
  submitAnnouncementController,
);

router.patch(
  "/:announcementId/approve",
  authenticate,
  approvalAccess,
  approveAnnouncementController,
);

router.patch(
  "/:announcementId/reject",
  authenticate,
  approvalAccess,
  rejectAnnouncementController,
);

router.patch(
  "/:announcementId/publish",
  authenticate,
  approvalAccess,
  publishAnnouncementController,
);

router.patch(
  "/:announcementId/unpublish",
  authenticate,
  approvalAccess,
  unpublishAnnouncementController,
);

router.delete(
  "/:announcementId",
  authenticate,
  operationalAccess,
  deleteAnnouncementController,
);

export default router;