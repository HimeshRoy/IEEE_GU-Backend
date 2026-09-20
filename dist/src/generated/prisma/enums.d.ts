export declare const UserRole: {
    readonly STUDENT: "STUDENT";
    readonly FACULTY: "FACULTY";
    readonly FACULTY_ADVISOR: "FACULTY_ADVISOR";
    readonly IEEE_COUNSELOR: "IEEE_COUNSELOR";
    readonly FACULTY_MEMBER: "FACULTY_MEMBER";
    readonly CHAIRMAN: "CHAIRMAN";
    readonly VICE_CHAIRMAN: "VICE_CHAIRMAN";
    readonly JOINT_SECRETARY: "JOINT_SECRETARY";
    readonly WEBMASTER: "WEBMASTER";
    readonly PHOTOGRAPHER: "PHOTOGRAPHER";
    readonly TREASURER: "TREASURER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const BranchPosition: {
    readonly IEEE_COUNSELOR: "IEEE_COUNSELOR";
    readonly FACULTY_MEMBER: "FACULTY_MEMBER";
    readonly CHAIRMAN: "CHAIRMAN";
    readonly VICE_CHAIRMAN: "VICE_CHAIRMAN";
    readonly JOINT_SECRETARY: "JOINT_SECRETARY";
    readonly WEBMASTER: "WEBMASTER";
    readonly PHOTOGRAPHER: "PHOTOGRAPHER";
    readonly TREASURER: "TREASURER";
};
export type BranchPosition = (typeof BranchPosition)[keyof typeof BranchPosition];
export declare const MembershipStatus: {
    readonly PENDING: "PENDING";
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly EXPIRED: "EXPIRED";
    readonly REJECTED: "REJECTED";
};
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
export declare const Visibility: {
    readonly PUBLIC: "PUBLIC";
    readonly MEMBERS_ONLY: "MEMBERS_ONLY";
    readonly PRIVATE: "PRIVATE";
};
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
export declare const EventStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING_APPROVAL: "PENDING_APPROVAL";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
    readonly PUBLISHED: "PUBLISHED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus];
export declare const EventAccess: {
    readonly PUBLIC: "PUBLIC";
    readonly UNIVERSITY: "UNIVERSITY";
    readonly MEMBERS_ONLY: "MEMBERS_ONLY";
    readonly INVITE_ONLY: "INVITE_ONLY";
};
export type EventAccess = (typeof EventAccess)[keyof typeof EventAccess];
export declare const RegistrationStatus: {
    readonly REGISTERED: "REGISTERED";
    readonly CANCELLED: "CANCELLED";
    readonly ATTENDED: "ATTENDED";
    readonly ABSENT: "ABSENT";
    readonly WAITLISTED: "WAITLISTED";
};
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];
export declare const ApprovalStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus];
export declare const EventRegistrationTemplate: {
    readonly UNIVERSITY_INDIVIDUAL: "UNIVERSITY_INDIVIDUAL";
    readonly UNIVERSITY_TEAM: "UNIVERSITY_TEAM";
    readonly INTER_UNIVERSITY_INDIVIDUAL: "INTER_UNIVERSITY_INDIVIDUAL";
    readonly INTER_UNIVERSITY_TEAM: "INTER_UNIVERSITY_TEAM";
    readonly PUBLIC_INDIVIDUAL: "PUBLIC_INDIVIDUAL";
    readonly PUBLIC_TEAM: "PUBLIC_TEAM";
    readonly CUSTOM: "CUSTOM";
};
export type EventRegistrationTemplate = (typeof EventRegistrationTemplate)[keyof typeof EventRegistrationTemplate];
export declare const EventParticipationType: {
    readonly INDIVIDUAL: "INDIVIDUAL";
    readonly TEAM: "TEAM";
};
export type EventParticipationType = (typeof EventParticipationType)[keyof typeof EventParticipationType];
export declare const EventFormStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly CLOSED: "CLOSED";
    readonly ARCHIVED: "ARCHIVED";
};
export type EventFormStatus = (typeof EventFormStatus)[keyof typeof EventFormStatus];
export declare const EventFormFieldType: {
    readonly SHORT_ANSWER: "SHORT_ANSWER";
    readonly PARAGRAPH: "PARAGRAPH";
    readonly EMAIL: "EMAIL";
    readonly PHONE: "PHONE";
    readonly NUMBER: "NUMBER";
    readonly MULTIPLE_CHOICE: "MULTIPLE_CHOICE";
    readonly CHECKBOXES: "CHECKBOXES";
    readonly DROPDOWN: "DROPDOWN";
    readonly DATE: "DATE";
    readonly TIME: "TIME";
    readonly FILE_UPLOAD: "FILE_UPLOAD";
    readonly IMAGE_UPLOAD: "IMAGE_UPLOAD";
};
export type EventFormFieldType = (typeof EventFormFieldType)[keyof typeof EventFormFieldType];
export declare const EventFormFieldScope: {
    readonly PARTICIPANT: "PARTICIPANT";
    readonly TEAM: "TEAM";
};
export type EventFormFieldScope = (typeof EventFormFieldScope)[keyof typeof EventFormFieldScope];
export declare const NotificationType: {
    readonly EVENT: "EVENT";
    readonly ANNOUNCEMENT: "ANNOUNCEMENT";
    readonly APPROVAL: "APPROVAL";
    readonly MEMBERSHIP: "MEMBERSHIP";
    readonly SYSTEM: "SYSTEM";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const AuditAction: {
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly LOGIN: "LOGIN";
    readonly LOGOUT: "LOGOUT";
    readonly APPROVE: "APPROVE";
    readonly REJECT: "REJECT";
    readonly PUBLISH: "PUBLISH";
    readonly CANCEL: "CANCEL";
    readonly REGISTER: "REGISTER";
    readonly ATTEND: "ATTEND";
};
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction];
//# sourceMappingURL=enums.d.ts.map