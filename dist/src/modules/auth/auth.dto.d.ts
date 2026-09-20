import { z } from "zod";
export declare const signupSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodString;
    ieeeMembershipNumber: z.ZodString;
    department: z.ZodString;
    course: z.ZodString;
    year: z.ZodString;
    rollNumber: z.ZodString;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type SignupInput = z.infer<typeof signupSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
//# sourceMappingURL=auth.dto.d.ts.map