import { z } from "zod";
export declare const createEventFormSchema: z.ZodObject<{
    eventId: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodEnum<{
        UNIVERSITY_INDIVIDUAL: "UNIVERSITY_INDIVIDUAL";
        UNIVERSITY_TEAM: "UNIVERSITY_TEAM";
        INTER_UNIVERSITY_INDIVIDUAL: "INTER_UNIVERSITY_INDIVIDUAL";
        INTER_UNIVERSITY_TEAM: "INTER_UNIVERSITY_TEAM";
        PUBLIC_INDIVIDUAL: "PUBLIC_INDIVIDUAL";
        PUBLIC_TEAM: "PUBLIC_TEAM";
        CUSTOM: "CUSTOM";
    }>>;
    status: z.ZodDefault<z.ZodEnum<{
        DRAFT: "DRAFT";
        PUBLISHED: "PUBLISHED";
        CLOSED: "CLOSED";
        ARCHIVED: "ARCHIVED";
    }>>;
}, z.core.$strip>;
export declare const updateEventFormSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    template: z.ZodOptional<z.ZodEnum<{
        UNIVERSITY_INDIVIDUAL: "UNIVERSITY_INDIVIDUAL";
        UNIVERSITY_TEAM: "UNIVERSITY_TEAM";
        INTER_UNIVERSITY_INDIVIDUAL: "INTER_UNIVERSITY_INDIVIDUAL";
        INTER_UNIVERSITY_TEAM: "INTER_UNIVERSITY_TEAM";
        PUBLIC_INDIVIDUAL: "PUBLIC_INDIVIDUAL";
        PUBLIC_TEAM: "PUBLIC_TEAM";
        CUSTOM: "CUSTOM";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        DRAFT: "DRAFT";
        PUBLISHED: "PUBLISHED";
        CLOSED: "CLOSED";
        ARCHIVED: "ARCHIVED";
    }>>;
}, z.core.$strip>;
export declare const createEventFormFieldSchema: z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        SHORT_ANSWER: "SHORT_ANSWER";
        EMAIL: "EMAIL";
        PHONE: "PHONE";
        PARAGRAPH: "PARAGRAPH";
        NUMBER: "NUMBER";
        MULTIPLE_CHOICE: "MULTIPLE_CHOICE";
        CHECKBOXES: "CHECKBOXES";
        DROPDOWN: "DROPDOWN";
        DATE: "DATE";
        TIME: "TIME";
        FILE_UPLOAD: "FILE_UPLOAD";
        IMAGE_UPLOAD: "IMAGE_UPLOAD";
    }>;
    scope: z.ZodDefault<z.ZodEnum<{
        TEAM: "TEAM";
        PARTICIPANT: "PARTICIPANT";
    }>>;
    required: z.ZodDefault<z.ZodBoolean>;
    placeholder: z.ZodOptional<z.ZodString>;
    options: z.ZodOptional<z.ZodArray<z.ZodString>>;
    validation: z.ZodOptional<z.ZodObject<{
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        pattern: z.ZodOptional<z.ZodString>;
        accept: z.ZodOptional<z.ZodArray<z.ZodString>>;
        maxFileSize: z.ZodOptional<z.ZodNumber>;
        minSelections: z.ZodOptional<z.ZodNumber>;
        maxSelections: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    order: z.ZodOptional<z.ZodNumber>;
    isSystemField: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateEventFormFieldSchema: z.ZodObject<{
    key: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    type: z.ZodOptional<z.ZodEnum<{
        SHORT_ANSWER: "SHORT_ANSWER";
        EMAIL: "EMAIL";
        PHONE: "PHONE";
        PARAGRAPH: "PARAGRAPH";
        NUMBER: "NUMBER";
        MULTIPLE_CHOICE: "MULTIPLE_CHOICE";
        CHECKBOXES: "CHECKBOXES";
        DROPDOWN: "DROPDOWN";
        DATE: "DATE";
        TIME: "TIME";
        FILE_UPLOAD: "FILE_UPLOAD";
        IMAGE_UPLOAD: "IMAGE_UPLOAD";
    }>>;
    scope: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        TEAM: "TEAM";
        PARTICIPANT: "PARTICIPANT";
    }>>>;
    required: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    placeholder: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    options: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    validation: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        minLength: z.ZodOptional<z.ZodNumber>;
        maxLength: z.ZodOptional<z.ZodNumber>;
        min: z.ZodOptional<z.ZodNumber>;
        max: z.ZodOptional<z.ZodNumber>;
        pattern: z.ZodOptional<z.ZodString>;
        accept: z.ZodOptional<z.ZodArray<z.ZodString>>;
        maxFileSize: z.ZodOptional<z.ZodNumber>;
        minSelections: z.ZodOptional<z.ZodNumber>;
        maxSelections: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    order: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    isSystemField: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const reorderEventFormFieldsSchema: z.ZodObject<{
    fieldIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const eventFormIdSchema: z.ZodObject<{
    formId: z.ZodString;
}, z.core.$strip>;
export declare const eventFormFieldIdSchema: z.ZodObject<{
    fieldId: z.ZodString;
}, z.core.$strip>;
export type CreateEventFormDto = z.infer<typeof createEventFormSchema>;
export type UpdateEventFormDto = z.infer<typeof updateEventFormSchema>;
export type CreateEventFormFieldDto = z.infer<typeof createEventFormFieldSchema>;
export type UpdateEventFormFieldDto = z.infer<typeof updateEventFormFieldSchema>;
export type ReorderEventFormFieldsDto = z.infer<typeof reorderEventFormFieldsSchema>;
//# sourceMappingURL=event-forms.dto.d.ts.map