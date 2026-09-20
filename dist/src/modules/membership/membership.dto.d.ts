import { z } from "zod";
export declare const membershipRejectionSchema: z.ZodObject<{
    rejectionReason: z.ZodString;
}, z.core.$strip>;
export type MembershipRejectionInput = z.infer<typeof membershipRejectionSchema>;
//# sourceMappingURL=membership.dto.d.ts.map