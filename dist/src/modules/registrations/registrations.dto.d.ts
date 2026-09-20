import { z } from "zod";
export declare const publicRegistrationSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    teamName: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
    answers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>]>>>;
    teamAnswers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>]>>>;
    teamMembers: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        phone: z.ZodOptional<z.ZodPipe<z.ZodString, z.ZodTransform<string | undefined, string>>>;
        answers: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>]>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export declare const registrationListQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<{
        CANCELLED: "CANCELLED";
        REGISTERED: "REGISTERED";
        ATTENDED: "ATTENDED";
        ABSENT: "ABSENT";
        WAITLISTED: "WAITLISTED";
    }>>;
}, z.core.$strip>;
export declare const updateRegistrationStatusSchema: z.ZodObject<{
    status: z.ZodEnum<{
        CANCELLED: "CANCELLED";
        REGISTERED: "REGISTERED";
        ATTENDED: "ATTENDED";
        ABSENT: "ABSENT";
        WAITLISTED: "WAITLISTED";
    }>;
}, z.core.$strip>;
export declare const scanRegistrationQrSchema: z.ZodObject<{
    qrToken: z.ZodString;
    eventId: z.ZodString;
}, z.core.$strip>;
export type PublicRegistrationInput = z.infer<typeof publicRegistrationSchema>;
export type RegistrationListQueryInput = z.infer<typeof registrationListQuerySchema>;
export type UpdateRegistrationStatusInput = z.infer<typeof updateRegistrationStatusSchema>;
export type ScanRegistrationQrInput = z.infer<typeof scanRegistrationQrSchema>;
//# sourceMappingURL=registrations.dto.d.ts.map