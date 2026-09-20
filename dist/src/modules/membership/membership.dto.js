import { z } from "zod";
export const membershipRejectionSchema = z.object({
    rejectionReason: z.string().trim().min(5).max(500),
});
//# sourceMappingURL=membership.dto.js.map