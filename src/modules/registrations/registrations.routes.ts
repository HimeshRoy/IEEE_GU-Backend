import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import {
  getEventRegistrationsController,
  promoteNextWaitlistedController,
  registerForEventController,
  updateRegistrationStatusController,
  syncEventRegistrationsToExcelController,
  downloadEventRegistrationsExcelController,
  getMyRegistrationsController,
} from "./registrations.controller.js";

const router = Router();

const registrationManagementAccess = authorizeRolesOrPositions(
  ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
  ["CHAIRMAN"],
);

router.post("/:eventId", registerForEventController);

router.post("/:eventId/member", authenticate, registerForEventController);

router.get("/my", authenticate, getMyRegistrationsController);

router.get(
  "/event/:eventId",
  authenticate,
  registrationManagementAccess,
  getEventRegistrationsController,
);

router.post(
  "/event/:eventId/export-excel",
  authenticate,
  registrationManagementAccess,
  syncEventRegistrationsToExcelController,
);

router.get(
  "/event/:eventId/export-excel/download",
  authenticate,
  registrationManagementAccess,
  downloadEventRegistrationsExcelController,
);

router.patch(
  "/:registrationId/status",
  authenticate,
  registrationManagementAccess,
  updateRegistrationStatusController,
);

router.post(
  "/event/:eventId/promote-waitlist",
  authenticate,
  registrationManagementAccess,
  promoteNextWaitlistedController,
);

export default router;
