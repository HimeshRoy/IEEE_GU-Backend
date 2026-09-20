import { z } from "zod";
export const createAcademicYearSchema = z
    .object({
    name: z.string().trim().min(1).max(50),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    isCurrent: z.boolean().optional().default(false),
})
    .refine((data) => new Date(data.endDate).getTime() >
    new Date(data.startDate).getTime(), {
    message: "End date must be after start date",
    path: ["endDate"],
});
export const updateAcademicYearSchema = z
    .object({
    name: z.string().trim().min(1).max(50).optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    isCurrent: z.boolean().optional(),
})
    .refine((data) => {
    if (!data.startDate || !data.endDate) {
        return true;
    }
    return (new Date(data.endDate).getTime() >
        new Date(data.startDate).getTime());
}, {
    message: "End date must be after start date",
    path: ["endDate"],
});
//# sourceMappingURL=academicYear.dto.js.map