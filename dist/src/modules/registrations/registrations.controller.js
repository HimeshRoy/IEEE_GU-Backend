import { publicRegistrationSchema, registrationListQuerySchema, scanRegistrationQrSchema, updateRegistrationStatusSchema, } from "./registrations.dto.js";
import { getEventRegistrations, getMyRegistrations, promoteNextWaitlisted, registerForEvent, scanRegistrationQr, updateRegistrationStatus, } from "./registrations.service.js";
import { syncEventRegistrationsToExcel } from "./registrations.excel.js";
function getAuthenticatedUserId(req) {
    const userId = req.user?.id;
    if (!userId) {
        throw new Error("Authentication required");
    }
    return userId;
}
function getRouteParam(req, name) {
    const value = req.params[name];
    if (typeof value !== "string" || value.length === 0) {
        throw new Error(`Invalid ${name}`);
    }
    return value;
}
function getErrorStatus(message) {
    if (message === "Authentication required" ||
        message === "You must be logged in to register for this event") {
        return 401;
    }
    if (message === "Event not found" ||
        message === "Registration not found" ||
        message === "Registration form is not available") {
        return 404;
    }
    if (message.includes("not authorized") ||
        message.includes("active IEEE GU membership") ||
        message.includes("User account not found")) {
        return 403;
    }
    if (message.includes("already registered") ||
        message.includes("already reached") ||
        message.includes("capacity") ||
        message.includes("closed") ||
        message.includes("waitlist") ||
        message.includes("Waitlist") ||
        message.includes("Invalid registration status") ||
        message.includes("cannot") ||
        message.includes("required") ||
        message.includes("not allowed") ||
        message.includes("does not belong") ||
        message.includes("already been recorded") ||
        message.includes("Attendance must be recorded") ||
        message.includes("not eligible") ||
        message.includes("QR attendance") ||
        message.includes("Invalid QR")) {
        return 409;
    }
    return 400;
}
function getDownloadFileName(eventTitle) {
    const safeTitle = eventTitle
        .replace(/[\\/:*?"<>|]/g, "")
        .replace(/\s+/g, " ")
        .trim();
    return `${safeTitle || "Event"}-Registrations.xlsx`;
}
export async function registerForEventController(req, res) {
    try {
        const eventId = getRouteParam(req, "eventId");
        const input = publicRegistrationSchema.parse(req.body);
        const registration = await registerForEvent(eventId, input, req.user?.id);
        try {
            await syncEventRegistrationsToExcel(eventId);
        }
        catch (excelError) {
            console.error("Excel synchronization failed after registration:", excelError);
        }
        return res.status(201).json({
            success: true,
            message: registration.registrationStatus === "WAITLISTED"
                ? "Event is full. You have been added to the waitlist."
                : "Event registration successful",
            data: registration,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to register for event";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function getEventRegistrationsController(req, res) {
    try {
        const eventId = getRouteParam(req, "eventId");
        const filters = registrationListQuerySchema.parse(req.query);
        const result = await getEventRegistrations(eventId, filters);
        return res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to fetch registrations";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function updateRegistrationStatusController(req, res) {
    try {
        const actorId = getAuthenticatedUserId(req);
        const registrationId = getRouteParam(req, "registrationId");
        const input = updateRegistrationStatusSchema.parse(req.body);
        const registration = await updateRegistrationStatus(registrationId, input.status, actorId);
        try {
            await syncEventRegistrationsToExcel(registration.eventId);
        }
        catch (excelError) {
            console.error("Excel synchronization failed after registration status update:", excelError);
        }
        return res.status(200).json({
            success: true,
            message: "Registration status updated successfully",
            data: registration,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to update registration status";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function promoteNextWaitlistedController(req, res) {
    try {
        const actorId = getAuthenticatedUserId(req);
        const eventId = getRouteParam(req, "eventId");
        const registration = await promoteNextWaitlisted(eventId, actorId);
        try {
            await syncEventRegistrationsToExcel(eventId);
        }
        catch (excelError) {
            console.error("Excel synchronization failed after waitlist promotion:", excelError);
        }
        return res.status(200).json({
            success: true,
            message: "Next waitlisted participant promoted successfully",
            data: registration,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to promote waitlisted participant";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function scanRegistrationQrController(req, res) {
    try {
        const actorId = getAuthenticatedUserId(req);
        const input = scanRegistrationQrSchema.parse(req.body);
        const result = await scanRegistrationQr(input.qrToken, input.eventId, actorId);
        try {
            await syncEventRegistrationsToExcel(input.eventId);
        }
        catch (excelError) {
            console.error("Excel synchronization failed after QR attendance:", excelError);
        }
        return res.status(200).json({
            success: true,
            message: "Participant attendance recorded successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "QR attendance scan failed";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function syncEventRegistrationsToExcelController(req, res) {
    try {
        const eventId = getRouteParam(req, "eventId");
        const result = await syncEventRegistrationsToExcel(eventId);
        return res.status(200).json({
            success: true,
            message: "Event registrations synchronized successfully",
            data: {
                eventId: result.eventId,
                eventTitle: result.eventTitle,
                registrationCount: result.registrationCount,
            },
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to synchronize registrations";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function downloadEventRegistrationsExcelController(req, res) {
    try {
        const eventId = getRouteParam(req, "eventId");
        const result = await syncEventRegistrationsToExcel(eventId);
        const fileName = getDownloadFileName(result.eventTitle);
        return res.download(result.filePath, fileName, (error) => {
            if (error) {
                console.error("Excel download failed:", error);
                if (!res.headersSent) {
                    res.status(500).json({
                        success: false,
                        message: "Failed to download Excel file",
                    });
                }
            }
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to download registrations Excel file";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
export async function getMyRegistrationsController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const registrations = await getMyRegistrations(userId);
        return res.status(200).json({
            success: true,
            data: registrations,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to fetch your registrations";
        return res.status(getErrorStatus(message)).json({
            success: false,
            message,
        });
    }
}
//# sourceMappingURL=registrations.controller.js.map