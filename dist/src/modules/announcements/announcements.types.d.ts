import type { ApprovalStatus, Visibility } from "../../generated/prisma/client.js";
export interface CreateAnnouncementInput {
    title: string;
    content: string;
    imageUrl?: string | undefined;
    visibility: Visibility;
}
export interface UpdateAnnouncementInput {
    title?: string | undefined;
    content?: string | undefined;
    imageUrl?: string | undefined;
    visibility?: Visibility | undefined;
}
export interface AnnouncementListFilters {
    visibility?: Visibility | undefined;
    approvalStatus?: ApprovalStatus | undefined;
    isPublished?: boolean | undefined;
}
//# sourceMappingURL=announcements.types.d.ts.map