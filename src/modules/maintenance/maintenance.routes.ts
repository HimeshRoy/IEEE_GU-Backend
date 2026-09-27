import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";

import {
  getMaintenanceController,
  updateMaintenanceController,
} from "./maintenance.controller.js";

const router = Router();

router.get("/status", getMaintenanceController);

router.get(
  "/",
  authenticate,
  authorizeRolesOrPositions(["WEBMASTER"], []),
  getMaintenanceController,
);

router.patch(
  "/",
  authenticate,
  authorizeRolesOrPositions(["WEBMASTER"], []),
  updateMaintenanceController,
);

export default router;
