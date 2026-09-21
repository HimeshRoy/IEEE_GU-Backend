import { z } from "zod";
const eventAccessSchema = z.enum([
    "PUBLIC",
    "UNIVERSITY",
    "MEMBERS_ONLY",
    "INVITE_ONLY",
]);
const eventRegistrationTemplateSchema = z.enum([
    "UNIVERSITY_INDIVIDUAL",
    "UNIVERSITY_TEAM",
    "INTER_UNIVERSITY_INDIVIDUAL",
    "INTER_UNIVERSITY_TEAM",
    "PUBLIC_INDIVIDUAL",
    "PUBLIC_TEAM",
    "CUSTOM",
]);
const eventParticipationTypeSchema = z.enum([
    "INDIVIDUAL",
    "TEAM",
]);
export const createEventSchema = z
    .object({
    title: z.string().trim().min(3).max(200),
    slug: z
        .string()
        .trim()
        .min(3)
        .max(200)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
    shortDescription: z.string().trim().max(500).optional(),
    description: z.string().trim().min(10).max(10000),
    bannerImage: z.string().trim().url().optional(),
    venue: z.string().trim().max(300).optional(),
    eventDate: z.coerce.date(),
    startTime: z.coerce.date().optional(),
    endTime: z.coerce.date().optional(),
    registrationDeadline: z.coerce.date().optional(),
    capacity: z.number().int().positive().optional(),
    access: eventAccessSchema.default("PUBLIC"),
    isFeatured: z.boolean().default(false),
    registrationTemplate: eventRegistrationTemplateSchema.optional(),
    participationType: eventParticipationTypeSchema.default("INDIVIDUAL"),
    minTeamSize: z.number().int().min(1).optional(),
    maxTeamSize: z.number().int().min(2).optional(),
    enableQrAttendance: z.boolean().default(false),
})
    .superRefine((data, ctx) => {
    const isTeam = data.participationType === "TEAM" ||
        data.registrationTemplate === "UNIVERSITY_TEAM" ||
        data.registrationTemplate === "INTER_UNIVERSITY_TEAM" ||
        data.registrationTemplate === "PUBLIC_TEAM";
    if (isTeam && data.registrationTemplate !== "CUSTOM") {
        if (data.minTeamSize === undefined) {
            ctx.addIssue({
                code: "custom",
                path: ["minTeamSize"],
                message: "Minimum team size is required for team events",
            });
        }
        if (data.maxTeamSize === undefined) {
            ctx.addIssue({
                code: "custom",
                path: ["maxTeamSize"],
                message: "Maximum team size is required for team events",
            });
        }
    }
    if (data.minTeamSize !== undefined &&
        data.maxTeamSize !== undefined &&
        data.minTeamSize > data.maxTeamSize) {
        ctx.addIssue({
            code: "custom",
            path: ["maxTeamSize"],
            message: "Maximum team size must be greater than or equal to minimum team size",
        });
    }
    if (data.registrationTemplate !== undefined &&
        data.registrationTemplate.endsWith("_TEAM") &&
        data.participationType !== "TEAM") {
        ctx.addIssue({
            code: "custom",
            path: ["participationType"],
            message: "Team templates require team participation",
        });
    }
    if (data.registrationTemplate !== undefined &&
        data.registrationTemplate.endsWith("_INDIVIDUAL") &&
        data.participationType !== "INDIVIDUAL") {
        ctx.addIssue({
            code: "custom",
            path: ["participationType"],
            message: "Individual templates require individual participation",
        });
    }
});
export const updateEventSchema = z
    .object({
    title: z.string().trim().min(3).max(200).optional(),
    slug: z
        .string()
        .trim()
        .min(3)
        .max(200)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens")
        .optional(),
    shortDescription: z.string().trim().max(500).optional(),
    description: z.string().trim().min(10).max(10000).optional(),
    bannerImage: z.string().trim().url().optional(),
    venue: z.string().trim().max(300).optional(),
    eventDate: z.coerce.date().optional(),
    startTime: z.coerce.date().optional(),
    endTime: z.coerce.date().optional(),
    registrationDeadline: z.coerce.date().optional(),
    capacity: z.number().int().positive().optional(),
    access: eventAccessSchema.optional(),
    isFeatured: z.boolean().optional(),
    registrationTemplate: eventRegistrationTemplateSchema.optional(),
    participationType: eventParticipationTypeSchema.optional(),
    minTeamSize: z.number().int().min(2).optional(),
    maxTeamSize: z.number().int().min(2).optional(),
    enableQrAttendance: z.boolean().optional(),
})
    .refine((data) => Object.keys(data).length > 0, "At least one field is required")
    .superRefine((data, ctx) => {
    if (data.minTeamSize !== undefined &&
        data.maxTeamSize !== undefined &&
        data.minTeamSize > data.maxTeamSize) {
        ctx.addIssue({
            code: "custom",
            path: ["maxTeamSize"],
            message: "Maximum team size must be greater than or equal to minimum team size",
        });
    }
});
export const rejectEventSchema = z.object({
    rejectionReason: z.string().trim().min(5).max(500),
});
export const eventListQuerySchema = z.object({
    status: z
        .enum([
        "DRAFT",
        "PENDING_APPROVAL",
        "APPROVED",
        "REJECTED",
        "PUBLISHED",
        "CANCELLED",
        "COMPLETED",
    ])
        .optional(),
    access: eventAccessSchema.optional(),
    featured: z
        .enum(["true", "false"])
        .transform((value) => value === "true")
        .optional(),
});
//# sourceMappingURL=events.dto.js.map