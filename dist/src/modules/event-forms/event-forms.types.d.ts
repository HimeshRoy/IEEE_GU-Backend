import type { EventFormFieldScope, EventFormFieldType, EventFormStatus, EventRegistrationTemplate } from "../../generated/prisma/client.js";
export interface CreateEventFormInput {
    title: string;
    description?: string | undefined;
    template?: EventRegistrationTemplate | undefined;
    status?: EventFormStatus | undefined;
}
export interface UpdateEventFormInput {
    title?: string | undefined;
    description?: string | undefined;
    template?: EventRegistrationTemplate | undefined;
    status?: EventFormStatus | undefined;
}
export interface CreateEventFormFieldInput {
    key: string;
    label: string;
    description?: string | undefined;
    type: EventFormFieldType;
    scope?: EventFormFieldScope | undefined;
    required?: boolean | undefined;
    placeholder?: string | undefined;
    options?: unknown;
    validation?: unknown;
    order?: number | undefined;
    isSystemField?: boolean | undefined;
}
export interface UpdateEventFormFieldInput {
    key?: string | undefined;
    label?: string | undefined;
    description?: string | undefined;
    type?: EventFormFieldType | undefined;
    scope?: EventFormFieldScope | undefined;
    required?: boolean | undefined;
    placeholder?: string | undefined;
    options?: unknown;
    validation?: unknown;
    order?: number | undefined;
    isSystemField?: boolean | undefined;
}
export interface ReorderEventFormFieldsInput {
    fieldIds: string[];
}
export interface EventFormFieldDefinition {
    key: string;
    label: string;
    type: EventFormFieldType;
    scope: EventFormFieldScope;
    required: boolean;
    placeholder?: string;
    options?: string[];
    validation?: Record<string, unknown>;
    isSystemField: boolean;
}
export interface EventFormWithFields {
    id: string;
    eventId: string;
    title: string;
    description: string | null;
    template: EventRegistrationTemplate | null;
    status: EventFormStatus;
    fields: Array<{
        id: string;
        key: string;
        label: string;
        description: string | null;
        type: EventFormFieldType;
        scope: EventFormFieldScope;
        required: boolean;
        placeholder: string | null;
        options: unknown;
        validation: unknown;
        order: number;
        isSystemField: boolean;
    }>;
}
//# sourceMappingURL=event-forms.types.d.ts.map