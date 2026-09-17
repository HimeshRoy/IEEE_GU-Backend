import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import { imageUpload } from "../../middlewares/upload.middleware.js";
import {
  approveEventController,
  cancelEventController,
  completeEventController,
  createEventController,
  deleteEventController,
  getEventController,
  getEventManagementController,
  getEventsController,
  getStudentEventsController,
  publishEventController,
  rejectEventController,
  submitEventController,
  updateEventController,
  getEventBySlugController,
  uploadEventBannerController,
  removeEventBannerController,
} from "./events.controller.js";

const router = Router();

const operationalAccess = authorizeRolesOrPositions(
  ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
  ["CHAIRMAN"],
);

const approvalAccess = authorizeRolesOrPositions(
  ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
  ["CHAIRMAN"],
);

router.get("/", getEventsController);

router.get(
  "/manage",
  authenticate,
  operationalAccess,
  getEventManagementController,
);

router.get("/slug/:slug", getEventBySlugController);

router.get("/student", authenticate, getStudentEventsController);

router.get("/:eventId", getEventController);

router.post("/", authenticate, operationalAccess, createEventController);

router.patch(
  "/:eventId",
  authenticate,
  operationalAccess,
  updateEventController,
);

router.post(
  "/:eventId/banner",
  authenticate,
  operationalAccess,
  imageUpload.single("image"),
  uploadEventBannerController,
);

router.delete(
  "/:eventId/banner",
  authenticate,
  operationalAccess,
  removeEventBannerController,
);

router.delete(
  "/:eventId",
  authenticate,
  operationalAccess,
  deleteEventController,
);

router.post(
  "/:eventId/submit",
  authenticate,
  operationalAccess,
  submitEventController,
);

router.patch(
  "/:eventId/approve",
  authenticate,
  approvalAccess,
  approveEventController,
);

router.patch(
  "/:eventId/reject",
  authenticate,
  approvalAccess,
  rejectEventController,
);

router.patch(
  "/:eventId/publish",
  authenticate,
  approvalAccess,
  publishEventController,
);

router.patch(
  "/:eventId/cancel",
  authenticate,
  approvalAccess,
  cancelEventController,
);

router.patch(
  "/:eventId/complete",
  authenticate,
  approvalAccess,
  completeEventController,
);

export default router;