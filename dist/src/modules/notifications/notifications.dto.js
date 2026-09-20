import { z } from "zod";
export const notificationQuerySchema = z.object({
    isRead: z
        .enum(["true", "false"])
        .transform((value) => value === "true")
        .optional(),
});
//# sourceMappingURL=notifications.dto.js.map