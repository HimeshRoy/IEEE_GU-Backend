import { z } from "zod";
export declare const createAcademicYearSchema: z.ZodObject<{
    name: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
    isCurrent: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const updateAcademicYearSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    isCurrent: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type CreateAcademicYearInput = z.infer<typeof createAcademicYearSchema>;
export type UpdateAcademicYearInput = z.infer<typeof updateAcademicYearSchema>;
//# sourceMappingURL=academicYear.dto.d.ts.map