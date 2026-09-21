import type { FormAnswerInput, PublicRegistrationInput, RegistrationListFilters } from "./registrations.types.js";
export declare function registerForEvent(eventId: string, input: PublicRegistrationInput, userId?: string): Promise<{
    teamMembers: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        qrToken: string | null;
        answers: FormAnswerInput;
    }[];
    event: {
        id: string;
        title: string;
        slug: string;
        enableQrAttendance: boolean;
    };
    team: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        eventId: string;
    } | null;
    formResponse: ({
        answers: ({
            field: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: import("../../generated/prisma/enums.js").EventFormFieldType;
                description: string | null;
                required: boolean;
                options: import("@prisma/client/runtime/client").JsonValue | null;
                key: string;
                label: string;
                scope: import("../../generated/prisma/enums.js").EventFormFieldScope;
                placeholder: string | null;
                validation: import("@prisma/client/runtime/client").JsonValue | null;
                order: number;
                isSystemField: boolean;
                formId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            value: import("@prisma/client/runtime/client").JsonValue;
            responseId: string;
            fieldId: string;
        })[];
    } & {
        id: string;
        updatedAt: Date;
        formId: string;
        registrationId: string;
        submittedAt: Date;
    }) | null;
    id: string;
    email: string;
    phone: string | null;
    name: string;
    userId: string | null;
    eventId: string;
    teamId: string | null;
    qrToken: string | null;
    isTeamLeader: boolean;
    registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
    registeredAt: Date;
    attendedAt: Date | null;
}>;
export declare function getEventRegistrations(eventId: string, filters?: RegistrationListFilters): Promise<{
    event: {
        id: string;
        title: string;
        capacity: number | null;
        participationType: import("../../generated/prisma/enums.js").EventParticipationType;
        minTeamSize: number | null;
        maxTeamSize: number | null;
        enableQrAttendance: boolean;
        registrationForm: {
            id: string;
            title: string;
            status: import("../../generated/prisma/enums.js").EventFormStatus;
        } | null;
    };
    statistics: {
        total: number;
        registered: number;
        waitlisted: number;
        attended: number;
        absent: number;
        cancelled: number;
        availableSeats: number | null;
    };
    registrations: ({
        team: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            eventId: string;
        } | null;
        formResponse: ({
            answers: ({
                field: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    type: import("../../generated/prisma/enums.js").EventFormFieldType;
                    description: string | null;
                    required: boolean;
                    options: import("@prisma/client/runtime/client").JsonValue | null;
                    key: string;
                    label: string;
                    scope: import("../../generated/prisma/enums.js").EventFormFieldScope;
                    placeholder: string | null;
                    validation: import("@prisma/client/runtime/client").JsonValue | null;
                    order: number;
                    isSystemField: boolean;
                    formId: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                value: import("@prisma/client/runtime/client").JsonValue;
                responseId: string;
                fieldId: string;
            })[];
        } & {
            id: string;
            updatedAt: Date;
            formId: string;
            registrationId: string;
            submittedAt: Date;
        }) | null;
    } & {
        id: string;
        email: string;
        phone: string | null;
        name: string;
        userId: string | null;
        eventId: string;
        teamId: string | null;
        qrToken: string | null;
        isTeamLeader: boolean;
        registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
        registeredAt: Date;
        attendedAt: Date | null;
    })[];
}>;
export declare function updateRegistrationStatus(registrationId: string, status: "REGISTERED" | "CANCELLED" | "ATTENDED" | "ABSENT" | "WAITLISTED", actorId: string): Promise<{
    id: string;
    email: string;
    phone: string | null;
    name: string;
    userId: string | null;
    eventId: string;
    teamId: string | null;
    qrToken: string | null;
    isTeamLeader: boolean;
    registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
    registeredAt: Date;
    attendedAt: Date | null;
}>;
export declare function promoteNextWaitlisted(eventId: string, actorId: string): Promise<{
    id: string;
    email: string;
    phone: string | null;
    name: string;
    userId: string | null;
    eventId: string;
    teamId: string | null;
    qrToken: string | null;
    isTeamLeader: boolean;
    registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
    registeredAt: Date;
    attendedAt: Date | null;
}>;
export declare function scanRegistrationQr(qrToken: string, eventId: string, actorId: string): Promise<{
    type: "TEAM";
    event: {
        id: string;
        title: string;
    };
    team: {
        id: string;
        name: string;
    } | null;
    scannedParticipant: {
        id: string;
        name: string;
    };
    participants: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        isTeamLeader: boolean;
        registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
        attendedAt: Date | null;
    }[];
    attendanceRecordedAt: Date;
} | {
    type: "INDIVIDUAL";
    event: {
        id: string;
        title: string;
    };
    team: null;
    scannedParticipant: {
        id: string;
        name: string;
    };
    participants: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        isTeamLeader: boolean;
        registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
        attendedAt: Date | null;
    }[];
    attendanceRecordedAt: Date;
}>;
export declare function getMyRegistrations(userId: string): Promise<({
    event: {
        id: string;
        title: string;
        description: string;
        slug: string;
        shortDescription: string | null;
        bannerImage: string | null;
        venue: string | null;
        eventDate: Date;
        startTime: Date | null;
        endTime: Date | null;
        registrationDeadline: Date | null;
        capacity: number | null;
        access: import("../../generated/prisma/enums.js").EventAccess;
        participationType: import("../../generated/prisma/enums.js").EventParticipationType;
        minTeamSize: number | null;
        maxTeamSize: number | null;
        enableQrAttendance: boolean;
        status: import("../../generated/prisma/enums.js").EventStatus;
    };
    team: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        eventId: string;
    } | null;
    formResponse: ({
        answers: ({
            field: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                type: import("../../generated/prisma/enums.js").EventFormFieldType;
                description: string | null;
                required: boolean;
                options: import("@prisma/client/runtime/client").JsonValue | null;
                key: string;
                label: string;
                scope: import("../../generated/prisma/enums.js").EventFormFieldScope;
                placeholder: string | null;
                validation: import("@prisma/client/runtime/client").JsonValue | null;
                order: number;
                isSystemField: boolean;
                formId: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            value: import("@prisma/client/runtime/client").JsonValue;
            responseId: string;
            fieldId: string;
        })[];
    } & {
        id: string;
        updatedAt: Date;
        formId: string;
        registrationId: string;
        submittedAt: Date;
    }) | null;
} & {
    id: string;
    email: string;
    phone: string | null;
    name: string;
    userId: string | null;
    eventId: string;
    teamId: string | null;
    qrToken: string | null;
    isTeamLeader: boolean;
    registrationStatus: import("../../generated/prisma/enums.js").RegistrationStatus;
    registeredAt: Date;
    attendedAt: Date | null;
})[]>;
//# sourceMappingURL=registrations.service.d.ts.map