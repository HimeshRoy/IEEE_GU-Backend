import type { MembershipStatus } from "../../generated/prisma/client.js";

export interface MembershipApprovalResult {
  membershipStatus: MembershipStatus;
  approvedById: string | null;
  approvedAt: Date | null;
  rejectionReason: string | null;
}