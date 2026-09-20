import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model BranchLeadership
 *
 */
export type BranchLeadershipModel = runtime.Types.Result.DefaultSelection<Prisma.$BranchLeadershipPayload>;
export type AggregateBranchLeadership = {
    _count: BranchLeadershipCountAggregateOutputType | null;
    _min: BranchLeadershipMinAggregateOutputType | null;
    _max: BranchLeadershipMaxAggregateOutputType | null;
};
export type BranchLeadershipMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    position: $Enums.BranchPosition | null;
    academicYearId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BranchLeadershipMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    position: $Enums.BranchPosition | null;
    academicYearId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BranchLeadershipCountAggregateOutputType = {
    id: number;
    userId: number;
    position: number;
    academicYearId: number;
    startDate: number;
    endDate: number;
    isCurrent: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BranchLeadershipMinAggregateInputType = {
    id?: true;
    userId?: true;
    position?: true;
    academicYearId?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BranchLeadershipMaxAggregateInputType = {
    id?: true;
    userId?: true;
    position?: true;
    academicYearId?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BranchLeadershipCountAggregateInputType = {
    id?: true;
    userId?: true;
    position?: true;
    academicYearId?: true;
    startDate?: true;
    endDate?: true;
    isCurrent?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BranchLeadershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BranchLeadership to aggregate.
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BranchLeaderships to fetch.
     */
    orderBy?: Prisma.BranchLeadershipOrderByWithRelationInput | Prisma.BranchLeadershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.BranchLeadershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BranchLeaderships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BranchLeaderships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BranchLeaderships
    **/
    _count?: true | BranchLeadershipCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: BranchLeadershipMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: BranchLeadershipMaxAggregateInputType;
};
export type GetBranchLeadershipAggregateType<T extends BranchLeadershipAggregateArgs> = {
    [P in keyof T & keyof AggregateBranchLeadership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBranchLeadership[P]> : Prisma.GetScalarType<T[P], AggregateBranchLeadership[P]>;
};
export type BranchLeadershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BranchLeadershipWhereInput;
    orderBy?: Prisma.BranchLeadershipOrderByWithAggregationInput | Prisma.BranchLeadershipOrderByWithAggregationInput[];
    by: Prisma.BranchLeadershipScalarFieldEnum[] | Prisma.BranchLeadershipScalarFieldEnum;
    having?: Prisma.BranchLeadershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BranchLeadershipCountAggregateInputType | true;
    _min?: BranchLeadershipMinAggregateInputType;
    _max?: BranchLeadershipMaxAggregateInputType;
};
export type BranchLeadershipGroupByOutputType = {
    id: string;
    userId: string;
    position: $Enums.BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BranchLeadershipCountAggregateOutputType | null;
    _min: BranchLeadershipMinAggregateOutputType | null;
    _max: BranchLeadershipMaxAggregateOutputType | null;
};
export type GetBranchLeadershipGroupByPayload<T extends BranchLeadershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BranchLeadershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BranchLeadershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BranchLeadershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BranchLeadershipGroupByOutputType[P]>;
}>>;
export type BranchLeadershipWhereInput = {
    AND?: Prisma.BranchLeadershipWhereInput | Prisma.BranchLeadershipWhereInput[];
    OR?: Prisma.BranchLeadershipWhereInput[];
    NOT?: Prisma.BranchLeadershipWhereInput | Prisma.BranchLeadershipWhereInput[];
    id?: Prisma.StringFilter<"BranchLeadership"> | string;
    userId?: Prisma.StringFilter<"BranchLeadership"> | string;
    position?: Prisma.EnumBranchPositionFilter<"BranchLeadership"> | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFilter<"BranchLeadership"> | string;
    startDate?: Prisma.DateTimeNullableFilter<"BranchLeadership"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"BranchLeadership"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"BranchLeadership"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BranchLeadership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BranchLeadership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
};
export type BranchLeadershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    academicYear?: Prisma.AcademicYearOrderByWithRelationInput;
};
export type BranchLeadershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    position_academicYearId?: Prisma.BranchLeadershipPositionAcademicYearIdCompoundUniqueInput;
    AND?: Prisma.BranchLeadershipWhereInput | Prisma.BranchLeadershipWhereInput[];
    OR?: Prisma.BranchLeadershipWhereInput[];
    NOT?: Prisma.BranchLeadershipWhereInput | Prisma.BranchLeadershipWhereInput[];
    userId?: Prisma.StringFilter<"BranchLeadership"> | string;
    position?: Prisma.EnumBranchPositionFilter<"BranchLeadership"> | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFilter<"BranchLeadership"> | string;
    startDate?: Prisma.DateTimeNullableFilter<"BranchLeadership"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"BranchLeadership"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"BranchLeadership"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BranchLeadership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BranchLeadership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    academicYear?: Prisma.XOR<Prisma.AcademicYearScalarRelationFilter, Prisma.AcademicYearWhereInput>;
}, "id" | "position_academicYearId">;
export type BranchLeadershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BranchLeadershipCountOrderByAggregateInput;
    _max?: Prisma.BranchLeadershipMaxOrderByAggregateInput;
    _min?: Prisma.BranchLeadershipMinOrderByAggregateInput;
};
export type BranchLeadershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.BranchLeadershipScalarWhereWithAggregatesInput | Prisma.BranchLeadershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.BranchLeadershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BranchLeadershipScalarWhereWithAggregatesInput | Prisma.BranchLeadershipScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BranchLeadership"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"BranchLeadership"> | string;
    position?: Prisma.EnumBranchPositionWithAggregatesFilter<"BranchLeadership"> | $Enums.BranchPosition;
    academicYearId?: Prisma.StringWithAggregatesFilter<"BranchLeadership"> | string;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"BranchLeadership"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"BranchLeadership"> | Date | string | null;
    isCurrent?: Prisma.BoolWithAggregatesFilter<"BranchLeadership"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BranchLeadership"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BranchLeadership"> | Date | string;
};
export type BranchLeadershipCreateInput = {
    id?: string;
    position: $Enums.BranchPosition;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLeadershipPositionsInput;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutLeadershipPositionsInput;
};
export type BranchLeadershipUncheckedCreateInput = {
    id?: string;
    userId: string;
    position: $Enums.BranchPosition;
    academicYearId: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BranchLeadershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLeadershipPositionsNestedInput;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutLeadershipPositionsNestedInput;
};
export type BranchLeadershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipCreateManyInput = {
    id?: string;
    userId: string;
    position: $Enums.BranchPosition;
    academicYearId: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BranchLeadershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipListRelationFilter = {
    every?: Prisma.BranchLeadershipWhereInput;
    some?: Prisma.BranchLeadershipWhereInput;
    none?: Prisma.BranchLeadershipWhereInput;
};
export type BranchLeadershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BranchLeadershipPositionAcademicYearIdCompoundUniqueInput = {
    position: $Enums.BranchPosition;
    academicYearId: string;
};
export type BranchLeadershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BranchLeadershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BranchLeadershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    academicYearId?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isCurrent?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BranchLeadershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutUserInput, Prisma.BranchLeadershipUncheckedCreateWithoutUserInput> | Prisma.BranchLeadershipCreateWithoutUserInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutUserInput | Prisma.BranchLeadershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BranchLeadershipCreateManyUserInputEnvelope;
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
};
export type BranchLeadershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutUserInput, Prisma.BranchLeadershipUncheckedCreateWithoutUserInput> | Prisma.BranchLeadershipCreateWithoutUserInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutUserInput | Prisma.BranchLeadershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BranchLeadershipCreateManyUserInputEnvelope;
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
};
export type BranchLeadershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutUserInput, Prisma.BranchLeadershipUncheckedCreateWithoutUserInput> | Prisma.BranchLeadershipCreateWithoutUserInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutUserInput | Prisma.BranchLeadershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutUserInput | Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BranchLeadershipCreateManyUserInputEnvelope;
    set?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    disconnect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    delete?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    update?: Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutUserInput | Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BranchLeadershipUpdateManyWithWhereWithoutUserInput | Prisma.BranchLeadershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BranchLeadershipScalarWhereInput | Prisma.BranchLeadershipScalarWhereInput[];
};
export type BranchLeadershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutUserInput, Prisma.BranchLeadershipUncheckedCreateWithoutUserInput> | Prisma.BranchLeadershipCreateWithoutUserInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutUserInput | Prisma.BranchLeadershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutUserInput | Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BranchLeadershipCreateManyUserInputEnvelope;
    set?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    disconnect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    delete?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    update?: Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutUserInput | Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BranchLeadershipUpdateManyWithWhereWithoutUserInput | Prisma.BranchLeadershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BranchLeadershipScalarWhereInput | Prisma.BranchLeadershipScalarWhereInput[];
};
export type BranchLeadershipCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput> | Prisma.BranchLeadershipCreateWithoutAcademicYearInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput | Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.BranchLeadershipCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
};
export type BranchLeadershipUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput> | Prisma.BranchLeadershipCreateWithoutAcademicYearInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput | Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput[];
    createMany?: Prisma.BranchLeadershipCreateManyAcademicYearInputEnvelope;
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
};
export type BranchLeadershipUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput> | Prisma.BranchLeadershipCreateWithoutAcademicYearInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput | Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.BranchLeadershipCreateManyAcademicYearInputEnvelope;
    set?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    disconnect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    delete?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    update?: Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.BranchLeadershipUpdateManyWithWhereWithoutAcademicYearInput | Prisma.BranchLeadershipUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.BranchLeadershipScalarWhereInput | Prisma.BranchLeadershipScalarWhereInput[];
};
export type BranchLeadershipUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput> | Prisma.BranchLeadershipCreateWithoutAcademicYearInput[] | Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput[];
    connectOrCreate?: Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput | Prisma.BranchLeadershipCreateOrConnectWithoutAcademicYearInput[];
    upsert?: Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutAcademicYearInput | Prisma.BranchLeadershipUpsertWithWhereUniqueWithoutAcademicYearInput[];
    createMany?: Prisma.BranchLeadershipCreateManyAcademicYearInputEnvelope;
    set?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    disconnect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    delete?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    connect?: Prisma.BranchLeadershipWhereUniqueInput | Prisma.BranchLeadershipWhereUniqueInput[];
    update?: Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutAcademicYearInput | Prisma.BranchLeadershipUpdateWithWhereUniqueWithoutAcademicYearInput[];
    updateMany?: Prisma.BranchLeadershipUpdateManyWithWhereWithoutAcademicYearInput | Prisma.BranchLeadershipUpdateManyWithWhereWithoutAcademicYearInput[];
    deleteMany?: Prisma.BranchLeadershipScalarWhereInput | Prisma.BranchLeadershipScalarWhereInput[];
};
export type EnumBranchPositionFieldUpdateOperationsInput = {
    set?: $Enums.BranchPosition;
};
export type BranchLeadershipCreateWithoutUserInput = {
    id?: string;
    position: $Enums.BranchPosition;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    academicYear: Prisma.AcademicYearCreateNestedOneWithoutLeadershipPositionsInput;
};
export type BranchLeadershipUncheckedCreateWithoutUserInput = {
    id?: string;
    position: $Enums.BranchPosition;
    academicYearId: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BranchLeadershipCreateOrConnectWithoutUserInput = {
    where: Prisma.BranchLeadershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutUserInput, Prisma.BranchLeadershipUncheckedCreateWithoutUserInput>;
};
export type BranchLeadershipCreateManyUserInputEnvelope = {
    data: Prisma.BranchLeadershipCreateManyUserInput | Prisma.BranchLeadershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BranchLeadershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BranchLeadershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.BranchLeadershipUpdateWithoutUserInput, Prisma.BranchLeadershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutUserInput, Prisma.BranchLeadershipUncheckedCreateWithoutUserInput>;
};
export type BranchLeadershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BranchLeadershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateWithoutUserInput, Prisma.BranchLeadershipUncheckedUpdateWithoutUserInput>;
};
export type BranchLeadershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BranchLeadershipScalarWhereInput;
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateManyMutationInput, Prisma.BranchLeadershipUncheckedUpdateManyWithoutUserInput>;
};
export type BranchLeadershipScalarWhereInput = {
    AND?: Prisma.BranchLeadershipScalarWhereInput | Prisma.BranchLeadershipScalarWhereInput[];
    OR?: Prisma.BranchLeadershipScalarWhereInput[];
    NOT?: Prisma.BranchLeadershipScalarWhereInput | Prisma.BranchLeadershipScalarWhereInput[];
    id?: Prisma.StringFilter<"BranchLeadership"> | string;
    userId?: Prisma.StringFilter<"BranchLeadership"> | string;
    position?: Prisma.EnumBranchPositionFilter<"BranchLeadership"> | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFilter<"BranchLeadership"> | string;
    startDate?: Prisma.DateTimeNullableFilter<"BranchLeadership"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"BranchLeadership"> | Date | string | null;
    isCurrent?: Prisma.BoolFilter<"BranchLeadership"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BranchLeadership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BranchLeadership"> | Date | string;
};
export type BranchLeadershipCreateWithoutAcademicYearInput = {
    id?: string;
    position: $Enums.BranchPosition;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutLeadershipPositionsInput;
};
export type BranchLeadershipUncheckedCreateWithoutAcademicYearInput = {
    id?: string;
    userId: string;
    position: $Enums.BranchPosition;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BranchLeadershipCreateOrConnectWithoutAcademicYearInput = {
    where: Prisma.BranchLeadershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput>;
};
export type BranchLeadershipCreateManyAcademicYearInputEnvelope = {
    data: Prisma.BranchLeadershipCreateManyAcademicYearInput | Prisma.BranchLeadershipCreateManyAcademicYearInput[];
    skipDuplicates?: boolean;
};
export type BranchLeadershipUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.BranchLeadershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.BranchLeadershipUpdateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedUpdateWithoutAcademicYearInput>;
    create: Prisma.XOR<Prisma.BranchLeadershipCreateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedCreateWithoutAcademicYearInput>;
};
export type BranchLeadershipUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: Prisma.BranchLeadershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateWithoutAcademicYearInput, Prisma.BranchLeadershipUncheckedUpdateWithoutAcademicYearInput>;
};
export type BranchLeadershipUpdateManyWithWhereWithoutAcademicYearInput = {
    where: Prisma.BranchLeadershipScalarWhereInput;
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateManyMutationInput, Prisma.BranchLeadershipUncheckedUpdateManyWithoutAcademicYearInput>;
};
export type BranchLeadershipCreateManyUserInput = {
    id?: string;
    position: $Enums.BranchPosition;
    academicYearId: string;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BranchLeadershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    academicYear?: Prisma.AcademicYearUpdateOneRequiredWithoutLeadershipPositionsNestedInput;
};
export type BranchLeadershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    academicYearId?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipCreateManyAcademicYearInput = {
    id?: string;
    userId: string;
    position: $Enums.BranchPosition;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    isCurrent?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BranchLeadershipUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutLeadershipPositionsNestedInput;
};
export type BranchLeadershipUncheckedUpdateWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipUncheckedUpdateManyWithoutAcademicYearInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.EnumBranchPositionFieldUpdateOperationsInput | $Enums.BranchPosition;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    isCurrent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BranchLeadershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    position?: boolean;
    academicYearId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branchLeadership"]>;
export type BranchLeadershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    position?: boolean;
    academicYearId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branchLeadership"]>;
export type BranchLeadershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    position?: boolean;
    academicYearId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["branchLeadership"]>;
export type BranchLeadershipSelectScalar = {
    id?: boolean;
    userId?: boolean;
    position?: boolean;
    academicYearId?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isCurrent?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BranchLeadershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "position" | "academicYearId" | "startDate" | "endDate" | "isCurrent" | "createdAt" | "updatedAt", ExtArgs["result"]["branchLeadership"]>;
export type BranchLeadershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type BranchLeadershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type BranchLeadershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    academicYear?: boolean | Prisma.AcademicYearDefaultArgs<ExtArgs>;
};
export type $BranchLeadershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BranchLeadership";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        academicYear: Prisma.$AcademicYearPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        position: $Enums.BranchPosition;
        academicYearId: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["branchLeadership"]>;
    composites: {};
};
export type BranchLeadershipGetPayload<S extends boolean | null | undefined | BranchLeadershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload, S>;
export type BranchLeadershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BranchLeadershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BranchLeadershipCountAggregateInputType | true;
};
export interface BranchLeadershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BranchLeadership'];
        meta: {
            name: 'BranchLeadership';
        };
    };
    /**
     * Find zero or one BranchLeadership that matches the filter.
     * @param {BranchLeadershipFindUniqueArgs} args - Arguments to find a BranchLeadership
     * @example
     * // Get one BranchLeadership
     * const branchLeadership = await prisma.branchLeadership.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchLeadershipFindUniqueArgs>(args: Prisma.SelectSubset<T, BranchLeadershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one BranchLeadership that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchLeadershipFindUniqueOrThrowArgs} args - Arguments to find a BranchLeadership
     * @example
     * // Get one BranchLeadership
     * const branchLeadership = await prisma.branchLeadership.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchLeadershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BranchLeadershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BranchLeadership that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipFindFirstArgs} args - Arguments to find a BranchLeadership
     * @example
     * // Get one BranchLeadership
     * const branchLeadership = await prisma.branchLeadership.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchLeadershipFindFirstArgs>(args?: Prisma.SelectSubset<T, BranchLeadershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first BranchLeadership that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipFindFirstOrThrowArgs} args - Arguments to find a BranchLeadership
     * @example
     * // Get one BranchLeadership
     * const branchLeadership = await prisma.branchLeadership.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchLeadershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BranchLeadershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more BranchLeaderships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchLeaderships
     * const branchLeaderships = await prisma.branchLeadership.findMany()
     *
     * // Get first 10 BranchLeaderships
     * const branchLeaderships = await prisma.branchLeadership.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const branchLeadershipWithIdOnly = await prisma.branchLeadership.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BranchLeadershipFindManyArgs>(args?: Prisma.SelectSubset<T, BranchLeadershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a BranchLeadership.
     * @param {BranchLeadershipCreateArgs} args - Arguments to create a BranchLeadership.
     * @example
     * // Create one BranchLeadership
     * const BranchLeadership = await prisma.branchLeadership.create({
     *   data: {
     *     // ... data to create a BranchLeadership
     *   }
     * })
     *
     */
    create<T extends BranchLeadershipCreateArgs>(args: Prisma.SelectSubset<T, BranchLeadershipCreateArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many BranchLeaderships.
     * @param {BranchLeadershipCreateManyArgs} args - Arguments to create many BranchLeaderships.
     * @example
     * // Create many BranchLeaderships
     * const branchLeadership = await prisma.branchLeadership.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BranchLeadershipCreateManyArgs>(args?: Prisma.SelectSubset<T, BranchLeadershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many BranchLeaderships and returns the data saved in the database.
     * @param {BranchLeadershipCreateManyAndReturnArgs} args - Arguments to create many BranchLeaderships.
     * @example
     * // Create many BranchLeaderships
     * const branchLeadership = await prisma.branchLeadership.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BranchLeaderships and only return the `id`
     * const branchLeadershipWithIdOnly = await prisma.branchLeadership.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BranchLeadershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BranchLeadershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a BranchLeadership.
     * @param {BranchLeadershipDeleteArgs} args - Arguments to delete one BranchLeadership.
     * @example
     * // Delete one BranchLeadership
     * const BranchLeadership = await prisma.branchLeadership.delete({
     *   where: {
     *     // ... filter to delete one BranchLeadership
     *   }
     * })
     *
     */
    delete<T extends BranchLeadershipDeleteArgs>(args: Prisma.SelectSubset<T, BranchLeadershipDeleteArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one BranchLeadership.
     * @param {BranchLeadershipUpdateArgs} args - Arguments to update one BranchLeadership.
     * @example
     * // Update one BranchLeadership
     * const branchLeadership = await prisma.branchLeadership.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BranchLeadershipUpdateArgs>(args: Prisma.SelectSubset<T, BranchLeadershipUpdateArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more BranchLeaderships.
     * @param {BranchLeadershipDeleteManyArgs} args - Arguments to filter BranchLeaderships to delete.
     * @example
     * // Delete a few BranchLeaderships
     * const { count } = await prisma.branchLeadership.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BranchLeadershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, BranchLeadershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BranchLeaderships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchLeaderships
     * const branchLeadership = await prisma.branchLeadership.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BranchLeadershipUpdateManyArgs>(args: Prisma.SelectSubset<T, BranchLeadershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more BranchLeaderships and returns the data updated in the database.
     * @param {BranchLeadershipUpdateManyAndReturnArgs} args - Arguments to update many BranchLeaderships.
     * @example
     * // Update many BranchLeaderships
     * const branchLeadership = await prisma.branchLeadership.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BranchLeaderships and only return the `id`
     * const branchLeadershipWithIdOnly = await prisma.branchLeadership.updateManyAndReturn({
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
    updateManyAndReturn<T extends BranchLeadershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BranchLeadershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one BranchLeadership.
     * @param {BranchLeadershipUpsertArgs} args - Arguments to update or create a BranchLeadership.
     * @example
     * // Update or create a BranchLeadership
     * const branchLeadership = await prisma.branchLeadership.upsert({
     *   create: {
     *     // ... data to create a BranchLeadership
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchLeadership we want to update
     *   }
     * })
     */
    upsert<T extends BranchLeadershipUpsertArgs>(args: Prisma.SelectSubset<T, BranchLeadershipUpsertArgs<ExtArgs>>): Prisma.Prisma__BranchLeadershipClient<runtime.Types.Result.GetResult<Prisma.$BranchLeadershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of BranchLeaderships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipCountArgs} args - Arguments to filter BranchLeaderships to count.
     * @example
     * // Count the number of BranchLeaderships
     * const count = await prisma.branchLeadership.count({
     *   where: {
     *     // ... the filter for the BranchLeaderships we want to count
     *   }
     * })
    **/
    count<T extends BranchLeadershipCountArgs>(args?: Prisma.Subset<T, BranchLeadershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BranchLeadershipCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a BranchLeadership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchLeadershipAggregateArgs>(args: Prisma.Subset<T, BranchLeadershipAggregateArgs>): Prisma.PrismaPromise<GetBranchLeadershipAggregateType<T>>;
    /**
     * Group by BranchLeadership.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchLeadershipGroupByArgs} args - Group by arguments.
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
    groupBy<T extends BranchLeadershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BranchLeadershipGroupByArgs['orderBy'];
    } : {
        orderBy?: BranchLeadershipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BranchLeadershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchLeadershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BranchLeadership model
     */
    readonly fields: BranchLeadershipFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for BranchLeadership.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__BranchLeadershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    academicYear<T extends Prisma.AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AcademicYearDefaultArgs<ExtArgs>>): Prisma.Prisma__AcademicYearClient<runtime.Types.Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the BranchLeadership model
 */
export interface BranchLeadershipFieldRefs {
    readonly id: Prisma.FieldRef<"BranchLeadership", 'String'>;
    readonly userId: Prisma.FieldRef<"BranchLeadership", 'String'>;
    readonly position: Prisma.FieldRef<"BranchLeadership", 'BranchPosition'>;
    readonly academicYearId: Prisma.FieldRef<"BranchLeadership", 'String'>;
    readonly startDate: Prisma.FieldRef<"BranchLeadership", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"BranchLeadership", 'DateTime'>;
    readonly isCurrent: Prisma.FieldRef<"BranchLeadership", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"BranchLeadership", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BranchLeadership", 'DateTime'>;
}
/**
 * BranchLeadership findUnique
 */
export type BranchLeadershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BranchLeadership to fetch.
     */
    where: Prisma.BranchLeadershipWhereUniqueInput;
};
/**
 * BranchLeadership findUniqueOrThrow
 */
export type BranchLeadershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BranchLeadership to fetch.
     */
    where: Prisma.BranchLeadershipWhereUniqueInput;
};
/**
 * BranchLeadership findFirst
 */
export type BranchLeadershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BranchLeadership to fetch.
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BranchLeaderships to fetch.
     */
    orderBy?: Prisma.BranchLeadershipOrderByWithRelationInput | Prisma.BranchLeadershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BranchLeaderships.
     */
    cursor?: Prisma.BranchLeadershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BranchLeaderships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BranchLeaderships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BranchLeaderships.
     */
    distinct?: Prisma.BranchLeadershipScalarFieldEnum | Prisma.BranchLeadershipScalarFieldEnum[];
};
/**
 * BranchLeadership findFirstOrThrow
 */
export type BranchLeadershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BranchLeadership to fetch.
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BranchLeaderships to fetch.
     */
    orderBy?: Prisma.BranchLeadershipOrderByWithRelationInput | Prisma.BranchLeadershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BranchLeaderships.
     */
    cursor?: Prisma.BranchLeadershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BranchLeaderships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BranchLeaderships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BranchLeaderships.
     */
    distinct?: Prisma.BranchLeadershipScalarFieldEnum | Prisma.BranchLeadershipScalarFieldEnum[];
};
/**
 * BranchLeadership findMany
 */
export type BranchLeadershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which BranchLeaderships to fetch.
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BranchLeaderships to fetch.
     */
    orderBy?: Prisma.BranchLeadershipOrderByWithRelationInput | Prisma.BranchLeadershipOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BranchLeaderships.
     */
    cursor?: Prisma.BranchLeadershipWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BranchLeaderships from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BranchLeaderships.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BranchLeaderships.
     */
    distinct?: Prisma.BranchLeadershipScalarFieldEnum | Prisma.BranchLeadershipScalarFieldEnum[];
};
/**
 * BranchLeadership create
 */
export type BranchLeadershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a BranchLeadership.
     */
    data: Prisma.XOR<Prisma.BranchLeadershipCreateInput, Prisma.BranchLeadershipUncheckedCreateInput>;
};
/**
 * BranchLeadership createMany
 */
export type BranchLeadershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many BranchLeaderships.
     */
    data: Prisma.BranchLeadershipCreateManyInput | Prisma.BranchLeadershipCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * BranchLeadership createManyAndReturn
 */
export type BranchLeadershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchLeadership
     */
    select?: Prisma.BranchLeadershipSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BranchLeadership
     */
    omit?: Prisma.BranchLeadershipOmit<ExtArgs> | null;
    /**
     * The data used to create many BranchLeaderships.
     */
    data: Prisma.BranchLeadershipCreateManyInput | Prisma.BranchLeadershipCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BranchLeadershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * BranchLeadership update
 */
export type BranchLeadershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a BranchLeadership.
     */
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateInput, Prisma.BranchLeadershipUncheckedUpdateInput>;
    /**
     * Choose, which BranchLeadership to update.
     */
    where: Prisma.BranchLeadershipWhereUniqueInput;
};
/**
 * BranchLeadership updateMany
 */
export type BranchLeadershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update BranchLeaderships.
     */
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateManyMutationInput, Prisma.BranchLeadershipUncheckedUpdateManyInput>;
    /**
     * Filter which BranchLeaderships to update
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * Limit how many BranchLeaderships to update.
     */
    limit?: number;
};
/**
 * BranchLeadership updateManyAndReturn
 */
export type BranchLeadershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchLeadership
     */
    select?: Prisma.BranchLeadershipSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BranchLeadership
     */
    omit?: Prisma.BranchLeadershipOmit<ExtArgs> | null;
    /**
     * The data used to update BranchLeaderships.
     */
    data: Prisma.XOR<Prisma.BranchLeadershipUpdateManyMutationInput, Prisma.BranchLeadershipUncheckedUpdateManyInput>;
    /**
     * Filter which BranchLeaderships to update
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * Limit how many BranchLeaderships to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BranchLeadershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * BranchLeadership upsert
 */
export type BranchLeadershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the BranchLeadership to update in case it exists.
     */
    where: Prisma.BranchLeadershipWhereUniqueInput;
    /**
     * In case the BranchLeadership found by the `where` argument doesn't exist, create a new BranchLeadership with this data.
     */
    create: Prisma.XOR<Prisma.BranchLeadershipCreateInput, Prisma.BranchLeadershipUncheckedCreateInput>;
    /**
     * In case the BranchLeadership was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.BranchLeadershipUpdateInput, Prisma.BranchLeadershipUncheckedUpdateInput>;
};
/**
 * BranchLeadership delete
 */
export type BranchLeadershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which BranchLeadership to delete.
     */
    where: Prisma.BranchLeadershipWhereUniqueInput;
};
/**
 * BranchLeadership deleteMany
 */
export type BranchLeadershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which BranchLeaderships to delete
     */
    where?: Prisma.BranchLeadershipWhereInput;
    /**
     * Limit how many BranchLeaderships to delete.
     */
    limit?: number;
};
/**
 * BranchLeadership without action
 */
export type BranchLeadershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=BranchLeadership.d.ts.map