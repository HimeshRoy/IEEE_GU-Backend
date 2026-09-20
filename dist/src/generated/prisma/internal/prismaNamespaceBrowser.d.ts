import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly MemberProfile: "MemberProfile";
    readonly AcademicYear: "AcademicYear";
    readonly BranchLeadership: "BranchLeadership";
    readonly Event: "Event";
    readonly EventRegistration: "EventRegistration";
    readonly EventForm: "EventForm";
    readonly EventFormField: "EventFormField";
    readonly EventFormResponse: "EventFormResponse";
    readonly EventFormAnswer: "EventFormAnswer";
    readonly EventTeam: "EventTeam";
    readonly Announcement: "Announcement";
    readonly GalleryAlbum: "GalleryAlbum";
    readonly GalleryImage: "GalleryImage";
    readonly Notification: "Notification";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly phone: "phone";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly ieeeMembershipNumber: "ieeeMembershipNumber";
    readonly profileImage: "profileImage";
    readonly profileImageCloudinaryId: "profileImageCloudinaryId";
    readonly bio: "bio";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const MemberProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly membershipStatus: "membershipStatus";
    readonly joinedAt: "joinedAt";
    readonly department: "department";
    readonly course: "course";
    readonly year: "year";
    readonly rollNumber: "rollNumber";
    readonly profileVisibility: "profileVisibility";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly rejectionReason: "rejectionReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MemberProfileScalarFieldEnum = (typeof MemberProfileScalarFieldEnum)[keyof typeof MemberProfileScalarFieldEnum];
export declare const AcademicYearScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isCurrent: "isCurrent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AcademicYearScalarFieldEnum = (typeof AcademicYearScalarFieldEnum)[keyof typeof AcademicYearScalarFieldEnum];
export declare const BranchLeadershipScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly position: "position";
    readonly academicYearId: "academicYearId";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isCurrent: "isCurrent";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BranchLeadershipScalarFieldEnum = (typeof BranchLeadershipScalarFieldEnum)[keyof typeof BranchLeadershipScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly shortDescription: "shortDescription";
    readonly description: "description";
    readonly bannerImage: "bannerImage";
    readonly venue: "venue";
    readonly eventDate: "eventDate";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly registrationDeadline: "registrationDeadline";
    readonly capacity: "capacity";
    readonly status: "status";
    readonly access: "access";
    readonly isFeatured: "isFeatured";
    readonly registrationTemplate: "registrationTemplate";
    readonly participationType: "participationType";
    readonly minTeamSize: "minTeamSize";
    readonly maxTeamSize: "maxTeamSize";
    readonly enableQrAttendance: "enableQrAttendance";
    readonly createdById: "createdById";
    readonly approvalStatus: "approvalStatus";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly rejectionReason: "rejectionReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const EventRegistrationScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly userId: "userId";
    readonly teamId: "teamId";
    readonly name: "name";
    readonly email: "email";
    readonly phone: "phone";
    readonly qrToken: "qrToken";
    readonly isTeamLeader: "isTeamLeader";
    readonly registrationStatus: "registrationStatus";
    readonly registeredAt: "registeredAt";
    readonly attendedAt: "attendedAt";
};
export type EventRegistrationScalarFieldEnum = (typeof EventRegistrationScalarFieldEnum)[keyof typeof EventRegistrationScalarFieldEnum];
export declare const EventFormScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly title: "title";
    readonly description: "description";
    readonly template: "template";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventFormScalarFieldEnum = (typeof EventFormScalarFieldEnum)[keyof typeof EventFormScalarFieldEnum];
export declare const EventFormFieldScalarFieldEnum: {
    readonly id: "id";
    readonly formId: "formId";
    readonly key: "key";
    readonly label: "label";
    readonly description: "description";
    readonly type: "type";
    readonly scope: "scope";
    readonly required: "required";
    readonly placeholder: "placeholder";
    readonly options: "options";
    readonly validation: "validation";
    readonly order: "order";
    readonly isSystemField: "isSystemField";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventFormFieldScalarFieldEnum = (typeof EventFormFieldScalarFieldEnum)[keyof typeof EventFormFieldScalarFieldEnum];
export declare const EventFormResponseScalarFieldEnum: {
    readonly id: "id";
    readonly formId: "formId";
    readonly registrationId: "registrationId";
    readonly submittedAt: "submittedAt";
    readonly updatedAt: "updatedAt";
};
export type EventFormResponseScalarFieldEnum = (typeof EventFormResponseScalarFieldEnum)[keyof typeof EventFormResponseScalarFieldEnum];
export declare const EventFormAnswerScalarFieldEnum: {
    readonly id: "id";
    readonly responseId: "responseId";
    readonly fieldId: "fieldId";
    readonly value: "value";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventFormAnswerScalarFieldEnum = (typeof EventFormAnswerScalarFieldEnum)[keyof typeof EventFormAnswerScalarFieldEnum];
export declare const EventTeamScalarFieldEnum: {
    readonly id: "id";
    readonly eventId: "eventId";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EventTeamScalarFieldEnum = (typeof EventTeamScalarFieldEnum)[keyof typeof EventTeamScalarFieldEnum];
export declare const AnnouncementScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly content: "content";
    readonly imageUrl: "imageUrl";
    readonly visibility: "visibility";
    readonly isPublished: "isPublished";
    readonly publishedAt: "publishedAt";
    readonly createdById: "createdById";
    readonly approvalStatus: "approvalStatus";
    readonly approvedById: "approvedById";
    readonly approvedAt: "approvedAt";
    readonly rejectionReason: "rejectionReason";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum];
export declare const GalleryAlbumScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly coverImage: "coverImage";
    readonly coverCloudinaryId: "coverCloudinaryId";
    readonly visibility: "visibility";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GalleryAlbumScalarFieldEnum = (typeof GalleryAlbumScalarFieldEnum)[keyof typeof GalleryAlbumScalarFieldEnum];
export declare const GalleryImageScalarFieldEnum: {
    readonly id: "id";
    readonly albumId: "albumId";
    readonly imageUrl: "imageUrl";
    readonly cloudinaryId: "cloudinaryId";
    readonly caption: "caption";
    readonly createdAt: "createdAt";
};
export type GalleryImageScalarFieldEnum = (typeof GalleryImageScalarFieldEnum)[keyof typeof GalleryImageScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
    readonly isRead: "isRead";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map