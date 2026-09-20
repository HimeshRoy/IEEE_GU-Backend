import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.10.0
 * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "memberProfile" | "academicYear" | "branchLeadership" | "event" | "eventRegistration" | "eventForm" | "eventFormField" | "eventFormResponse" | "eventFormAnswer" | "eventTeam" | "announcement" | "galleryAlbum" | "galleryImage" | "notification" | "auditLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        MemberProfile: {
            payload: Prisma.$MemberProfilePayload<ExtArgs>;
            fields: Prisma.MemberProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MemberProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MemberProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>;
                };
                findFirst: {
                    args: Prisma.MemberProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MemberProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>;
                };
                findMany: {
                    args: Prisma.MemberProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>[];
                };
                create: {
                    args: Prisma.MemberProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>;
                };
                createMany: {
                    args: Prisma.MemberProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MemberProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>[];
                };
                delete: {
                    args: Prisma.MemberProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>;
                };
                update: {
                    args: Prisma.MemberProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.MemberProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MemberProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MemberProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>[];
                };
                upsert: {
                    args: Prisma.MemberProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MemberProfilePayload>;
                };
                aggregate: {
                    args: Prisma.MemberProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMemberProfile>;
                };
                groupBy: {
                    args: Prisma.MemberProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemberProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MemberProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MemberProfileCountAggregateOutputType> | number;
                };
            };
        };
        AcademicYear: {
            payload: Prisma.$AcademicYearPayload<ExtArgs>;
            fields: Prisma.AcademicYearFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AcademicYearFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AcademicYearFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                findFirst: {
                    args: Prisma.AcademicYearFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AcademicYearFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                findMany: {
                    args: Prisma.AcademicYearFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                create: {
                    args: Prisma.AcademicYearCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                createMany: {
                    args: Prisma.AcademicYearCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AcademicYearCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                delete: {
                    args: Prisma.AcademicYearDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                update: {
                    args: Prisma.AcademicYearUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                deleteMany: {
                    args: Prisma.AcademicYearDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AcademicYearUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AcademicYearUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>[];
                };
                upsert: {
                    args: Prisma.AcademicYearUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AcademicYearPayload>;
                };
                aggregate: {
                    args: Prisma.AcademicYearAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAcademicYear>;
                };
                groupBy: {
                    args: Prisma.AcademicYearGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcademicYearGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AcademicYearCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AcademicYearCountAggregateOutputType> | number;
                };
            };
        };
        BranchLeadership: {
            payload: Prisma.$BranchLeadershipPayload<ExtArgs>;
            fields: Prisma.BranchLeadershipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BranchLeadershipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BranchLeadershipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>;
                };
                findFirst: {
                    args: Prisma.BranchLeadershipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BranchLeadershipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>;
                };
                findMany: {
                    args: Prisma.BranchLeadershipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>[];
                };
                create: {
                    args: Prisma.BranchLeadershipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>;
                };
                createMany: {
                    args: Prisma.BranchLeadershipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BranchLeadershipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>[];
                };
                delete: {
                    args: Prisma.BranchLeadershipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>;
                };
                update: {
                    args: Prisma.BranchLeadershipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>;
                };
                deleteMany: {
                    args: Prisma.BranchLeadershipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BranchLeadershipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BranchLeadershipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>[];
                };
                upsert: {
                    args: Prisma.BranchLeadershipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BranchLeadershipPayload>;
                };
                aggregate: {
                    args: Prisma.BranchLeadershipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBranchLeadership>;
                };
                groupBy: {
                    args: Prisma.BranchLeadershipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BranchLeadershipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BranchLeadershipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BranchLeadershipCountAggregateOutputType> | number;
                };
            };
        };
        Event: {
            payload: Prisma.$EventPayload<ExtArgs>;
            fields: Prisma.EventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findFirst: {
                    args: Prisma.EventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                findMany: {
                    args: Prisma.EventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                create: {
                    args: Prisma.EventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                createMany: {
                    args: Prisma.EventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                delete: {
                    args: Prisma.EventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                update: {
                    args: Prisma.EventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                deleteMany: {
                    args: Prisma.EventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>[];
                };
                upsert: {
                    args: Prisma.EventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventPayload>;
                };
                aggregate: {
                    args: Prisma.EventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent>;
                };
                groupBy: {
                    args: Prisma.EventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventCountAggregateOutputType> | number;
                };
            };
        };
        EventRegistration: {
            payload: Prisma.$EventRegistrationPayload<ExtArgs>;
            fields: Prisma.EventRegistrationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventRegistrationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventRegistrationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>;
                };
                findFirst: {
                    args: Prisma.EventRegistrationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventRegistrationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>;
                };
                findMany: {
                    args: Prisma.EventRegistrationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[];
                };
                create: {
                    args: Prisma.EventRegistrationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>;
                };
                createMany: {
                    args: Prisma.EventRegistrationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventRegistrationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[];
                };
                delete: {
                    args: Prisma.EventRegistrationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>;
                };
                update: {
                    args: Prisma.EventRegistrationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>;
                };
                deleteMany: {
                    args: Prisma.EventRegistrationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventRegistrationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventRegistrationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>[];
                };
                upsert: {
                    args: Prisma.EventRegistrationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventRegistrationPayload>;
                };
                aggregate: {
                    args: Prisma.EventRegistrationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventRegistration>;
                };
                groupBy: {
                    args: Prisma.EventRegistrationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventRegistrationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventRegistrationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventRegistrationCountAggregateOutputType> | number;
                };
            };
        };
        EventForm: {
            payload: Prisma.$EventFormPayload<ExtArgs>;
            fields: Prisma.EventFormFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFormFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFormFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>;
                };
                findFirst: {
                    args: Prisma.EventFormFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFormFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>;
                };
                findMany: {
                    args: Prisma.EventFormFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>[];
                };
                create: {
                    args: Prisma.EventFormCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>;
                };
                createMany: {
                    args: Prisma.EventFormCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventFormCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>[];
                };
                delete: {
                    args: Prisma.EventFormDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>;
                };
                update: {
                    args: Prisma.EventFormUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>;
                };
                deleteMany: {
                    args: Prisma.EventFormDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventFormUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventFormUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>[];
                };
                upsert: {
                    args: Prisma.EventFormUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormPayload>;
                };
                aggregate: {
                    args: Prisma.EventFormAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventForm>;
                };
                groupBy: {
                    args: Prisma.EventFormGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventFormCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormCountAggregateOutputType> | number;
                };
            };
        };
        EventFormField: {
            payload: Prisma.$EventFormFieldPayload<ExtArgs>;
            fields: Prisma.EventFormFieldFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFormFieldFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFormFieldFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>;
                };
                findFirst: {
                    args: Prisma.EventFormFieldFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFormFieldFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>;
                };
                findMany: {
                    args: Prisma.EventFormFieldFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>[];
                };
                create: {
                    args: Prisma.EventFormFieldCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>;
                };
                createMany: {
                    args: Prisma.EventFormFieldCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventFormFieldCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>[];
                };
                delete: {
                    args: Prisma.EventFormFieldDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>;
                };
                update: {
                    args: Prisma.EventFormFieldUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>;
                };
                deleteMany: {
                    args: Prisma.EventFormFieldDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventFormFieldUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventFormFieldUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>[];
                };
                upsert: {
                    args: Prisma.EventFormFieldUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormFieldPayload>;
                };
                aggregate: {
                    args: Prisma.EventFormFieldAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventFormField>;
                };
                groupBy: {
                    args: Prisma.EventFormFieldGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormFieldGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventFormFieldCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormFieldCountAggregateOutputType> | number;
                };
            };
        };
        EventFormResponse: {
            payload: Prisma.$EventFormResponsePayload<ExtArgs>;
            fields: Prisma.EventFormResponseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFormResponseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFormResponseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>;
                };
                findFirst: {
                    args: Prisma.EventFormResponseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFormResponseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>;
                };
                findMany: {
                    args: Prisma.EventFormResponseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>[];
                };
                create: {
                    args: Prisma.EventFormResponseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>;
                };
                createMany: {
                    args: Prisma.EventFormResponseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventFormResponseCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>[];
                };
                delete: {
                    args: Prisma.EventFormResponseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>;
                };
                update: {
                    args: Prisma.EventFormResponseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>;
                };
                deleteMany: {
                    args: Prisma.EventFormResponseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventFormResponseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventFormResponseUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>[];
                };
                upsert: {
                    args: Prisma.EventFormResponseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormResponsePayload>;
                };
                aggregate: {
                    args: Prisma.EventFormResponseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventFormResponse>;
                };
                groupBy: {
                    args: Prisma.EventFormResponseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormResponseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventFormResponseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormResponseCountAggregateOutputType> | number;
                };
            };
        };
        EventFormAnswer: {
            payload: Prisma.$EventFormAnswerPayload<ExtArgs>;
            fields: Prisma.EventFormAnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventFormAnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventFormAnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>;
                };
                findFirst: {
                    args: Prisma.EventFormAnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventFormAnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>;
                };
                findMany: {
                    args: Prisma.EventFormAnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>[];
                };
                create: {
                    args: Prisma.EventFormAnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>;
                };
                createMany: {
                    args: Prisma.EventFormAnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventFormAnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>[];
                };
                delete: {
                    args: Prisma.EventFormAnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>;
                };
                update: {
                    args: Prisma.EventFormAnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.EventFormAnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventFormAnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventFormAnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>[];
                };
                upsert: {
                    args: Prisma.EventFormAnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventFormAnswerPayload>;
                };
                aggregate: {
                    args: Prisma.EventFormAnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventFormAnswer>;
                };
                groupBy: {
                    args: Prisma.EventFormAnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormAnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventFormAnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventFormAnswerCountAggregateOutputType> | number;
                };
            };
        };
        EventTeam: {
            payload: Prisma.$EventTeamPayload<ExtArgs>;
            fields: Prisma.EventTeamFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EventTeamFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EventTeamFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>;
                };
                findFirst: {
                    args: Prisma.EventTeamFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EventTeamFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>;
                };
                findMany: {
                    args: Prisma.EventTeamFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>[];
                };
                create: {
                    args: Prisma.EventTeamCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>;
                };
                createMany: {
                    args: Prisma.EventTeamCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EventTeamCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>[];
                };
                delete: {
                    args: Prisma.EventTeamDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>;
                };
                update: {
                    args: Prisma.EventTeamUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>;
                };
                deleteMany: {
                    args: Prisma.EventTeamDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EventTeamUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EventTeamUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>[];
                };
                upsert: {
                    args: Prisma.EventTeamUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EventTeamPayload>;
                };
                aggregate: {
                    args: Prisma.EventTeamAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEventTeam>;
                };
                groupBy: {
                    args: Prisma.EventTeamGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventTeamGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EventTeamCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventTeamCountAggregateOutputType> | number;
                };
            };
        };
        Announcement: {
            payload: Prisma.$AnnouncementPayload<ExtArgs>;
            fields: Prisma.AnnouncementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findFirst: {
                    args: Prisma.AnnouncementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findMany: {
                    args: Prisma.AnnouncementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                create: {
                    args: Prisma.AnnouncementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                createMany: {
                    args: Prisma.AnnouncementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                delete: {
                    args: Prisma.AnnouncementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                update: {
                    args: Prisma.AnnouncementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                deleteMany: {
                    args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                upsert: {
                    args: Prisma.AnnouncementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                aggregate: {
                    args: Prisma.AnnouncementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnnouncement>;
                };
                groupBy: {
                    args: Prisma.AnnouncementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnnouncementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementCountAggregateOutputType> | number;
                };
            };
        };
        GalleryAlbum: {
            payload: Prisma.$GalleryAlbumPayload<ExtArgs>;
            fields: Prisma.GalleryAlbumFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GalleryAlbumFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GalleryAlbumFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>;
                };
                findFirst: {
                    args: Prisma.GalleryAlbumFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GalleryAlbumFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>;
                };
                findMany: {
                    args: Prisma.GalleryAlbumFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>[];
                };
                create: {
                    args: Prisma.GalleryAlbumCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>;
                };
                createMany: {
                    args: Prisma.GalleryAlbumCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GalleryAlbumCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>[];
                };
                delete: {
                    args: Prisma.GalleryAlbumDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>;
                };
                update: {
                    args: Prisma.GalleryAlbumUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>;
                };
                deleteMany: {
                    args: Prisma.GalleryAlbumDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GalleryAlbumUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GalleryAlbumUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>[];
                };
                upsert: {
                    args: Prisma.GalleryAlbumUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryAlbumPayload>;
                };
                aggregate: {
                    args: Prisma.GalleryAlbumAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGalleryAlbum>;
                };
                groupBy: {
                    args: Prisma.GalleryAlbumGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GalleryAlbumGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GalleryAlbumCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GalleryAlbumCountAggregateOutputType> | number;
                };
            };
        };
        GalleryImage: {
            payload: Prisma.$GalleryImagePayload<ExtArgs>;
            fields: Prisma.GalleryImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GalleryImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GalleryImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>;
                };
                findFirst: {
                    args: Prisma.GalleryImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GalleryImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>;
                };
                findMany: {
                    args: Prisma.GalleryImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>[];
                };
                create: {
                    args: Prisma.GalleryImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>;
                };
                createMany: {
                    args: Prisma.GalleryImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GalleryImageCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>[];
                };
                delete: {
                    args: Prisma.GalleryImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>;
                };
                update: {
                    args: Prisma.GalleryImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>;
                };
                deleteMany: {
                    args: Prisma.GalleryImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GalleryImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GalleryImageUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>[];
                };
                upsert: {
                    args: Prisma.GalleryImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GalleryImagePayload>;
                };
                aggregate: {
                    args: Prisma.GalleryImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGalleryImage>;
                };
                groupBy: {
                    args: Prisma.GalleryImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GalleryImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GalleryImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GalleryImageCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
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
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'MembershipStatus'
 */
export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>;
/**
 * Reference to a field of type 'MembershipStatus[]'
 */
export type ListEnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus[]'>;
/**
 * Reference to a field of type 'Visibility'
 */
export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>;
/**
 * Reference to a field of type 'Visibility[]'
 */
export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>;
/**
 * Reference to a field of type 'BranchPosition'
 */
export type EnumBranchPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchPosition'>;
/**
 * Reference to a field of type 'BranchPosition[]'
 */
export type ListEnumBranchPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BranchPosition[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'EventStatus'
 */
export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>;
/**
 * Reference to a field of type 'EventStatus[]'
 */
export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>;
/**
 * Reference to a field of type 'EventAccess'
 */
export type EnumEventAccessFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventAccess'>;
/**
 * Reference to a field of type 'EventAccess[]'
 */
export type ListEnumEventAccessFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventAccess[]'>;
/**
 * Reference to a field of type 'EventRegistrationTemplate'
 */
export type EnumEventRegistrationTemplateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventRegistrationTemplate'>;
/**
 * Reference to a field of type 'EventRegistrationTemplate[]'
 */
export type ListEnumEventRegistrationTemplateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventRegistrationTemplate[]'>;
/**
 * Reference to a field of type 'EventParticipationType'
 */
export type EnumEventParticipationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventParticipationType'>;
/**
 * Reference to a field of type 'EventParticipationType[]'
 */
export type ListEnumEventParticipationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventParticipationType[]'>;
/**
 * Reference to a field of type 'ApprovalStatus'
 */
export type EnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus'>;
/**
 * Reference to a field of type 'ApprovalStatus[]'
 */
export type ListEnumApprovalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalStatus[]'>;
/**
 * Reference to a field of type 'RegistrationStatus'
 */
export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>;
/**
 * Reference to a field of type 'RegistrationStatus[]'
 */
export type ListEnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus[]'>;
/**
 * Reference to a field of type 'EventFormStatus'
 */
export type EnumEventFormStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventFormStatus'>;
/**
 * Reference to a field of type 'EventFormStatus[]'
 */
export type ListEnumEventFormStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventFormStatus[]'>;
/**
 * Reference to a field of type 'EventFormFieldType'
 */
export type EnumEventFormFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventFormFieldType'>;
/**
 * Reference to a field of type 'EventFormFieldType[]'
 */
export type ListEnumEventFormFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventFormFieldType[]'>;
/**
 * Reference to a field of type 'EventFormFieldScope'
 */
export type EnumEventFormFieldScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventFormFieldScope'>;
/**
 * Reference to a field of type 'EventFormFieldScope[]'
 */
export type ListEnumEventFormFieldScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventFormFieldScope[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'NotificationType'
 */
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
/**
 * Reference to a field of type 'NotificationType[]'
 */
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
/**
 * Reference to a field of type 'AuditAction'
 */
export type EnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction'>;
/**
 * Reference to a field of type 'AuditAction[]'
 */
export type ListEnumAuditActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuditAction[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    memberProfile?: Prisma.MemberProfileOmit;
    academicYear?: Prisma.AcademicYearOmit;
    branchLeadership?: Prisma.BranchLeadershipOmit;
    event?: Prisma.EventOmit;
    eventRegistration?: Prisma.EventRegistrationOmit;
    eventForm?: Prisma.EventFormOmit;
    eventFormField?: Prisma.EventFormFieldOmit;
    eventFormResponse?: Prisma.EventFormResponseOmit;
    eventFormAnswer?: Prisma.EventFormAnswerOmit;
    eventTeam?: Prisma.EventTeamOmit;
    announcement?: Prisma.AnnouncementOmit;
    galleryAlbum?: Prisma.GalleryAlbumOmit;
    galleryImage?: Prisma.GalleryImageOmit;
    notification?: Prisma.NotificationOmit;
    auditLog?: Prisma.AuditLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map