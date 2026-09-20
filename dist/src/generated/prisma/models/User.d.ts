import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    profileImageCloudinaryId: string | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    profileImageCloudinaryId: string | null;
    bio: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    firstName: number;
    lastName: number;
    phone: number;
    role: number;
    isActive: number;
    ieeeMembershipNumber: number;
    profileImage: number;
    profileImageCloudinaryId: number;
    bio: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    role?: true;
    isActive?: true;
    ieeeMembershipNumber?: true;
    profileImage?: true;
    profileImageCloudinaryId?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    role?: true;
    isActive?: true;
    ieeeMembershipNumber?: true;
    profileImage?: true;
    profileImageCloudinaryId?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    phone?: true;
    role?: true;
    isActive?: true;
    ieeeMembershipNumber?: true;
    profileImage?: true;
    profileImageCloudinaryId?: true;
    bio?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: $Enums.UserRole;
    isActive: boolean;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    profileImageCloudinaryId: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    ieeeMembershipNumber?: Prisma.StringNullableFilter<"User"> | string | null;
    profileImage?: Prisma.StringNullableFilter<"User"> | string | null;
    profileImageCloudinaryId?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    memberProfile?: Prisma.XOR<Prisma.MemberProfileNullableScalarRelationFilter, Prisma.MemberProfileWhereInput> | null;
    leadershipPositions?: Prisma.BranchLeadershipListRelationFilter;
    eventRegistrations?: Prisma.EventRegistrationListRelationFilter;
    createdEvents?: Prisma.EventListRelationFilter;
    announcementsCreated?: Prisma.AnnouncementListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    ieeeMembershipNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileImageCloudinaryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    memberProfile?: Prisma.MemberProfileOrderByWithRelationInput;
    leadershipPositions?: Prisma.BranchLeadershipOrderByRelationAggregateInput;
    eventRegistrations?: Prisma.EventRegistrationOrderByRelationAggregateInput;
    createdEvents?: Prisma.EventOrderByRelationAggregateInput;
    announcementsCreated?: Prisma.AnnouncementOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    ieeeMembershipNumber?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringNullableFilter<"User"> | string | null;
    phone?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    profileImage?: Prisma.StringNullableFilter<"User"> | string | null;
    profileImageCloudinaryId?: Prisma.StringNullableFilter<"User"> | string | null;
    bio?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    memberProfile?: Prisma.XOR<Prisma.MemberProfileNullableScalarRelationFilter, Prisma.MemberProfileWhereInput> | null;
    leadershipPositions?: Prisma.BranchLeadershipListRelationFilter;
    eventRegistrations?: Prisma.EventRegistrationListRelationFilter;
    createdEvents?: Prisma.EventListRelationFilter;
    announcementsCreated?: Prisma.AnnouncementListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
}, "id" | "email" | "ieeeMembershipNumber">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    ieeeMembershipNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileImageCloudinaryId?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    ieeeMembershipNumber?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    profileImage?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    profileImageCloudinaryId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    ieeeMembershipNumber?: Prisma.SortOrder;
    profileImage?: Prisma.SortOrder;
    profileImageCloudinaryId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    ieeeMembershipNumber?: Prisma.SortOrder;
    profileImage?: Prisma.SortOrder;
    profileImageCloudinaryId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    ieeeMembershipNumber?: Prisma.SortOrder;
    profileImage?: Prisma.SortOrder;
    profileImageCloudinaryId?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutMemberProfileInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemberProfileInput, Prisma.UserUncheckedCreateWithoutMemberProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemberProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMemberProfileNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMemberProfileInput, Prisma.UserUncheckedCreateWithoutMemberProfileInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMemberProfileInput;
    upsert?: Prisma.UserUpsertWithoutMemberProfileInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMemberProfileInput, Prisma.UserUpdateWithoutMemberProfileInput>, Prisma.UserUncheckedUpdateWithoutMemberProfileInput>;
};
export type UserCreateNestedOneWithoutLeadershipPositionsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLeadershipPositionsInput, Prisma.UserUncheckedCreateWithoutLeadershipPositionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLeadershipPositionsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutLeadershipPositionsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLeadershipPositionsInput, Prisma.UserUncheckedCreateWithoutLeadershipPositionsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLeadershipPositionsInput;
    upsert?: Prisma.UserUpsertWithoutLeadershipPositionsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutLeadershipPositionsInput, Prisma.UserUpdateWithoutLeadershipPositionsInput>, Prisma.UserUncheckedUpdateWithoutLeadershipPositionsInput>;
};
export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCreatedEventsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedEventsInput;
    upsert?: Prisma.UserUpsertWithoutCreatedEventsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedEventsInput, Prisma.UserUpdateWithoutCreatedEventsInput>, Prisma.UserUncheckedUpdateWithoutCreatedEventsInput>;
};
export type UserCreateNestedOneWithoutEventRegistrationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventRegistrationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutEventRegistrationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEventRegistrationsInput;
    upsert?: Prisma.UserUpsertWithoutEventRegistrationsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEventRegistrationsInput, Prisma.UserUpdateWithoutEventRegistrationsInput>, Prisma.UserUncheckedUpdateWithoutEventRegistrationsInput>;
};
export type UserCreateNestedOneWithoutAnnouncementsCreatedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnnouncementsCreatedInput, Prisma.UserUncheckedCreateWithoutAnnouncementsCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnnouncementsCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAnnouncementsCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAnnouncementsCreatedInput, Prisma.UserUncheckedCreateWithoutAnnouncementsCreatedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAnnouncementsCreatedInput;
    upsert?: Prisma.UserUpsertWithoutAnnouncementsCreatedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAnnouncementsCreatedInput, Prisma.UserUpdateWithoutAnnouncementsCreatedInput>, Prisma.UserUncheckedUpdateWithoutAnnouncementsCreatedInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.UserUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.UserUpdateWithoutAuditLogsInput>, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserCreateWithoutMemberProfileInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMemberProfileInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMemberProfileInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMemberProfileInput, Prisma.UserUncheckedCreateWithoutMemberProfileInput>;
};
export type UserUpsertWithoutMemberProfileInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMemberProfileInput, Prisma.UserUncheckedUpdateWithoutMemberProfileInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMemberProfileInput, Prisma.UserUncheckedCreateWithoutMemberProfileInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMemberProfileInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMemberProfileInput, Prisma.UserUncheckedUpdateWithoutMemberProfileInput>;
};
export type UserUpdateWithoutMemberProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMemberProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutLeadershipPositionsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutLeadershipPositionsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutLeadershipPositionsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLeadershipPositionsInput, Prisma.UserUncheckedCreateWithoutLeadershipPositionsInput>;
};
export type UserUpsertWithoutLeadershipPositionsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutLeadershipPositionsInput, Prisma.UserUncheckedUpdateWithoutLeadershipPositionsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLeadershipPositionsInput, Prisma.UserUncheckedCreateWithoutLeadershipPositionsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutLeadershipPositionsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLeadershipPositionsInput, Prisma.UserUncheckedUpdateWithoutLeadershipPositionsInput>;
};
export type UserUpdateWithoutLeadershipPositionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutLeadershipPositionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCreatedEventsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
};
export type UserUpsertWithoutCreatedEventsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedEventsInput, Prisma.UserUncheckedUpdateWithoutCreatedEventsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedEventsInput, Prisma.UserUncheckedCreateWithoutCreatedEventsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedEventsInput, Prisma.UserUncheckedUpdateWithoutCreatedEventsInput>;
};
export type UserUpdateWithoutCreatedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutEventRegistrationsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutEventRegistrationsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutEventRegistrationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
};
export type UserUpsertWithoutEventRegistrationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEventRegistrationsInput, Prisma.UserUncheckedUpdateWithoutEventRegistrationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEventRegistrationsInput, Prisma.UserUncheckedCreateWithoutEventRegistrationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEventRegistrationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEventRegistrationsInput, Prisma.UserUncheckedUpdateWithoutEventRegistrationsInput>;
};
export type UserUpdateWithoutEventRegistrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutEventRegistrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAnnouncementsCreatedInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAnnouncementsCreatedInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAnnouncementsCreatedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnnouncementsCreatedInput, Prisma.UserUncheckedCreateWithoutAnnouncementsCreatedInput>;
};
export type UserUpsertWithoutAnnouncementsCreatedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAnnouncementsCreatedInput, Prisma.UserUncheckedUpdateWithoutAnnouncementsCreatedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAnnouncementsCreatedInput, Prisma.UserUncheckedCreateWithoutAnnouncementsCreatedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAnnouncementsCreatedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAnnouncementsCreatedInput, Prisma.UserUncheckedUpdateWithoutAnnouncementsCreatedInput>;
};
export type UserUpdateWithoutAnnouncementsCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAnnouncementsCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    isActive?: boolean;
    ieeeMembershipNumber?: string | null;
    profileImage?: string | null;
    profileImageCloudinaryId?: string | null;
    bio?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedCreateNestedOneWithoutUserInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedCreateNestedManyWithoutUserInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedCreateNestedManyWithoutUserInput;
    createdEvents?: Prisma.EventUncheckedCreateNestedManyWithoutCreatedByInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutCreatedByInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
};
export type UserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAuditLogsInput, Prisma.UserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAuditLogsInput, Prisma.UserUncheckedUpdateWithoutAuditLogsInput>;
};
export type UserUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ieeeMembershipNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImageCloudinaryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberProfile?: Prisma.MemberProfileUncheckedUpdateOneWithoutUserNestedInput;
    leadershipPositions?: Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput;
    eventRegistrations?: Prisma.EventRegistrationUncheckedUpdateManyWithoutUserNestedInput;
    createdEvents?: Prisma.EventUncheckedUpdateManyWithoutCreatedByNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutCreatedByNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    leadershipPositions: number;
    eventRegistrations: number;
    createdEvents: number;
    announcementsCreated: number;
    notifications: number;
    auditLogs: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    leadershipPositions?: boolean | UserCountOutputTypeCountLeadershipPositionsArgs;
    eventRegistrations?: boolean | UserCountOutputTypeCountEventRegistrationsArgs;
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs;
    announcementsCreated?: boolean | UserCountOutputTypeCountAnnouncementsCreatedArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountLeadershipPositionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BranchLeadershipWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountEventRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventRegistrationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAnnouncementsCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    role?: boolean;
    isActive?: boolean;
    ieeeMembershipNumber?: boolean;
    profileImage?: boolean;
    profileImageCloudinaryId?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    memberProfile?: boolean | Prisma.User$memberProfileArgs<ExtArgs>;
    leadershipPositions?: boolean | Prisma.User$leadershipPositionsArgs<ExtArgs>;
    eventRegistrations?: boolean | Prisma.User$eventRegistrationsArgs<ExtArgs>;
    createdEvents?: boolean | Prisma.User$createdEventsArgs<ExtArgs>;
    announcementsCreated?: boolean | Prisma.User$announcementsCreatedArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    role?: boolean;
    isActive?: boolean;
    ieeeMembershipNumber?: boolean;
    profileImage?: boolean;
    profileImageCloudinaryId?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    role?: boolean;
    isActive?: boolean;
    ieeeMembershipNumber?: boolean;
    profileImage?: boolean;
    profileImageCloudinaryId?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    phone?: boolean;
    role?: boolean;
    isActive?: boolean;
    ieeeMembershipNumber?: boolean;
    profileImage?: boolean;
    profileImageCloudinaryId?: boolean;
    bio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phone" | "role" | "isActive" | "ieeeMembershipNumber" | "profileImage" | "profileImageCloudinaryId" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberProfile?: boolean | Prisma.User$memberProfileArgs<ExtArgs>;
    leadershipPositions?: boolean | Prisma.User$leadershipPositionsArgs<ExtArgs>;
    eventRegistrations?: boolean | Prisma.User$eventRegistrationsArgs<ExtArgs>;
    createdEvents?: boolean | Prisma.User$createdEventsArgs<ExtArgs>;
    announcementsCreated?: boolean | Prisma.User$announcementsCreatedArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.User$auditLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        memberProfile: Prisma.$MemberProfilePayload<ExtArgs> | null;
        leadershipPositions: Prisma.$BranchLeadershipPayload<ExtArgs>[];
        eventRegistrations: Prisma.$EventRegistrationPayload<ExtArgs>[];
        createdEvents: Prisma.$EventPayload<ExtArgs>[];
        announcementsCreated: Prisma.$AnnouncementPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: $Enums.UserRole;
        isActive: boolean;
        ieeeMembershipNumber: string | null;
        profileImage: string | null;
        profileImageCloudinaryId: string | null;
        bio: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memberProfile<T extends Prisma.User$memberProfileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$memberProfileArgs<ExtArgs>>): Prisma.Prisma__MemberProfileClient<runtime.Types.Result.GetResult<Prisma.$MemberProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    leadershipPositions<T extends Prisma.User$leadershipPositionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$leadershipPositionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    eventRegistrations<T extends Prisma.User$eventRegistrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$eventRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdEvents<T extends Prisma.User$createdEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    announcementsCreated<T extends Prisma.User$announcementsCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$announcementsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.User$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly phone: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly ieeeMembershipNumber: Prisma.FieldRef<"User", 'String'>;
    readonly profileImage: Prisma.FieldRef<"User", 'String'>;
    readonly profileImageCloudinaryId: Prisma.FieldRef<"User", 'String'>;
    readonly bio: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.memberProfile
 */
export type User$memberProfileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberProfile
     */
    select?: Prisma.MemberProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MemberProfile
     */
    omit?: Prisma.MemberProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MemberProfileInclude<ExtArgs> | null;
    where?: Prisma.MemberProfileWhereInput;
};
/**
 * User.leadershipPositions
 */
export type User$leadershipPositionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchLeadership
     */
    select?: Prisma.BranchLeadershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BranchLeadership
     */
    omit?: Prisma.BranchLeadershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BranchLeadershipInclude<ExtArgs> | null;
    where?: Prisma.BranchLeadershipWhereInput;
    orderBy?: Prisma.BranchLeadershipOrderByWithRelationInput | Prisma.BranchLeadershipOrderByWithRelationInput[];
    cursor?: Prisma.BranchLeadershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BranchLeadershipScalarFieldEnum | Prisma.BranchLeadershipScalarFieldEnum[];
};
/**
 * User.eventRegistrations
 */
export type User$eventRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventRegistration
     */
    select?: Prisma.EventRegistrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventRegistration
     */
    omit?: Prisma.EventRegistrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventRegistrationInclude<ExtArgs> | null;
    where?: Prisma.EventRegistrationWhereInput;
    orderBy?: Prisma.EventRegistrationOrderByWithRelationInput | Prisma.EventRegistrationOrderByWithRelationInput[];
    cursor?: Prisma.EventRegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventRegistrationScalarFieldEnum | Prisma.EventRegistrationScalarFieldEnum[];
};
/**
 * User.createdEvents
 */
export type User$createdEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: Prisma.EventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Event
     */
    omit?: Prisma.EventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
/**
 * User.announcementsCreated
 */
export type User$announcementsCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Announcement
     */
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementScalarFieldEnum | Prisma.AnnouncementScalarFieldEnum[];
};
/**
 * User.notifications
 */
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * User.auditLogs
 */
export type User$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
//# sourceMappingURL=User.d.ts.map