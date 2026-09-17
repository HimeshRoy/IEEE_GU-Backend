import { z } from "zod";

export const membershipRejectionSchema = z.object({
  rejectionReason: z.string().trim().min(5).max(500),
});

export type MembershipRejectionInput = z.infer<
  typeof membershipRejectionSchema
>;