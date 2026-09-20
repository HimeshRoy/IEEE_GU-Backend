import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model MemberProfile
 *
 */
export type MemberProfile = Prisma.MemberProfileModel;
/**
 * Model AcademicYear
 *
 */
export type AcademicYear = Prisma.AcademicYearModel;
/**
 * Model BranchLeadership
 *
 */
export type BranchLeadership = Prisma.BranchLeadershipModel;
/**
 * Model Event
 *
 */
export type Event = Prisma.EventModel;
/**
 * Model EventRegistration
 *
 */
export type EventRegistration = Prisma.EventRegistrationModel;
/**
 * Model EventForm
 *
 */
export type EventForm = Prisma.EventFormModel;
/**
 * Model EventFormField
 *
 */
export type EventFormField = Prisma.EventFormFieldModel;
/**
 * Model EventFormResponse
 *
 */
export type EventFormResponse = Prisma.EventFormResponseModel;
/**
 * Model EventFormAnswer
 *
 */
export type EventFormAnswer = Prisma.EventFormAnswerModel;
/**
 * Model EventTeam
 *
 */
export type EventTeam = Prisma.EventTeamModel;
/**
 * Model Announcement
 *
 */
export type Announcement = Prisma.AnnouncementModel;
/**
 * Model GalleryAlbum
 *
 */
export type GalleryAlbum = Prisma.GalleryAlbumModel;
/**
 * Model GalleryImage
 *
 */
export type GalleryImage = Prisma.GalleryImageModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model AuditLog
 *
 */
export type AuditLog = Prisma.AuditLogModel;
//# sourceMappingURL=client.d.ts.map