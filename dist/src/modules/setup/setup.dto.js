import { z } from "zod";
export const initialSetupSchema = z.object({
    setupSecret: z.string().min(16).max(256),
    email: z.string().trim().email(),
    password: z.string().min(8).max(128),
    firstName: z.string().trim().min(2).max(50),
    lastName: z.string().trim().max(50).optional(),
    phone: z.string().trim().min(10).max(15).optional(),
    academicYear: z.object({
        name: z.string().trim().min(4).max(20),
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
    }),
});
//# sourceMappingURL=setup.dto.js.map