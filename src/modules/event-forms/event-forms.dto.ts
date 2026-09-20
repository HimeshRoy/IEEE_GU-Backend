import { z } from "zod";

const eventRegistrationTemplateSchema = z.enum([
  "UNIVERSITY_INDIVIDUAL",
  "UNIVERSITY_TEAM",
  "INTER_UNIVERSITY_INDIVIDUAL",
  "INTER_UNIVERSITY_TEAM",
  "PUBLIC_INDIVIDUAL",
  "PUBLIC_TEAM",
  "CUSTOM",
]);

const eventFormStatusSchema = z.enum([
  "DRAFT",
  "PUBLISHED",
  "CLOSED",
  "ARCHIVED",
]);

const eventFormFieldTypeSchema = z.enum([
  "SHORT_ANSWER",
  "PARAGRAPH",
  "EMAIL",
  "PHONE",
  "NUMBER",
  "MULTIPLE_CHOICE",
  "CHECKBOXES",
  "DROPDOWN",
  "DATE",
  "TIME",
  "FILE_UPLOAD",
  "IMAGE_UPLOAD",
]);

const eventFormFieldScopeSchema = z.enum([
  "PARTICIPANT",
  "TEAM",
]);

const optionsSchema = z
  .array(z.string().trim().min(1).max(200))
  .min(1)
  .max(100);

const validationSchema = z
  .object({
    minLength: z.number().int().min(0).optional(),
    maxLength: z.number().int().min(0).optional(),
    min: z.number().optional(),
    max: z.number().optional(),
    pattern: z.string().max(500).optional(),
    accept: z.array(z.string().trim().min(1).max(100)).max(50).optional(),
    maxFileSize: z.number().int().positive().max(100).optional(),
    minSelections: z.number().int().min(0).optional(),
    maxSelections: z.number().int().positive().optional(),
  })
  .superRefine((value, ctx) => {
    if (
      value.minLength !== undefined &&
      value.maxLength !== undefined &&
      value.minLength > value.maxLength
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["minLength"],
        message: "Minimum length cannot exceed maximum length",
      });
    }

    if (
      value.min !== undefined &&
      value.max !== undefined &&
      value.min > value.max
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["min"],
        message: "Minimum value cannot exceed maximum value",
      });
    }

    if (
      value.minSelections !== undefined &&
      value.maxSelections !== undefined &&
      value.minSelections > value.maxSelections
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["minSelections"],
        message: "Minimum selections cannot exceed maximum selections",
      });
    }
  });

const fieldBaseSchema = z.object({
  key: z
    .string()
    .trim()
    .min(1)
    .max(100)
    .regex(
      /^[a-zA-Z][a-zA-Z0-9_]*$/,
      "Field key must start with a letter and contain only letters, numbers, and underscores",
    ),
  label: z.string().trim().min(1).max(200),
  description: z.string().trim().max(1000).optional(),
  type: eventFormFieldTypeSchema,
  scope: eventFormFieldScopeSchema.default("PARTICIPANT"),
  required: z.boolean().default(false),
  placeholder: z.string().trim().max(300).optional(),
  options: optionsSchema.optional(),
  validation: validationSchema.optional(),
  order: z.number().int().min(0).optional(),
  isSystemField: z.boolean().default(false),
});

export const createEventFormSchema = z.object({
  eventId: z.string().trim().min(1),
  title: z.string().trim().min(1).max(200),
  description: z.string().trim().max(2000).optional(),
  template: eventRegistrationTemplateSchema.optional(),
  status: eventFormStatusSchema.default("DRAFT"),
});

export const updateEventFormSchema = z
  .object({
    title: z.string().trim().min(1).max(200).optional(),
    description: z.string().trim().max(2000).optional(),
    template: eventRegistrationTemplateSchema.optional(),
    status: eventFormStatusSchema.optional(),
  })
  .refine(
    (data) => Object.keys(data).length > 0,
    "At least one field is required",
  );

export const createEventFormFieldSchema = fieldBaseSchema.superRefine(
  (data, ctx) => {
    const choiceTypes = [
      "MULTIPLE_CHOICE",
      "CHECKBOXES",
      "DROPDOWN",
    ];

    if (choiceTypes.includes(data.type) && !data.options?.length) {
      ctx.addIssue({
        code: "custom",
        path: ["options"],
        message: "Options are required for this field type",
      });
    }

    if (
      !choiceTypes.includes(data.type) &&
      data.options !== undefined
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["options"],
        message: "Options are only supported for choice-based fields",
      });
    }

    if (
      data.type !== "SHORT_ANSWER" &&
      data.type !== "PARAGRAPH" &&
      data.type !== "NUMBER" &&
      data.type !== "CHECKBOXES" &&
      data.type !== "FILE_UPLOAD" &&
      data.type !== "IMAGE_UPLOAD" &&
      data.validation !== undefined
    ) {
      const validationKeys = Object.keys(data.validation);

      if (validationKeys.length > 0) {
        ctx.addIssue({
          code: "custom",
          path: ["validation"],
          message: "Validation rules are not supported for this field type",
        });
      }
    }

    if (
      (data.type === "FILE_UPLOAD" || data.type === "IMAGE_UPLOAD") &&
      data.validation?.accept &&
      data.validation.accept.length === 0
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["validation", "accept"],
        message: "At least one accepted file type is required",
      });
    }

    if (
      data.type === "IMAGE_UPLOAD" &&
      data.validation?.accept &&
      data.validation.accept.some(
        (value) =>
          !value.toLowerCase().startsWith("image/") &&
          !value.toLowerCase().startsWith("."),
      )
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["validation", "accept"],
        message: "Image upload fields must accept image file types",
      });
    }
  },
);

export const updateEventFormFieldSchema = fieldBaseSchema
  .partial()
  .superRefine((data, ctx) => {
    if (
      data.type !== undefined &&
      [
        "MULTIPLE_CHOICE",
        "CHECKBOXES",
        "DROPDOWN",
      ].includes(data.type) &&
      data.options !== undefined &&
      data.options.length === 0
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["options"],
        message: "Options cannot be empty for choice-based fields",
      });
    }

    if (
      data.type !== undefined &&
      ![
        "MULTIPLE_CHOICE",
        "CHECKBOXES",
        "DROPDOWN",
      ].includes(data.type) &&
      data.options !== undefined
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["options"],
        message: "Options are only supported for choice-based fields",
      });
    }
  });

export const reorderEventFormFieldsSchema = z.object({
  fieldIds: z
    .array(z.string().trim().min(1))
    .min(1)
    .max(200)
    .refine(
      (fieldIds) => new Set(fieldIds).size === fieldIds.length,
      "Field IDs must be unique",
    ),
});

export const eventFormIdSchema = z.object({
  formId: z.string().trim().min(1),
});

export const eventFormFieldIdSchema = z.object({
  fieldId: z.string().trim().min(1),
});

export type CreateEventFormDto = z.infer<typeof createEventFormSchema>;
export type UpdateEventFormDto = z.infer<typeof updateEventFormSchema>;
export type CreateEventFormFieldDto = z.infer<
  typeof createEventFormFieldSchema
>;
export type UpdateEventFormFieldDto = z.infer<
  typeof updateEventFormFieldSchema
>;
export type ReorderEventFormFieldsDto = z.infer<
  typeof reorderEventFormFieldsSchema
>;