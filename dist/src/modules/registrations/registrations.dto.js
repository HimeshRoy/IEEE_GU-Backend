import { z } from "zod";
const optionalPhoneSchema = z
    .string()
    .trim()
    .transform((value) => (value === "" ? undefined : value))
    .optional()
    .refine((value) => value === undefined || /^\d{10,15}$/.test(value), {
    message: "Phone number must contain 10 to 15 digits.",
});
const formAnswerValueSchema = z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.string()),
]);
const formAnswersSchema = z.record(z.string().trim().min(1).max(100), formAnswerValueSchema);
const teamMemberSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email(),
    phone: optionalPhoneSchema,
    answers: formAnswersSchema.default({}),
});
export const publicRegistrationSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email(),
    phone: optionalPhoneSchema,
    teamName: z
        .string()
        .trim()
        .transform((value) => (value === "" ? undefined : value))
        .optional()
        .refine((value) => value === undefined || (value.length >= 2 && value.length <= 100), {
        message: "Team name must contain 2 to 100 characters.",
    }),
    answers: formAnswersSchema.default({}),
    teamAnswers: formAnswersSchema.default({}),
    teamMembers: z
        .array(teamMemberSchema)
        .default([]),
});
export const registrationListQuerySchema = z.object({
    status: z
        .enum([
        "REGISTERED",
        "CANCELLED",
        "ATTENDED",
        "ABSENT",
        "WAITLISTED",
    ])
        .optional(),
});
export const updateRegistrationStatusSchema = z.object({
    status: z.enum([
        "REGISTERED",
        "CANCELLED",
        "ATTENDED",
        "ABSENT",
        "WAITLISTED",
    ]),
});
export const scanRegistrationQrSchema = z.object({
    qrToken: z.string().trim().min(10).max(500),
    eventId: z.string().trim().min(1),
});
//# sourceMappingURL=registrations.dto.js.map