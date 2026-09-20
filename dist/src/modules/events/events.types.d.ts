import type { EventAccess, EventRegistrationTemplate, EventParticipationType, EventStatus } from "../../generated/prisma/client.js";
export interface CreateEventInput {
    title: string;
    slug: string;
    shortDescription?: string | undefined;
    description: string;
    bannerImage?: string | undefined;
    venue?: string | undefined;
    eventDate: Date;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    registrationDeadline?: Date | undefined;
    capacity?: number | undefined;
    access: EventAccess;
    isFeatured?: boolean | undefined;
    registrationTemplate?: EventRegistrationTemplate | undefined;
    participationType: EventParticipationType;
    minTeamSize?: number | undefined;
    maxTeamSize?: number | undefined;
    enableQrAttendance: boolean;
}
export interface UpdateEventInput {
    title?: string | undefined;
    slug?: string | undefined;
    shortDescription?: string | undefined;
    description?: string | undefined;
    bannerImage?: string | undefined;
    venue?: string | undefined;
    eventDate?: Date | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    registrationDeadline?: Date | undefined;
    capacity?: number | undefined;
    access?: EventAccess | undefined;
    isFeatured?: boolean | undefined;
    registrationTemplate?: EventRegistrationTemplate | undefined;
    participationType?: EventParticipationType | undefined;
    minTeamSize?: number | undefined;
    maxTeamSize?: number | undefined;
    enableQrAttendance?: boolean | undefined;
}
export interface EventListFilters {
    status?: EventStatus | undefined;
    access?: EventAccess | undefined;
    featured?: boolean | undefined;
}
//# sourceMappingURL=events.types.d.ts.map