import { z } from "zod";
export declare const initialSetupSchema: z.ZodObject<{
    setupSecret: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    academicYear: z.ZodObject<{
        name: z.ZodString;
        startDate: z.ZodCoercedDate<unknown>;
        endDate: z.ZodCoercedDate<unknown>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type InitialSetupInput = z.infer<typeof initialSetupSchema>;
//# sourceMappingURL=setup.dto.d.ts.map