import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import { downloadEventRegistrationsExcelController, getEventRegistrationsController, getMyRegistrationsController, promoteNextWaitlistedController, registerForEventController, scanRegistrationQrController, syncEventRegistrationsToExcelController, updateRegistrationStatusController, } from "./registrations.controller.js";
const router = Router();
const registrationManagementAccess = authorizeRolesOrPositions(["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"], ["CHAIRMAN"]);
const qrAttendanceAccess = authorizeRolesOrPositions(["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"], ["CHAIRMAN"]);
router.post("/scan-qr", authenticate, qrAttendanceAccess, scanRegistrationQrController);
router.post("/:eventId", registerForEventController);
router.get("/event/:eventId", authenticate, registrationManagementAccess, getEventRegistrationsController);
router.get("/event/:eventId/export", authenticate, registrationManagementAccess, downloadEventRegistrationsExcelController);
router.post("/event/:eventId/export/sync", authenticate, registrationManagementAccess, syncEventRegistrationsToExcelController);
router.post("/event/:eventId/promote-waitlist", authenticate, registrationManagementAccess, promoteNextWaitlistedController);
router.patch("/:registrationId/status", authenticate, registrationManagementAccess, updateRegistrationStatusController);
router.get("/me", authenticate, getMyRegistrationsController);
export default router;
//# sourceMappingURL=registrations.routes.js.map