import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import {
  createAcademicYearController,
  getAcademicYearByIdController,
  getAcademicYearsController,
  updateAcademicYearController,
} from "./academicYear.controller.js";

const router = Router();

router.get("/", getAcademicYearsController);
router.get("/:id", getAcademicYearByIdController);

router.post(
  "/",
  authenticate,
  createAcademicYearController,
);

router.patch(
  "/:id",
  authenticate,
  updateAcademicYearController,
);

export default router;