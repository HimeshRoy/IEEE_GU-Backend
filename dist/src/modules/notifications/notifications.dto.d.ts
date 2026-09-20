import { z } from "zod";
export declare const notificationQuerySchema: z.ZodObject<{
    isRead: z.ZodOptional<z.ZodPipe<z.ZodEnum<{
        true: "true";
        false: "false";
    }>, z.ZodTransform<boolean, "true" | "false">>>;
}, z.core.$strip>;
//# sourceMappingURL=notifications.dto.d.ts.map