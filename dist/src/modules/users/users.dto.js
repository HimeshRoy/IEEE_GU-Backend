import { z } from "zod";
export const createPrivilegedUserSchema = z.object({
    email: z.string().trim().email(),
    password: z.string().min(8).max(128),
    firstName: z.string().trim().min(2).max(50),
    lastName: z.string().trim().max(50).optional(),
    phone: z.string().trim().min(10).max(15).optional(),
    ieeeMembershipNumber: z.string().trim().min(1).max(50).optional(),
    role: z.enum([
        "STUDENT",
        "FACULTY",
        "FACULTY_ADVISOR",
        "IEEE_COUNSELOR",
        "FACULTY_MEMBER",
        "CHAIRMAN",
        "VICE_CHAIRMAN",
        "JOINT_SECRETARY",
        "PHOTOGRAPHER",
        "TREASURER",
    ]),
});
export const updateUserRoleSchema = z.object({
    role: z.enum([
        "STUDENT",
        "FACULTY",
        "FACULTY_ADVISOR",
        "IEEE_COUNSELOR",
        "FACULTY_MEMBER",
        "CHAIRMAN",
        "VICE_CHAIRMAN",
        "JOINT_SECRETARY",
        "WEBMASTER",
        "PHOTOGRAPHER",
        "TREASURER",
    ]),
});
export const assignLeadershipPositionSchema = z.object({
    userId: z.string().trim().min(1),
    position: z.enum([
        "IEEE_COUNSELOR",
        "FACULTY_MEMBER",
        "CHAIRMAN",
        "VICE_CHAIRMAN",
        "JOINT_SECRETARY",
        "WEBMASTER",
        "PHOTOGRAPHER",
        "TREASURER",
    ]),
    academicYearId: z.string().trim().min(1),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
});
export const updateOwnProfileSchema = z
    .object({
    firstName: z.string().trim().min(2).max(50).optional(),
    lastName: z.string().trim().max(50).optional(),
    phone: z
        .string()
        .trim()
        .min(10)
        .max(15)
        .optional(),
    bio: z
        .string()
        .trim()
        .max(1000)
        .optional(),
    ieeeMembershipNumber: z
        .string()
        .trim()
        .max(50)
        .optional(),
    department: z
        .string()
        .trim()
        .max(150)
        .optional(),
    course: z
        .string()
        .trim()
        .max(150)
        .optional(),
    year: z
        .string()
        .trim()
        .max(50)
        .optional(),
    rollNumber: z
        .string()
        .trim()
        .max(50)
        .optional(),
})
    .refine((data) => Object.keys(data).length > 0, {
    message: "At least one profile field must be provided",
});
export const changeOwnPasswordSchema = z
    .object({
    currentPassword: z
        .string()
        .min(1)
        .max(128),
    newPassword: z
        .string()
        .min(8)
        .max(128),
    confirmPassword: z
        .string()
        .min(8)
        .max(128),
})
    .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords do not match",
    path: ["confirmPassword"],
})
    .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from the current password",
    path: ["newPassword"],
});
//# sourceMappingURL=users.dto.js.map