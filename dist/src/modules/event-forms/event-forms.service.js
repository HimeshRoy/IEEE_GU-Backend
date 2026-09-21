import { prisma } from "../../config/prisma.js";
async function getUserRole(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            role: true,
        },
    });
    if (!user) {
        throw new Error("Authenticated user not found");
    }
    return user.role;
}
async function hasOperationalAccess(userId) {
    const role = await getUserRole(userId);
    if (role === "WEBMASTER" ||
        role === "IEEE_COUNSELOR" ||
        role === "FACULTY_ADVISOR") {
        return true;
    }
    const chairman = await prisma.branchLeadership.findFirst({
        where: {
            userId,
            position: "CHAIRMAN",
            isCurrent: true,
        },
        select: {
            id: true,
        },
    });
    return Boolean(chairman);
}
async function ensureOperationalAccess(userId) {
    if (!(await hasOperationalAccess(userId))) {
        throw new Error("You are not authorized to manage event forms");
    }
}
async function ensureEventExists(eventId) {
    const event = await prisma.event.findUnique({
        where: {
            id: eventId,
        },
    });
    if (!event) {
        throw new Error("Event not found");
    }
    return event;
}
async function ensureEditableEvent(eventId) {
    const event = await ensureEventExists(eventId);
    if (event.status === "PUBLISHED" ||
        event.status === "COMPLETED" ||
        event.status === "CANCELLED") {
        throw new Error("The event form cannot be changed in the current event state");
    }
    return event;
}
async function ensureFormExists(formId) {
    const form = await prisma.eventForm.findUnique({
        where: {
            id: formId,
        },
        include: {
            event: true,
        },
    });
    if (!form) {
        throw new Error("Event form not found");
    }
    return form;
}
async function ensureEditableForm(formId) {
    const form = await ensureFormExists(formId);
    if (form.status !== "DRAFT") {
        throw new Error("This form cannot be edited in its current state");
    }
    if (form.event.status === "COMPLETED" ||
        form.event.status === "CANCELLED") {
        throw new Error("The event form cannot be changed in the current event state");
    }
    return form;
}
function toJsonValue(value) {
    return value;
}
function isTeamTemplate(template) {
    return (template === "UNIVERSITY_TEAM" ||
        template === "INTER_UNIVERSITY_TEAM" ||
        template === "PUBLIC_TEAM");
}
function isIndividualTemplate(template) {
    return (template === "UNIVERSITY_INDIVIDUAL" ||
        template === "INTER_UNIVERSITY_INDIVIDUAL" ||
        template === "PUBLIC_INDIVIDUAL");
}
function getTemplateFields(template) {
    const fields = [
        {
            key: "name",
            label: "Full Name",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your full name",
            isSystemField: true,
            order: 0,
        },
        {
            key: "email",
            label: "Email Address",
            type: "EMAIL",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your email address",
            isSystemField: true,
            order: 1,
        },
        {
            key: "mobile",
            label: "Mobile Number",
            type: "PHONE",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your mobile number",
            isSystemField: true,
            order: 2,
        },
    ];
    if (template === "UNIVERSITY_INDIVIDUAL" || template === "UNIVERSITY_TEAM") {
        fields.push({
            key: "semester",
            label: "Semester",
            type: "NUMBER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your semester",
            validation: {
                min: 1,
                max: 12,
            },
            isSystemField: true,
            order: fields.length,
        }, {
            key: "academic_year",
            label: "Academic Year",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "e.g. 2026-27",
            isSystemField: true,
            order: fields.length + 1,
        }, {
            key: "department",
            label: "Department",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your department",
            isSystemField: true,
            order: fields.length + 2,
        }, {
            key: "roll_number",
            label: "Roll Number",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your roll number",
            isSystemField: true,
            order: fields.length + 3,
        });
    }
    if (template === "INTER_UNIVERSITY_INDIVIDUAL" ||
        template === "INTER_UNIVERSITY_TEAM") {
        fields.push({
            key: "institution",
            label: "University / College / Institution",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: true,
            placeholder: "Enter your institution name",
            isSystemField: true,
            order: fields.length,
        });
    }
    if (template === "UNIVERSITY_INDIVIDUAL" ||
        template === "UNIVERSITY_TEAM" ||
        template === "INTER_UNIVERSITY_INDIVIDUAL" ||
        template === "INTER_UNIVERSITY_TEAM") {
        fields.push({
            key: "ieee_membership_number",
            label: "IEEE Membership Number",
            type: "SHORT_ANSWER",
            scope: "PARTICIPANT",
            required: false,
            placeholder: "Enter IEEE membership number if applicable",
            isSystemField: true,
            order: fields.length,
        });
    }
    if (isTeamTemplate(template)) {
        fields.push({
            key: "team_name",
            label: "Team Name",
            type: "SHORT_ANSWER",
            scope: "TEAM",
            required: true,
            placeholder: "Enter your team name",
            isSystemField: true,
            order: fields.length,
        });
    }
    return fields.map((field, index) => ({
        ...field,
        order: index,
    }));
}
function validateTemplateConfiguration(template, participationType, minTeamSize, maxTeamSize) {
    if (isTeamTemplate(template) && participationType !== "TEAM") {
        throw new Error("Team registration templates require team participation");
    }
    if (isIndividualTemplate(template) && participationType !== "INDIVIDUAL") {
        throw new Error("Individual registration templates require individual participation");
    }
    if (isTeamTemplate(template)) {
        if (minTeamSize === null || minTeamSize === undefined) {
            throw new Error("Minimum team size is required for team templates");
        }
        if (maxTeamSize === null || maxTeamSize === undefined) {
            throw new Error("Maximum team size is required for team templates");
        }
        if (minTeamSize < 1) {
            throw new Error("Minimum team size must be at least 1");
        }
        if (maxTeamSize < 1) {
            throw new Error("Maximum team size must be at least 1");
        }
        if (minTeamSize > maxTeamSize) {
            throw new Error("Minimum team size cannot exceed maximum team size");
        }
    }
}
export async function getEventFormByEventId(userId, eventId) {
    await ensureOperationalAccess(userId);
    await ensureEventExists(eventId);
    const form = await prisma.eventForm.findUnique({
        where: {
            eventId,
        },
        include: {
            fields: {
                orderBy: {
                    order: "asc",
                },
            },
        },
    });
    if (!form) {
        throw new Error("Event form not found");
    }
    return form;
}
export async function getPublicEventForm(eventId) {
    const event = await prisma.event.findFirst({
        where: {
            id: eventId,
            status: "PUBLISHED",
        },
        select: {
            id: true,
            title: true,
            slug: true,
            access: true,
            participationType: true,
            minTeamSize: true,
            maxTeamSize: true,
            registrationTemplate: true,
            registrationDeadline: true,
            capacity: true,
            registrationForm: {
                include: {
                    fields: {
                        orderBy: {
                            order: "asc",
                        },
                    },
                },
            },
        },
    });
    if (!event) {
        throw new Error("Event not found");
    }
    if (!event.registrationForm) {
        throw new Error("Registration form is not available");
    }
    if (event.registrationForm.status !== "PUBLISHED") {
        throw new Error("Registration form is not open");
    }
    if (event.registrationDeadline &&
        event.registrationDeadline.getTime() <= Date.now()) {
        throw new Error("Registration for this event has closed");
    }
    return event;
}
export async function createEventForm(userId, eventId, input) {
    await ensureOperationalAccess(userId);
    const event = await ensureEditableEvent(eventId);
    const existingForm = await prisma.eventForm.findUnique({
        where: {
            eventId,
        },
        select: {
            id: true,
        },
    });
    if (existingForm) {
        throw new Error("An event form already exists for this event");
    }
    const template = input.template ?? event.registrationTemplate ?? null;
    validateTemplateConfiguration(template, event.participationType, event.minTeamSize, event.maxTeamSize);
    const form = await prisma.$transaction(async (tx) => {
        const createdForm = await tx.eventForm.create({
            data: {
                eventId,
                title: input.title,
                description: input.description ?? null,
                template,
                status: input.status ?? "DRAFT",
            },
        });
        const defaultFields = getTemplateFields(template);
        if (defaultFields.length > 0) {
            await tx.eventFormField.createMany({
                data: defaultFields.map((field) => ({
                    formId: createdForm.id,
                    key: field.key,
                    label: field.label,
                    description: field.description ?? null,
                    type: field.type,
                    scope: field.scope ?? "PARTICIPANT",
                    required: field.required ?? false,
                    placeholder: field.placeholder ?? null,
                    ...(field.options !== undefined && {
                        options: toJsonValue(field.options),
                    }),
                    ...(field.validation !== undefined && {
                        validation: toJsonValue(field.validation),
                    }),
                    order: field.order ?? 0,
                    isSystemField: field.isSystemField ?? false,
                })),
            });
        }
        return tx.eventForm.findUniqueOrThrow({
            where: {
                id: createdForm.id,
            },
            include: {
                fields: {
                    orderBy: {
                        order: "asc",
                    },
                },
            },
        });
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "CREATE",
            entityType: "EVENT",
            entityId: event.id,
            description: `Created registration form for event "${event.title}"`,
        },
    });
    return form;
}
export async function updateEventForm(userId, formId, input) {
    await ensureOperationalAccess(userId);
    const form = await ensureEditableForm(formId);
    if (input.template !== undefined) {
        validateTemplateConfiguration(input.template, form.event.participationType, form.event.minTeamSize, form.event.maxTeamSize);
    }
    const updatedForm = await prisma.eventForm.update({
        where: {
            id: formId,
        },
        data: {
            ...(input.title !== undefined && {
                title: input.title,
            }),
            ...(input.description !== undefined && {
                description: input.description,
            }),
            ...(input.template !== undefined && {
                template: input.template,
            }),
            ...(input.status !== undefined && {
                status: input.status,
            }),
        },
        include: {
            fields: {
                orderBy: {
                    order: "asc",
                },
            },
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "UPDATE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Updated registration form for event "${form.event.title}"`,
        },
    });
    return updatedForm;
}
export async function addEventFormField(userId, formId, input) {
    await ensureOperationalAccess(userId);
    const form = await ensureEditableForm(formId);
    const existingField = await prisma.eventFormField.findUnique({
        where: {
            formId_key: {
                formId,
                key: input.key,
            },
        },
        select: {
            id: true,
        },
    });
    if (existingField) {
        throw new Error("A field with this key already exists");
    }
    const highestOrder = await prisma.eventFormField.findFirst({
        where: {
            formId,
        },
        orderBy: {
            order: "desc",
        },
        select: {
            order: true,
        },
    });
    const order = input.order ?? (highestOrder?.order ?? -1) + 1;
    const field = await prisma.eventFormField.create({
        data: {
            formId,
            key: input.key,
            label: input.label,
            description: input.description ?? null,
            type: input.type,
            scope: input.scope ?? "PARTICIPANT",
            required: input.required ?? false,
            placeholder: input.placeholder ?? null,
            ...(input.options !== undefined && {
                options: toJsonValue(input.options),
            }),
            ...(input.validation !== undefined && {
                validation: toJsonValue(input.validation),
            }),
            order,
            isSystemField: input.isSystemField ?? false,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "CREATE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Added form field "${field.label}" to event "${form.event.title}"`,
        },
    });
    return field;
}
export async function updateEventFormField(userId, fieldId, input) {
    await ensureOperationalAccess(userId);
    const field = await prisma.eventFormField.findUnique({
        where: {
            id: fieldId,
        },
        include: {
            form: {
                include: {
                    event: true,
                },
            },
        },
    });
    if (!field) {
        throw new Error("Form field not found");
    }
    await ensureEditableForm(field.formId);
    if (input.key !== undefined && input.key !== field.key) {
        const existingField = await prisma.eventFormField.findUnique({
            where: {
                formId_key: {
                    formId: field.formId,
                    key: input.key,
                },
            },
            select: {
                id: true,
            },
        });
        if (existingField && existingField.id !== fieldId) {
            throw new Error("A field with this key already exists");
        }
    }
    if (field.isSystemField) {
        if (input.isSystemField === false) {
            throw new Error("System fields cannot be converted into custom fields");
        }
        if (input.key !== undefined ||
            input.type !== undefined ||
            input.scope !== undefined) {
            throw new Error("System field identity cannot be changed");
        }
    }
    const data = {
        ...(input.key !== undefined && {
            key: input.key,
        }),
        ...(input.label !== undefined && {
            label: input.label,
        }),
        ...(input.description !== undefined && {
            description: input.description,
        }),
        ...(input.type !== undefined && {
            type: input.type,
        }),
        ...(input.scope !== undefined && {
            scope: input.scope,
        }),
        ...(input.required !== undefined && {
            required: input.required,
        }),
        ...(input.placeholder !== undefined && {
            placeholder: input.placeholder,
        }),
        ...(input.options !== undefined && {
            options: toJsonValue(input.options),
        }),
        ...(input.validation !== undefined && {
            validation: toJsonValue(input.validation),
        }),
        ...(input.order !== undefined && {
            order: input.order,
        }),
        ...(input.isSystemField !== undefined && {
            isSystemField: input.isSystemField,
        }),
    };
    const updatedField = await prisma.eventFormField.update({
        where: {
            id: fieldId,
        },
        data,
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "UPDATE",
            entityType: "EVENT",
            entityId: field.form.eventId,
            description: `Updated form field "${updatedField.label}" for event "${field.form.event.title}"`,
        },
    });
    return updatedField;
}
export async function deleteEventFormField(userId, fieldId) {
    await ensureOperationalAccess(userId);
    const field = await prisma.eventFormField.findUnique({
        where: {
            id: fieldId,
        },
        include: {
            form: {
                include: {
                    event: true,
                },
            },
            _count: {
                select: {
                    answers: true,
                },
            },
        },
    });
    if (!field) {
        throw new Error("Form field not found");
    }
    await ensureEditableForm(field.formId);
    if (field.isSystemField) {
        throw new Error("System fields cannot be deleted");
    }
    if (field._count.answers > 0) {
        throw new Error("A field with submitted responses cannot be deleted");
    }
    await prisma.eventFormField.delete({
        where: {
            id: fieldId,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "DELETE",
            entityType: "EVENT",
            entityId: field.form.eventId,
            description: `Deleted form field "${field.label}" from event "${field.form.event.title}"`,
        },
    });
}
export async function reorderEventFormFields(userId, formId, input) {
    await ensureOperationalAccess(userId);
    const form = await ensureEditableForm(formId);
    const fields = await prisma.eventFormField.findMany({
        where: {
            formId,
        },
        select: {
            id: true,
        },
    });
    if (fields.length !== input.fieldIds.length) {
        throw new Error("All form fields must be included when reordering");
    }
    const existingIds = new Set(fields.map((field) => field.id));
    if (input.fieldIds.some((fieldId) => !existingIds.has(fieldId)) ||
        new Set(input.fieldIds).size !== fields.length) {
        throw new Error("Invalid form field ordering");
    }
    await prisma.$transaction(input.fieldIds.map((fieldId, index) => prisma.eventFormField.update({
        where: {
            id: fieldId,
        },
        data: {
            order: index,
        },
    })));
    await prisma.auditLog.create({
        data: {
            userId,
            action: "UPDATE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Reordered registration form fields for event "${form.event.title}"`,
        },
    });
    return prisma.eventFormField.findMany({
        where: {
            formId,
        },
        orderBy: {
            order: "asc",
        },
    });
}
export async function publishEventForm(userId, formId) {
    await ensureOperationalAccess(userId);
    const form = await ensureEditableForm(formId);
    const fields = await prisma.eventFormField.findMany({
        where: {
            formId,
        },
        orderBy: {
            order: "asc",
        },
    });
    if (fields.length === 0) {
        throw new Error("A registration form must contain at least one field");
    }
    const hasRequiredName = fields.some((field) => field.key === "name" && field.type === "SHORT_ANSWER" && field.required);
    const hasRequiredEmail = fields.some((field) => field.key === "email" && field.type === "EMAIL" && field.required);
    if (!hasRequiredName) {
        throw new Error("A required participant name field is required");
    }
    if (!hasRequiredEmail) {
        throw new Error("A required participant email field is required");
    }
    if (form.event.participationType === "TEAM" &&
        !fields.some((field) => field.scope === "TEAM" && field.key === "team_name" && field.required)) {
        throw new Error("A required team name field is required for team events");
    }
    const updatedForm = await prisma.eventForm.update({
        where: {
            id: formId,
        },
        data: {
            status: "PUBLISHED",
        },
        include: {
            fields: {
                orderBy: {
                    order: "asc",
                },
            },
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "PUBLISH",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Published registration form for event "${form.event.title}"`,
        },
    });
    return updatedForm;
}
export async function closeEventForm(userId, formId) {
    await ensureOperationalAccess(userId);
    const form = await ensureFormExists(formId);
    if (form.status !== "PUBLISHED") {
        throw new Error("Only published forms can be closed");
    }
    const updatedForm = await prisma.eventForm.update({
        where: {
            id: formId,
        },
        data: {
            status: "CLOSED",
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "UPDATE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Closed registration form for event "${form.event.title}"`,
        },
    });
    return updatedForm;
}
export async function reopenEventForm(userId, formId) {
    await ensureOperationalAccess(userId);
    const form = await ensureFormExists(formId);
    if (form.status !== "CLOSED") {
        throw new Error("Only closed forms can be reopened");
    }
    if (form.event.status === "COMPLETED" || form.event.status === "CANCELLED") {
        throw new Error("The event form cannot be reopened in the current event state");
    }
    if (form.event.registrationDeadline &&
        form.event.registrationDeadline.getTime() <= Date.now()) {
        throw new Error("The registration deadline for this event has passed");
    }
    const updatedForm = await prisma.eventForm.update({
        where: {
            id: formId,
        },
        data: {
            status: "DRAFT",
        },
        include: {
            fields: {
                orderBy: {
                    order: "asc",
                },
            },
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "UPDATE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Reopened registration form for event "${form.event.title}"`,
        },
    });
    return updatedForm;
}
export async function archiveEventForm(userId, formId) {
    await ensureOperationalAccess(userId);
    const form = await ensureFormExists(formId);
    if (form.status !== "CLOSED") {
        throw new Error("Only closed forms can be archived");
    }
    const updatedForm = await prisma.eventForm.update({
        where: {
            id: formId,
        },
        data: {
            status: "ARCHIVED",
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "UPDATE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Archived registration form for event "${form.event.title}"`,
        },
    });
    return updatedForm;
}
export async function deleteEventForm(userId, formId) {
    await ensureOperationalAccess(userId);
    const form = await ensureFormExists(formId);
    const responseCount = await prisma.eventFormResponse.count({
        where: {
            formId,
        },
    });
    if (responseCount > 0) {
        throw new Error("A form with submitted responses cannot be deleted");
    }
    if (form.status === "PUBLISHED" ||
        form.status === "CLOSED" ||
        form.status === "ARCHIVED") {
        throw new Error("Only draft forms can be deleted");
    }
    await prisma.eventForm.delete({
        where: {
            id: formId,
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "DELETE",
            entityType: "EVENT",
            entityId: form.eventId,
            description: `Deleted registration form for event "${form.event.title}"`,
        },
    });
}
//# sourceMappingURL=event-forms.service.js.map