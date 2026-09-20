import { z } from "zod";
export declare const createAnnouncementSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    imageUrl: z.ZodOptional<z.ZodString>;
    visibility: z.ZodDefault<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        PRIVATE: "PRIVATE";
    }>>;
}, z.core.$strip>;
export declare const updateAnnouncementSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        PRIVATE: "PRIVATE";
    }>>;
}, z.core.$strip>;
export declare const announcementQuerySchema: z.ZodObject<{
    visibility: z.ZodOptional<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        PRIVATE: "PRIVATE";
    }>>;
    approvalStatus: z.ZodOptional<z.ZodEnum<{
        PENDING: "PENDING";
        REJECTED: "REJECTED";
        APPROVED: "APPROVED";
    }>>;
    isPublished: z.ZodOptional<z.ZodPipe<z.ZodEnum<{
        true: "true";
        false: "false";
    }>, z.ZodTransform<boolean, "true" | "false">>>;
}, z.core.$strip>;
export declare const rejectAnnouncementSchema: z.ZodObject<{
    rejectionReason: z.ZodString;
}, z.core.$strip>;
export type CreateAnnouncementInput = z.infer<typeof createAnnouncementSchema>;
export type UpdateAnnouncementInput = z.infer<typeof updateAnnouncementSchema>;
export type AnnouncementQueryInput = z.infer<typeof announcementQuerySchema>;
export type RejectAnnouncementInput = z.infer<typeof rejectAnnouncementSchema>;
//# sourceMappingURL=announcements.dto.d.ts.map