import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.memberProfile`: Exposes CRUD operations for the **MemberProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MemberProfiles
      * const memberProfiles = await prisma.memberProfile.findMany()
      * ```
      */
    get memberProfile(): Prisma.MemberProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.academicYear`: Exposes CRUD operations for the **AcademicYear** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AcademicYears
      * const academicYears = await prisma.academicYear.findMany()
      * ```
      */
    get academicYear(): Prisma.AcademicYearDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.branchLeadership`: Exposes CRUD operations for the **BranchLeadership** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more BranchLeaderships
      * const branchLeaderships = await prisma.branchLeadership.findMany()
      * ```
      */
    get branchLeadership(): Prisma.BranchLeadershipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.event`: Exposes CRUD operations for the **Event** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Events
      * const events = await prisma.event.findMany()
      * ```
      */
    get event(): Prisma.EventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventRegistration`: Exposes CRUD operations for the **EventRegistration** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventRegistrations
      * const eventRegistrations = await prisma.eventRegistration.findMany()
      * ```
      */
    get eventRegistration(): Prisma.EventRegistrationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventForm`: Exposes CRUD operations for the **EventForm** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventForms
      * const eventForms = await prisma.eventForm.findMany()
      * ```
      */
    get eventForm(): Prisma.EventFormDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventFormField`: Exposes CRUD operations for the **EventFormField** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventFormFields
      * const eventFormFields = await prisma.eventFormField.findMany()
      * ```
      */
    get eventFormField(): Prisma.EventFormFieldDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventFormResponse`: Exposes CRUD operations for the **EventFormResponse** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventFormResponses
      * const eventFormResponses = await prisma.eventFormResponse.findMany()
      * ```
      */
    get eventFormResponse(): Prisma.EventFormResponseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventFormAnswer`: Exposes CRUD operations for the **EventFormAnswer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventFormAnswers
      * const eventFormAnswers = await prisma.eventFormAnswer.findMany()
      * ```
      */
    get eventFormAnswer(): Prisma.EventFormAnswerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.eventTeam`: Exposes CRUD operations for the **EventTeam** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more EventTeams
      * const eventTeams = await prisma.eventTeam.findMany()
      * ```
      */
    get eventTeam(): Prisma.EventTeamDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Announcements
      * const announcements = await prisma.announcement.findMany()
      * ```
      */
    get announcement(): Prisma.AnnouncementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.galleryAlbum`: Exposes CRUD operations for the **GalleryAlbum** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more GalleryAlbums
      * const galleryAlbums = await prisma.galleryAlbum.findMany()
      * ```
      */
    get galleryAlbum(): Prisma.GalleryAlbumDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.galleryImage`: Exposes CRUD operations for the **GalleryImage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more GalleryImages
      * const galleryImages = await prisma.galleryImage.findMany()
      * ```
      */
    get galleryImage(): Prisma.GalleryImageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map