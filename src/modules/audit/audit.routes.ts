import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import { getAuditLogsController } from "./audit.controller.js";

const router = Router();

router.get(
  "/",
  authenticate,
  authorizeRolesOrPositions(["WEBMASTER"], []),
  getAuditLogsController,
);

export default router;