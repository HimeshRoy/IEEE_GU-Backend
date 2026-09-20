import { z } from "zod";
export const createAnnouncementSchema = z.object({
    title: z.string().trim().min(3).max(200),
    content: z.string().trim().min(10).max(20000),
    imageUrl: z.string().trim().url().optional(),
    visibility: z
        .enum(["PUBLIC", "MEMBERS_ONLY", "PRIVATE"])
        .default("PUBLIC"),
});
export const updateAnnouncementSchema = z
    .object({
    title: z.string().trim().min(3).max(200).optional(),
    content: z.string().trim().min(10).max(20000).optional(),
    imageUrl: z.string().trim().url().optional(),
    visibility: z
        .enum(["PUBLIC", "MEMBERS_ONLY", "PRIVATE"])
        .optional(),
})
    .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided",
});
export const announcementQuerySchema = z.object({
    visibility: z
        .enum(["PUBLIC", "MEMBERS_ONLY", "PRIVATE"])
        .optional(),
    approvalStatus: z
        .enum(["PENDING", "APPROVED", "REJECTED"])
        .optional(),
    isPublished: z
        .enum(["true", "false"])
        .transform((value) => value === "true")
        .optional(),
});
export const rejectAnnouncementSchema = z.object({
    rejectionReason: z
        .string()
        .trim()
        .min(5)
        .max(500),
});
//# sourceMappingURL=announcements.dto.js.map