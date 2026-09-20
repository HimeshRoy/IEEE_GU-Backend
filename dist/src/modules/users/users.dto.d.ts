import { z } from "zod";
export declare const createPrivilegedUserSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    ieeeMembershipNumber: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<{
        STUDENT: "STUDENT";
        FACULTY: "FACULTY";
        FACULTY_ADVISOR: "FACULTY_ADVISOR";
        IEEE_COUNSELOR: "IEEE_COUNSELOR";
        FACULTY_MEMBER: "FACULTY_MEMBER";
        CHAIRMAN: "CHAIRMAN";
        VICE_CHAIRMAN: "VICE_CHAIRMAN";
        JOINT_SECRETARY: "JOINT_SECRETARY";
        PHOTOGRAPHER: "PHOTOGRAPHER";
        TREASURER: "TREASURER";
    }>;
}, z.core.$strip>;
export declare const updateUserRoleSchema: z.ZodObject<{
    role: z.ZodEnum<{
        STUDENT: "STUDENT";
        FACULTY: "FACULTY";
        FACULTY_ADVISOR: "FACULTY_ADVISOR";
        IEEE_COUNSELOR: "IEEE_COUNSELOR";
        FACULTY_MEMBER: "FACULTY_MEMBER";
        CHAIRMAN: "CHAIRMAN";
        VICE_CHAIRMAN: "VICE_CHAIRMAN";
        JOINT_SECRETARY: "JOINT_SECRETARY";
        WEBMASTER: "WEBMASTER";
        PHOTOGRAPHER: "PHOTOGRAPHER";
        TREASURER: "TREASURER";
    }>;
}, z.core.$strip>;
export declare const assignLeadershipPositionSchema: z.ZodObject<{
    userId: z.ZodString;
    position: z.ZodEnum<{
        IEEE_COUNSELOR: "IEEE_COUNSELOR";
        FACULTY_MEMBER: "FACULTY_MEMBER";
        CHAIRMAN: "CHAIRMAN";
        VICE_CHAIRMAN: "VICE_CHAIRMAN";
        JOINT_SECRETARY: "JOINT_SECRETARY";
        WEBMASTER: "WEBMASTER";
        PHOTOGRAPHER: "PHOTOGRAPHER";
        TREASURER: "TREASURER";
    }>;
    academicYearId: z.ZodString;
    startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    endDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export declare const updateOwnProfileSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    ieeeMembershipNumber: z.ZodOptional<z.ZodString>;
    department: z.ZodOptional<z.ZodString>;
    course: z.ZodOptional<z.ZodString>;
    year: z.ZodOptional<z.ZodString>;
    rollNumber: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const changeOwnPasswordSchema: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
export type CreatePrivilegedUserInput = z.infer<typeof createPrivilegedUserSchema>;
export type UpdateUserRoleInput = z.infer<typeof updateUserRoleSchema>;
export type AssignLeadershipPositionInput = z.infer<typeof assignLeadershipPositionSchema>;
export type UpdateOwnProfileInput = z.infer<typeof updateOwnProfileSchema>;
export type ChangeOwnPasswordInput = z.infer<typeof changeOwnPasswordSchema>;
//# sourceMappingURL=users.dto.d.ts.map