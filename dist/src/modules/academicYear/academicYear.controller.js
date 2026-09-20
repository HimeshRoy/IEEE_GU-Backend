import { createAcademicYearSchema, updateAcademicYearSchema, } from "./academicYear.dto.js";
import { createAcademicYear, getAcademicYearById, getAcademicYears, updateAcademicYear, } from "./academicYear.service.js";
export async function getAcademicYearsController(_req, res) {
    try {
        const academicYears = await getAcademicYears();
        return res.status(200).json({
            success: true,
            data: academicYears,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Unable to load academic years",
        });
    }
}
export async function getAcademicYearByIdController(req, res) {
    try {
        const academicYear = await getAcademicYearById(req.params.id);
        return res.status(200).json({
            success: true,
            data: academicYear,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to load academic year";
        return res.status(404).json({
            success: false,
            message,
        });
    }
}
export async function createAcademicYearController(req, res) {
    try {
        const data = createAcademicYearSchema.parse(req.body);
        const academicYear = await createAcademicYear(data);
        return res.status(201).json({
            success: true,
            data: academicYear,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to create academic year";
        const status = error instanceof Error &&
            error.name === "ZodError"
            ? 400
            : 409;
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function updateAcademicYearController(req, res) {
    try {
        const data = updateAcademicYearSchema.parse(req.body);
        const academicYear = await updateAcademicYear(req.params.id, data);
        return res.status(200).json({
            success: true,
            data: academicYear,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Unable to update academic year";
        const status = error instanceof Error &&
            error.name === "ZodError"
            ? 400
            : 409;
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
//# sourceMappingURL=academicYear.controller.js.map