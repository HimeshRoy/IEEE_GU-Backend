import { z } from "zod";
export declare const createEventSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    shortDescription: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    bannerImage: z.ZodOptional<z.ZodString>;
    venue: z.ZodOptional<z.ZodString>;
    eventDate: z.ZodCoercedDate<unknown>;
    startTime: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    endTime: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    registrationDeadline: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    capacity: z.ZodOptional<z.ZodNumber>;
    access: z.ZodDefault<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        UNIVERSITY: "UNIVERSITY";
        INVITE_ONLY: "INVITE_ONLY";
    }>>;
    isFeatured: z.ZodDefault<z.ZodBoolean>;
    registrationTemplate: z.ZodOptional<z.ZodEnum<{
        UNIVERSITY_INDIVIDUAL: "UNIVERSITY_INDIVIDUAL";
        UNIVERSITY_TEAM: "UNIVERSITY_TEAM";
        INTER_UNIVERSITY_INDIVIDUAL: "INTER_UNIVERSITY_INDIVIDUAL";
        INTER_UNIVERSITY_TEAM: "INTER_UNIVERSITY_TEAM";
        PUBLIC_INDIVIDUAL: "PUBLIC_INDIVIDUAL";
        PUBLIC_TEAM: "PUBLIC_TEAM";
        CUSTOM: "CUSTOM";
    }>>;
    participationType: z.ZodDefault<z.ZodEnum<{
        INDIVIDUAL: "INDIVIDUAL";
        TEAM: "TEAM";
    }>>;
    minTeamSize: z.ZodOptional<z.ZodNumber>;
    maxTeamSize: z.ZodOptional<z.ZodNumber>;
    enableQrAttendance: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export declare const updateEventSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
    shortDescription: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    bannerImage: z.ZodOptional<z.ZodString>;
    venue: z.ZodOptional<z.ZodString>;
    eventDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    startTime: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    endTime: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    registrationDeadline: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    capacity: z.ZodOptional<z.ZodNumber>;
    access: z.ZodOptional<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        UNIVERSITY: "UNIVERSITY";
        INVITE_ONLY: "INVITE_ONLY";
    }>>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    registrationTemplate: z.ZodOptional<z.ZodEnum<{
        UNIVERSITY_INDIVIDUAL: "UNIVERSITY_INDIVIDUAL";
        UNIVERSITY_TEAM: "UNIVERSITY_TEAM";
        INTER_UNIVERSITY_INDIVIDUAL: "INTER_UNIVERSITY_INDIVIDUAL";
        INTER_UNIVERSITY_TEAM: "INTER_UNIVERSITY_TEAM";
        PUBLIC_INDIVIDUAL: "PUBLIC_INDIVIDUAL";
        PUBLIC_TEAM: "PUBLIC_TEAM";
        CUSTOM: "CUSTOM";
    }>>;
    participationType: z.ZodOptional<z.ZodEnum<{
        INDIVIDUAL: "INDIVIDUAL";
        TEAM: "TEAM";
    }>>;
    minTeamSize: z.ZodOptional<z.ZodNumber>;
    maxTeamSize: z.ZodOptional<z.ZodNumber>;
    enableQrAttendance: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export declare const rejectEventSchema: z.ZodObject<{
    rejectionReason: z.ZodString;
}, z.core.$strip>;
export declare const eventListQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        REJECTED: "REJECTED";
        DRAFT: "DRAFT";
        PENDING_APPROVAL: "PENDING_APPROVAL";
        APPROVED: "APPROVED";
        PUBLISHED: "PUBLISHED";
        CANCELLED: "CANCELLED";
        COMPLETED: "COMPLETED";
    }>>;
    access: z.ZodOptional<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        UNIVERSITY: "UNIVERSITY";
        INVITE_ONLY: "INVITE_ONLY";
    }>>;
    featured: z.ZodOptional<z.ZodPipe<z.ZodEnum<{
        true: "true";
        false: "false";
    }>, z.ZodTransform<boolean, "true" | "false">>>;
}, z.core.$strip>;
export type CreateEventInput = z.infer<typeof createEventSchema>;
export type UpdateEventInput = z.infer<typeof updateEventSchema>;
export type RejectEventInput = z.infer<typeof rejectEventSchema>;
export type EventListQuery = z.infer<typeof eventListQuerySchema>;
//# sourceMappingURL=events.dto.d.ts.map