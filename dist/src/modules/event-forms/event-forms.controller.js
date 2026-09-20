import { createEventFormFieldSchema, createEventFormSchema, eventFormFieldIdSchema, eventFormIdSchema, reorderEventFormFieldsSchema, updateEventFormFieldSchema, updateEventFormSchema, } from "./event-forms.dto.js";
import { addEventFormField, archiveEventForm, closeEventForm, createEventForm, deleteEventForm, deleteEventFormField, getEventFormByEventId, getPublicEventForm, publishEventForm, reorderEventFormFields, updateEventForm, reopenEventForm, updateEventFormField, } from "./event-forms.service.js";
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
function getErrorStatus(message, options = {}) {
    if (message === "Authentication required") {
        return 401;
    }
    if (options.notFound?.includes(message)) {
        return 404;
    }
    if (options.forbidden && message.includes("not authorized")) {
        return 403;
    }
    if (options.conflict?.some((value) => message.includes(value))) {
        return 409;
    }
    return 400;
}
export async function getEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const eventId = getRouteParam(req, "eventId");
        const result = await getEventFormByEventId(userId, eventId);
        return res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to get event form";
        const status = getErrorStatus(message, {
            notFound: [
                "Event not found",
                "Event form not found",
            ],
            forbidden: true,
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function getPublicEventFormController(req, res) {
    try {
        const eventId = getRouteParam(req, "eventId");
        const result = await getPublicEventForm(eventId);
        return res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to get registration form";
        const status = getErrorStatus(message, {
            notFound: [
                "Event not found",
                "Registration form is not available",
            ],
            conflict: [
                "Registration form is not open",
                "Registration for this event has closed",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function createEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const eventId = getRouteParam(req, "eventId");
        const input = createEventFormSchema.parse(req.body);
        const result = await createEventForm(userId, eventId, input);
        return res.status(201).json({
            success: true,
            message: "Event registration form created successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to create event form";
        const status = getErrorStatus(message, {
            notFound: ["Event not found"],
            forbidden: true,
            conflict: [
                "already exists",
                "required",
                "cannot",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function updateEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const input = updateEventFormSchema.parse(req.body);
        const result = await updateEventForm(userId, formId, input);
        return res.status(200).json({
            success: true,
            message: "Event registration form updated successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to update event form";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: [
                "cannot",
                "required",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function addEventFormFieldController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const input = createEventFormFieldSchema.parse(req.body);
        const result = await addEventFormField(userId, formId, input);
        return res.status(201).json({
            success: true,
            message: "Form field added successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to add form field";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: [
                "already exists",
                "cannot",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function updateEventFormFieldController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const fieldId = getRouteParam(req, "fieldId");
        const input = updateEventFormFieldSchema.parse(req.body);
        const result = await updateEventFormField(userId, fieldId, input);
        return res.status(200).json({
            success: true,
            message: "Form field updated successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to update form field";
        const status = getErrorStatus(message, {
            notFound: ["Form field not found"],
            forbidden: true,
            conflict: [
                "already exists",
                "cannot",
                "responses",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function deleteEventFormFieldController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const params = eventFormFieldIdSchema.parse({
            fieldId: getRouteParam(req, "fieldId"),
        });
        await deleteEventFormField(userId, params.fieldId);
        return res.status(200).json({
            success: true,
            message: "Form field deleted successfully",
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to delete form field";
        const status = getErrorStatus(message, {
            notFound: ["Form field not found"],
            forbidden: true,
            conflict: [
                "cannot",
                "responses",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function reorderEventFormFieldsController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const input = reorderEventFormFieldsSchema.parse(req.body);
        const result = await reorderEventFormFields(userId, formId, input);
        return res.status(200).json({
            success: true,
            message: "Form fields reordered successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to reorder form fields";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function publishEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const result = await publishEventForm(userId, formId);
        return res.status(200).json({
            success: true,
            message: "Event registration form published successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to publish event form";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: [
                "required",
                "cannot",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function closeEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const result = await closeEventForm(userId, formId);
        return res.status(200).json({
            success: true,
            message: "Event registration form closed successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to close event form";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: ["Only published"],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function reopenEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const result = await reopenEventForm(userId, formId);
        return res.status(200).json({
            success: true,
            message: "Event registration form reopened successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to reopen event form";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: [
                "Only closed",
                "cannot be reopened",
                "registration deadline",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function archiveEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        const result = await archiveEventForm(userId, formId);
        return res.status(200).json({
            success: true,
            message: "Event registration form archived successfully",
            data: result,
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to archive event form";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: ["Only closed"],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
export async function deleteEventFormController(req, res) {
    try {
        const userId = getAuthenticatedUserId(req);
        const formId = getRouteParam(req, "formId");
        await deleteEventForm(userId, formId);
        return res.status(200).json({
            success: true,
            message: "Event registration form deleted successfully",
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Failed to delete event form";
        const status = getErrorStatus(message, {
            notFound: ["Event form not found"],
            forbidden: true,
            conflict: [
                "responses",
                "Only draft",
            ],
        });
        return res.status(status).json({
            success: false,
            message,
        });
    }
}
//# sourceMappingURL=event-forms.controller.js.map