import type { Request, Response } from "express";
import {
  createAcademicYearSchema,
  updateAcademicYearSchema,
} from "./academicYear.dto.js";
import {
  createAcademicYear,
  getAcademicYearById,
  getAcademicYears,
  updateAcademicYear,
} from "./academicYear.service.js";

export async function getAcademicYearsController(
  _req: Request,
  res: Response,
) {
  try {
    const academicYears = await getAcademicYears();

    return res.status(200).json({
      success: true,
      data: academicYears,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unable to load academic years",
    });
  }
}

export async function getAcademicYearByIdController(
  req: Request,
  res: Response,
) {
  try {
    const academicYear = await getAcademicYearById(
      req.params.id as string,
    );

    return res.status(200).json({
      success: true,
      data: academicYear,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to load academic year";

    return res.status(404).json({
      success: false,
      message,
    });
  }
}

export async function createAcademicYearController(
  req: Request,
  res: Response,
) {
  try {
    const data = createAcademicYearSchema.parse(
      req.body,
    );

    const academicYear =
      await createAcademicYear(data);

    return res.status(201).json({
      success: true,
      data: academicYear,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to create academic year";

    const status =
      error instanceof Error &&
      error.name === "ZodError"
        ? 400
        : 409;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}

export async function updateAcademicYearController(
  req: Request,
  res: Response,
) {
  try {
    const data = updateAcademicYearSchema.parse(
      req.body,
    );

    const academicYear =
      await updateAcademicYear(req.params.id as string, data);

    return res.status(200).json({
      success: true,
      data: academicYear,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to update academic year";

    const status =
      error instanceof Error &&
      error.name === "ZodError"
        ? 400
        : 409;

    return res.status(status).json({
      success: false,
      message,
    });
  }
}