import type { EventFormFieldScope, EventFormFieldType, EventFormStatus, EventRegistrationTemplate } from "../../generated/prisma/client.js";
import type { CreateEventFormFieldInput, CreateEventFormInput, ReorderEventFormFieldsInput, UpdateEventFormFieldInput, UpdateEventFormInput } from "./event-forms.types.js";
export declare function getEventFormByEventId(userId: string, eventId: string): Promise<{
    fields: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: EventFormFieldType;
        description: string | null;
        required: boolean;
        options: import("@prisma/client/runtime/client").JsonValue | null;
        key: string;
        label: string;
        scope: EventFormFieldScope;
        placeholder: string | null;
        validation: import("@prisma/client/runtime/client").JsonValue | null;
        order: number;
        isSystemField: boolean;
        formId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function getPublicEventForm(eventId: string): Promise<{
    id: string;
    title: string;
    slug: string;
    registrationDeadline: Date | null;
    capacity: number | null;
    access: import("../../generated/prisma/enums.js").EventAccess;
    registrationTemplate: EventRegistrationTemplate | null;
    participationType: import("../../generated/prisma/enums.js").EventParticipationType;
    minTeamSize: number | null;
    maxTeamSize: number | null;
    registrationForm: ({
        fields: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            type: EventFormFieldType;
            description: string | null;
            required: boolean;
            options: import("@prisma/client/runtime/client").JsonValue | null;
            key: string;
            label: string;
            scope: EventFormFieldScope;
            placeholder: string | null;
            validation: import("@prisma/client/runtime/client").JsonValue | null;
            order: number;
            isSystemField: boolean;
            formId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        status: EventFormStatus;
        eventId: string;
        template: EventRegistrationTemplate | null;
    }) | null;
}>;
export declare function createEventForm(userId: string, eventId: string, input: CreateEventFormInput): Promise<{
    fields: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: EventFormFieldType;
        description: string | null;
        required: boolean;
        options: import("@prisma/client/runtime/client").JsonValue | null;
        key: string;
        label: string;
        scope: EventFormFieldScope;
        placeholder: string | null;
        validation: import("@prisma/client/runtime/client").JsonValue | null;
        order: number;
        isSystemField: boolean;
        formId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function updateEventForm(userId: string, formId: string, input: UpdateEventFormInput): Promise<{
    fields: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: EventFormFieldType;
        description: string | null;
        required: boolean;
        options: import("@prisma/client/runtime/client").JsonValue | null;
        key: string;
        label: string;
        scope: EventFormFieldScope;
        placeholder: string | null;
        validation: import("@prisma/client/runtime/client").JsonValue | null;
        order: number;
        isSystemField: boolean;
        formId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function addEventFormField(userId: string, formId: string, input: CreateEventFormFieldInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: EventFormFieldType;
    description: string | null;
    required: boolean;
    options: import("@prisma/client/runtime/client").JsonValue | null;
    key: string;
    label: string;
    scope: EventFormFieldScope;
    placeholder: string | null;
    validation: import("@prisma/client/runtime/client").JsonValue | null;
    order: number;
    isSystemField: boolean;
    formId: string;
}>;
export declare function updateEventFormField(userId: string, fieldId: string, input: UpdateEventFormFieldInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: EventFormFieldType;
    description: string | null;
    required: boolean;
    options: import("@prisma/client/runtime/client").JsonValue | null;
    key: string;
    label: string;
    scope: EventFormFieldScope;
    placeholder: string | null;
    validation: import("@prisma/client/runtime/client").JsonValue | null;
    order: number;
    isSystemField: boolean;
    formId: string;
}>;
export declare function deleteEventFormField(userId: string, fieldId: string): Promise<void>;
export declare function reorderEventFormFields(userId: string, formId: string, input: ReorderEventFormFieldsInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: EventFormFieldType;
    description: string | null;
    required: boolean;
    options: import("@prisma/client/runtime/client").JsonValue | null;
    key: string;
    label: string;
    scope: EventFormFieldScope;
    placeholder: string | null;
    validation: import("@prisma/client/runtime/client").JsonValue | null;
    order: number;
    isSystemField: boolean;
    formId: string;
}[]>;
export declare function publishEventForm(userId: string, formId: string): Promise<{
    fields: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: EventFormFieldType;
        description: string | null;
        required: boolean;
        options: import("@prisma/client/runtime/client").JsonValue | null;
        key: string;
        label: string;
        scope: EventFormFieldScope;
        placeholder: string | null;
        validation: import("@prisma/client/runtime/client").JsonValue | null;
        order: number;
        isSystemField: boolean;
        formId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function closeEventForm(userId: string, formId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function reopenEventForm(userId: string, formId: string): Promise<{
    fields: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: EventFormFieldType;
        description: string | null;
        required: boolean;
        options: import("@prisma/client/runtime/client").JsonValue | null;
        key: string;
        label: string;
        scope: EventFormFieldScope;
        placeholder: string | null;
        validation: import("@prisma/client/runtime/client").JsonValue | null;
        order: number;
        isSystemField: boolean;
        formId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function archiveEventForm(userId: string, formId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    status: EventFormStatus;
    eventId: string;
    template: EventRegistrationTemplate | null;
}>;
export declare function deleteEventForm(userId: string, formId: string): Promise<void>;
//# sourceMappingURL=event-forms.service.d.ts.map