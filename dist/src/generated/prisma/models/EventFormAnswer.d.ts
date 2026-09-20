import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventFormAnswer
 *
 */
export type EventFormAnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$EventFormAnswerPayload>;
export type AggregateEventFormAnswer = {
    _count: EventFormAnswerCountAggregateOutputType | null;
    _min: EventFormAnswerMinAggregateOutputType | null;
    _max: EventFormAnswerMaxAggregateOutputType | null;
};
export type EventFormAnswerMinAggregateOutputType = {
    id: string | null;
    responseId: string | null;
    fieldId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventFormAnswerMaxAggregateOutputType = {
    id: string | null;
    responseId: string | null;
    fieldId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventFormAnswerCountAggregateOutputType = {
    id: number;
    responseId: number;
    fieldId: number;
    value: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventFormAnswerMinAggregateInputType = {
    id?: true;
    responseId?: true;
    fieldId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventFormAnswerMaxAggregateInputType = {
    id?: true;
    responseId?: true;
    fieldId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventFormAnswerCountAggregateInputType = {
    id?: true;
    responseId?: true;
    fieldId?: true;
    value?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventFormAnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormAnswer to aggregate.
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormAnswers to fetch.
     */
    orderBy?: Prisma.EventFormAnswerOrderByWithRelationInput | Prisma.EventFormAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventFormAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventFormAnswers
    **/
    _count?: true | EventFormAnswerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventFormAnswerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventFormAnswerMaxAggregateInputType;
};
export type GetEventFormAnswerAggregateType<T extends EventFormAnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateEventFormAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventFormAnswer[P]> : Prisma.GetScalarType<T[P], AggregateEventFormAnswer[P]>;
};
export type EventFormAnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventFormAnswerWhereInput;
    orderBy?: Prisma.EventFormAnswerOrderByWithAggregationInput | Prisma.EventFormAnswerOrderByWithAggregationInput[];
    by: Prisma.EventFormAnswerScalarFieldEnum[] | Prisma.EventFormAnswerScalarFieldEnum;
    having?: Prisma.EventFormAnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventFormAnswerCountAggregateInputType | true;
    _min?: EventFormAnswerMinAggregateInputType;
    _max?: EventFormAnswerMaxAggregateInputType;
};
export type EventFormAnswerGroupByOutputType = {
    id: string;
    responseId: string;
    fieldId: string;
    value: runtime.JsonValue;
    createdAt: Date;
    updatedAt: Date;
    _count: EventFormAnswerCountAggregateOutputType | null;
    _min: EventFormAnswerMinAggregateOutputType | null;
    _max: EventFormAnswerMaxAggregateOutputType | null;
};
export type GetEventFormAnswerGroupByPayload<T extends EventFormAnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventFormAnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventFormAnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventFormAnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventFormAnswerGroupByOutputType[P]>;
}>>;
export type EventFormAnswerWhereInput = {
    AND?: Prisma.EventFormAnswerWhereInput | Prisma.EventFormAnswerWhereInput[];
    OR?: Prisma.EventFormAnswerWhereInput[];
    NOT?: Prisma.EventFormAnswerWhereInput | Prisma.EventFormAnswerWhereInput[];
    id?: Prisma.StringFilter<"EventFormAnswer"> | string;
    responseId?: Prisma.StringFilter<"EventFormAnswer"> | string;
    fieldId?: Prisma.StringFilter<"EventFormAnswer"> | string;
    value?: Prisma.JsonFilter<"EventFormAnswer">;
    createdAt?: Prisma.DateTimeFilter<"EventFormAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormAnswer"> | Date | string;
    response?: Prisma.XOR<Prisma.EventFormResponseScalarRelationFilter, Prisma.EventFormResponseWhereInput>;
    field?: Prisma.XOR<Prisma.EventFormFieldScalarRelationFilter, Prisma.EventFormFieldWhereInput>;
};
export type EventFormAnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    fieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    response?: Prisma.EventFormResponseOrderByWithRelationInput;
    field?: Prisma.EventFormFieldOrderByWithRelationInput;
};
export type EventFormAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    responseId_fieldId?: Prisma.EventFormAnswerResponseIdFieldIdCompoundUniqueInput;
    AND?: Prisma.EventFormAnswerWhereInput | Prisma.EventFormAnswerWhereInput[];
    OR?: Prisma.EventFormAnswerWhereInput[];
    NOT?: Prisma.EventFormAnswerWhereInput | Prisma.EventFormAnswerWhereInput[];
    responseId?: Prisma.StringFilter<"EventFormAnswer"> | string;
    fieldId?: Prisma.StringFilter<"EventFormAnswer"> | string;
    value?: Prisma.JsonFilter<"EventFormAnswer">;
    createdAt?: Prisma.DateTimeFilter<"EventFormAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormAnswer"> | Date | string;
    response?: Prisma.XOR<Prisma.EventFormResponseScalarRelationFilter, Prisma.EventFormResponseWhereInput>;
    field?: Prisma.XOR<Prisma.EventFormFieldScalarRelationFilter, Prisma.EventFormFieldWhereInput>;
}, "id" | "responseId_fieldId">;
export type EventFormAnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    fieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventFormAnswerCountOrderByAggregateInput;
    _max?: Prisma.EventFormAnswerMaxOrderByAggregateInput;
    _min?: Prisma.EventFormAnswerMinOrderByAggregateInput;
};
export type EventFormAnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventFormAnswerScalarWhereWithAggregatesInput | Prisma.EventFormAnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventFormAnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventFormAnswerScalarWhereWithAggregatesInput | Prisma.EventFormAnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventFormAnswer"> | string;
    responseId?: Prisma.StringWithAggregatesFilter<"EventFormAnswer"> | string;
    fieldId?: Prisma.StringWithAggregatesFilter<"EventFormAnswer"> | string;
    value?: Prisma.JsonWithAggregatesFilter<"EventFormAnswer">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventFormAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventFormAnswer"> | Date | string;
};
export type EventFormAnswerCreateInput = {
    id?: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    response: Prisma.EventFormResponseCreateNestedOneWithoutAnswersInput;
    field: Prisma.EventFormFieldCreateNestedOneWithoutAnswersInput;
};
export type EventFormAnswerUncheckedCreateInput = {
    id?: string;
    responseId: string;
    fieldId: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormAnswerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    response?: Prisma.EventFormResponseUpdateOneRequiredWithoutAnswersNestedInput;
    field?: Prisma.EventFormFieldUpdateOneRequiredWithoutAnswersNestedInput;
};
export type EventFormAnswerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerCreateManyInput = {
    id?: string;
    responseId: string;
    fieldId: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormAnswerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerListRelationFilter = {
    every?: Prisma.EventFormAnswerWhereInput;
    some?: Prisma.EventFormAnswerWhereInput;
    none?: Prisma.EventFormAnswerWhereInput;
};
export type EventFormAnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventFormAnswerResponseIdFieldIdCompoundUniqueInput = {
    responseId: string;
    fieldId: string;
};
export type EventFormAnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    fieldId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormAnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    fieldId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormAnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    responseId?: Prisma.SortOrder;
    fieldId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormAnswerCreateNestedManyWithoutFieldInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutFieldInput, Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput> | Prisma.EventFormAnswerCreateWithoutFieldInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput | Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput[];
    createMany?: Prisma.EventFormAnswerCreateManyFieldInputEnvelope;
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
};
export type EventFormAnswerUncheckedCreateNestedManyWithoutFieldInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutFieldInput, Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput> | Prisma.EventFormAnswerCreateWithoutFieldInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput | Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput[];
    createMany?: Prisma.EventFormAnswerCreateManyFieldInputEnvelope;
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
};
export type EventFormAnswerUpdateManyWithoutFieldNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutFieldInput, Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput> | Prisma.EventFormAnswerCreateWithoutFieldInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput | Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput[];
    upsert?: Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutFieldInput | Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutFieldInput[];
    createMany?: Prisma.EventFormAnswerCreateManyFieldInputEnvelope;
    set?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    disconnect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    delete?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    update?: Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutFieldInput | Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutFieldInput[];
    updateMany?: Prisma.EventFormAnswerUpdateManyWithWhereWithoutFieldInput | Prisma.EventFormAnswerUpdateManyWithWhereWithoutFieldInput[];
    deleteMany?: Prisma.EventFormAnswerScalarWhereInput | Prisma.EventFormAnswerScalarWhereInput[];
};
export type EventFormAnswerUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutFieldInput, Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput> | Prisma.EventFormAnswerCreateWithoutFieldInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput | Prisma.EventFormAnswerCreateOrConnectWithoutFieldInput[];
    upsert?: Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutFieldInput | Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutFieldInput[];
    createMany?: Prisma.EventFormAnswerCreateManyFieldInputEnvelope;
    set?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    disconnect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    delete?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    update?: Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutFieldInput | Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutFieldInput[];
    updateMany?: Prisma.EventFormAnswerUpdateManyWithWhereWithoutFieldInput | Prisma.EventFormAnswerUpdateManyWithWhereWithoutFieldInput[];
    deleteMany?: Prisma.EventFormAnswerScalarWhereInput | Prisma.EventFormAnswerScalarWhereInput[];
};
export type EventFormAnswerCreateNestedManyWithoutResponseInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutResponseInput, Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput> | Prisma.EventFormAnswerCreateWithoutResponseInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput | Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput[];
    createMany?: Prisma.EventFormAnswerCreateManyResponseInputEnvelope;
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
};
export type EventFormAnswerUncheckedCreateNestedManyWithoutResponseInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutResponseInput, Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput> | Prisma.EventFormAnswerCreateWithoutResponseInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput | Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput[];
    createMany?: Prisma.EventFormAnswerCreateManyResponseInputEnvelope;
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
};
export type EventFormAnswerUpdateManyWithoutResponseNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutResponseInput, Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput> | Prisma.EventFormAnswerCreateWithoutResponseInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput | Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput[];
    upsert?: Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutResponseInput | Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutResponseInput[];
    createMany?: Prisma.EventFormAnswerCreateManyResponseInputEnvelope;
    set?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    disconnect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    delete?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    update?: Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutResponseInput | Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutResponseInput[];
    updateMany?: Prisma.EventFormAnswerUpdateManyWithWhereWithoutResponseInput | Prisma.EventFormAnswerUpdateManyWithWhereWithoutResponseInput[];
    deleteMany?: Prisma.EventFormAnswerScalarWhereInput | Prisma.EventFormAnswerScalarWhereInput[];
};
export type EventFormAnswerUncheckedUpdateManyWithoutResponseNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutResponseInput, Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput> | Prisma.EventFormAnswerCreateWithoutResponseInput[] | Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput[];
    connectOrCreate?: Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput | Prisma.EventFormAnswerCreateOrConnectWithoutResponseInput[];
    upsert?: Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutResponseInput | Prisma.EventFormAnswerUpsertWithWhereUniqueWithoutResponseInput[];
    createMany?: Prisma.EventFormAnswerCreateManyResponseInputEnvelope;
    set?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    disconnect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    delete?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    connect?: Prisma.EventFormAnswerWhereUniqueInput | Prisma.EventFormAnswerWhereUniqueInput[];
    update?: Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutResponseInput | Prisma.EventFormAnswerUpdateWithWhereUniqueWithoutResponseInput[];
    updateMany?: Prisma.EventFormAnswerUpdateManyWithWhereWithoutResponseInput | Prisma.EventFormAnswerUpdateManyWithWhereWithoutResponseInput[];
    deleteMany?: Prisma.EventFormAnswerScalarWhereInput | Prisma.EventFormAnswerScalarWhereInput[];
};
export type EventFormAnswerCreateWithoutFieldInput = {
    id?: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    response: Prisma.EventFormResponseCreateNestedOneWithoutAnswersInput;
};
export type EventFormAnswerUncheckedCreateWithoutFieldInput = {
    id?: string;
    responseId: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormAnswerCreateOrConnectWithoutFieldInput = {
    where: Prisma.EventFormAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutFieldInput, Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput>;
};
export type EventFormAnswerCreateManyFieldInputEnvelope = {
    data: Prisma.EventFormAnswerCreateManyFieldInput | Prisma.EventFormAnswerCreateManyFieldInput[];
    skipDuplicates?: boolean;
};
export type EventFormAnswerUpsertWithWhereUniqueWithoutFieldInput = {
    where: Prisma.EventFormAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventFormAnswerUpdateWithoutFieldInput, Prisma.EventFormAnswerUncheckedUpdateWithoutFieldInput>;
    create: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutFieldInput, Prisma.EventFormAnswerUncheckedCreateWithoutFieldInput>;
};
export type EventFormAnswerUpdateWithWhereUniqueWithoutFieldInput = {
    where: Prisma.EventFormAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateWithoutFieldInput, Prisma.EventFormAnswerUncheckedUpdateWithoutFieldInput>;
};
export type EventFormAnswerUpdateManyWithWhereWithoutFieldInput = {
    where: Prisma.EventFormAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateManyMutationInput, Prisma.EventFormAnswerUncheckedUpdateManyWithoutFieldInput>;
};
export type EventFormAnswerScalarWhereInput = {
    AND?: Prisma.EventFormAnswerScalarWhereInput | Prisma.EventFormAnswerScalarWhereInput[];
    OR?: Prisma.EventFormAnswerScalarWhereInput[];
    NOT?: Prisma.EventFormAnswerScalarWhereInput | Prisma.EventFormAnswerScalarWhereInput[];
    id?: Prisma.StringFilter<"EventFormAnswer"> | string;
    responseId?: Prisma.StringFilter<"EventFormAnswer"> | string;
    fieldId?: Prisma.StringFilter<"EventFormAnswer"> | string;
    value?: Prisma.JsonFilter<"EventFormAnswer">;
    createdAt?: Prisma.DateTimeFilter<"EventFormAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormAnswer"> | Date | string;
};
export type EventFormAnswerCreateWithoutResponseInput = {
    id?: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    field: Prisma.EventFormFieldCreateNestedOneWithoutAnswersInput;
};
export type EventFormAnswerUncheckedCreateWithoutResponseInput = {
    id?: string;
    fieldId: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormAnswerCreateOrConnectWithoutResponseInput = {
    where: Prisma.EventFormAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutResponseInput, Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput>;
};
export type EventFormAnswerCreateManyResponseInputEnvelope = {
    data: Prisma.EventFormAnswerCreateManyResponseInput | Prisma.EventFormAnswerCreateManyResponseInput[];
    skipDuplicates?: boolean;
};
export type EventFormAnswerUpsertWithWhereUniqueWithoutResponseInput = {
    where: Prisma.EventFormAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventFormAnswerUpdateWithoutResponseInput, Prisma.EventFormAnswerUncheckedUpdateWithoutResponseInput>;
    create: Prisma.XOR<Prisma.EventFormAnswerCreateWithoutResponseInput, Prisma.EventFormAnswerUncheckedCreateWithoutResponseInput>;
};
export type EventFormAnswerUpdateWithWhereUniqueWithoutResponseInput = {
    where: Prisma.EventFormAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateWithoutResponseInput, Prisma.EventFormAnswerUncheckedUpdateWithoutResponseInput>;
};
export type EventFormAnswerUpdateManyWithWhereWithoutResponseInput = {
    where: Prisma.EventFormAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateManyMutationInput, Prisma.EventFormAnswerUncheckedUpdateManyWithoutResponseInput>;
};
export type EventFormAnswerCreateManyFieldInput = {
    id?: string;
    responseId: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormAnswerUpdateWithoutFieldInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    response?: Prisma.EventFormResponseUpdateOneRequiredWithoutAnswersNestedInput;
};
export type EventFormAnswerUncheckedUpdateWithoutFieldInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerUncheckedUpdateManyWithoutFieldInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    responseId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerCreateManyResponseInput = {
    id?: string;
    fieldId: string;
    value: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormAnswerUpdateWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    field?: Prisma.EventFormFieldUpdateOneRequiredWithoutAnswersNestedInput;
};
export type EventFormAnswerUncheckedUpdateWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerUncheckedUpdateManyWithoutResponseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fieldId?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormAnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    responseId?: boolean;
    fieldId?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    response?: boolean | Prisma.EventFormResponseDefaultArgs<ExtArgs>;
    field?: boolean | Prisma.EventFormFieldDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormAnswer"]>;
export type EventFormAnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    responseId?: boolean;
    fieldId?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    response?: boolean | Prisma.EventFormResponseDefaultArgs<ExtArgs>;
    field?: boolean | Prisma.EventFormFieldDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormAnswer"]>;
export type EventFormAnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    responseId?: boolean;
    fieldId?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    response?: boolean | Prisma.EventFormResponseDefaultArgs<ExtArgs>;
    field?: boolean | Prisma.EventFormFieldDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormAnswer"]>;
export type EventFormAnswerSelectScalar = {
    id?: boolean;
    responseId?: boolean;
    fieldId?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventFormAnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "responseId" | "fieldId" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["eventFormAnswer"]>;
export type EventFormAnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    response?: boolean | Prisma.EventFormResponseDefaultArgs<ExtArgs>;
    field?: boolean | Prisma.EventFormFieldDefaultArgs<ExtArgs>;
};
export type EventFormAnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    response?: boolean | Prisma.EventFormResponseDefaultArgs<ExtArgs>;
    field?: boolean | Prisma.EventFormFieldDefaultArgs<ExtArgs>;
};
export type EventFormAnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    response?: boolean | Prisma.EventFormResponseDefaultArgs<ExtArgs>;
    field?: boolean | Prisma.EventFormFieldDefaultArgs<ExtArgs>;
};
export type $EventFormAnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventFormAnswer";
    objects: {
        response: Prisma.$EventFormResponsePayload<ExtArgs>;
        field: Prisma.$EventFormFieldPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        responseId: string;
        fieldId: string;
        value: runtime.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventFormAnswer"]>;
    composites: {};
};
export type EventFormAnswerGetPayload<S extends boolean | null | undefined | EventFormAnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload, S>;
export type EventFormAnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFormAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventFormAnswerCountAggregateInputType | true;
};
export interface EventFormAnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventFormAnswer'];
        meta: {
            name: 'EventFormAnswer';
        };
    };
    /**
     * Find zero or one EventFormAnswer that matches the filter.
     * @param {EventFormAnswerFindUniqueArgs} args - Arguments to find a EventFormAnswer
     * @example
     * // Get one EventFormAnswer
     * const eventFormAnswer = await prisma.eventFormAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFormAnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFormAnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventFormAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFormAnswerFindUniqueOrThrowArgs} args - Arguments to find a EventFormAnswer
     * @example
     * // Get one EventFormAnswer
     * const eventFormAnswer = await prisma.eventFormAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFormAnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFormAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventFormAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerFindFirstArgs} args - Arguments to find a EventFormAnswer
     * @example
     * // Get one EventFormAnswer
     * const eventFormAnswer = await prisma.eventFormAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFormAnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFormAnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventFormAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerFindFirstOrThrowArgs} args - Arguments to find a EventFormAnswer
     * @example
     * // Get one EventFormAnswer
     * const eventFormAnswer = await prisma.eventFormAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFormAnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFormAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventFormAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventFormAnswers
     * const eventFormAnswers = await prisma.eventFormAnswer.findMany()
     *
     * // Get first 10 EventFormAnswers
     * const eventFormAnswers = await prisma.eventFormAnswer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventFormAnswerWithIdOnly = await prisma.eventFormAnswer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFormAnswerFindManyArgs>(args?: Prisma.SelectSubset<T, EventFormAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventFormAnswer.
     * @param {EventFormAnswerCreateArgs} args - Arguments to create a EventFormAnswer.
     * @example
     * // Create one EventFormAnswer
     * const EventFormAnswer = await prisma.eventFormAnswer.create({
     *   data: {
     *     // ... data to create a EventFormAnswer
     *   }
     * })
     *
     */
    create<T extends EventFormAnswerCreateArgs>(args: Prisma.SelectSubset<T, EventFormAnswerCreateArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventFormAnswers.
     * @param {EventFormAnswerCreateManyArgs} args - Arguments to create many EventFormAnswers.
     * @example
     * // Create many EventFormAnswers
     * const eventFormAnswer = await prisma.eventFormAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventFormAnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, EventFormAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventFormAnswers and returns the data saved in the database.
     * @param {EventFormAnswerCreateManyAndReturnArgs} args - Arguments to create many EventFormAnswers.
     * @example
     * // Create many EventFormAnswers
     * const eventFormAnswer = await prisma.eventFormAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventFormAnswers and only return the `id`
     * const eventFormAnswerWithIdOnly = await prisma.eventFormAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventFormAnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventFormAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventFormAnswer.
     * @param {EventFormAnswerDeleteArgs} args - Arguments to delete one EventFormAnswer.
     * @example
     * // Delete one EventFormAnswer
     * const EventFormAnswer = await prisma.eventFormAnswer.delete({
     *   where: {
     *     // ... filter to delete one EventFormAnswer
     *   }
     * })
     *
     */
    delete<T extends EventFormAnswerDeleteArgs>(args: Prisma.SelectSubset<T, EventFormAnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventFormAnswer.
     * @param {EventFormAnswerUpdateArgs} args - Arguments to update one EventFormAnswer.
     * @example
     * // Update one EventFormAnswer
     * const eventFormAnswer = await prisma.eventFormAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventFormAnswerUpdateArgs>(args: Prisma.SelectSubset<T, EventFormAnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventFormAnswers.
     * @param {EventFormAnswerDeleteManyArgs} args - Arguments to filter EventFormAnswers to delete.
     * @example
     * // Delete a few EventFormAnswers
     * const { count } = await prisma.eventFormAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventFormAnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventFormAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventFormAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventFormAnswers
     * const eventFormAnswer = await prisma.eventFormAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventFormAnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, EventFormAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventFormAnswers and returns the data updated in the database.
     * @param {EventFormAnswerUpdateManyAndReturnArgs} args - Arguments to update many EventFormAnswers.
     * @example
     * // Update many EventFormAnswers
     * const eventFormAnswer = await prisma.eventFormAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventFormAnswers and only return the `id`
     * const eventFormAnswerWithIdOnly = await prisma.eventFormAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventFormAnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventFormAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventFormAnswer.
     * @param {EventFormAnswerUpsertArgs} args - Arguments to update or create a EventFormAnswer.
     * @example
     * // Update or create a EventFormAnswer
     * const eventFormAnswer = await prisma.eventFormAnswer.upsert({
     *   create: {
     *     // ... data to create a EventFormAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventFormAnswer we want to update
     *   }
     * })
     */
    upsert<T extends EventFormAnswerUpsertArgs>(args: Prisma.SelectSubset<T, EventFormAnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__EventFormAnswerClient<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventFormAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerCountArgs} args - Arguments to filter EventFormAnswers to count.
     * @example
     * // Count the number of EventFormAnswers
     * const count = await prisma.eventFormAnswer.count({
     *   where: {
     *     // ... the filter for the EventFormAnswers we want to count
     *   }
     * })
    **/
    count<T extends EventFormAnswerCountArgs>(args?: Prisma.Subset<T, EventFormAnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventFormAnswerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventFormAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventFormAnswerAggregateArgs>(args: Prisma.Subset<T, EventFormAnswerAggregateArgs>): Prisma.PrismaPromise<GetEventFormAnswerAggregateType<T>>;
    /**
     * Group by EventFormAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormAnswerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventFormAnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventFormAnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: EventFormAnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventFormAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventFormAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventFormAnswer model
     */
    readonly fields: EventFormAnswerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventFormAnswer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventFormAnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    response<T extends Prisma.EventFormResponseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventFormResponseDefaultArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    field<T extends Prisma.EventFormFieldDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventFormFieldDefaultArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the EventFormAnswer model
 */
export interface EventFormAnswerFieldRefs {
    readonly id: Prisma.FieldRef<"EventFormAnswer", 'String'>;
    readonly responseId: Prisma.FieldRef<"EventFormAnswer", 'String'>;
    readonly fieldId: Prisma.FieldRef<"EventFormAnswer", 'String'>;
    readonly value: Prisma.FieldRef<"EventFormAnswer", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"EventFormAnswer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventFormAnswer", 'DateTime'>;
}
/**
 * EventFormAnswer findUnique
 */
export type EventFormAnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormAnswer to fetch.
     */
    where: Prisma.EventFormAnswerWhereUniqueInput;
};
/**
 * EventFormAnswer findUniqueOrThrow
 */
export type EventFormAnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormAnswer to fetch.
     */
    where: Prisma.EventFormAnswerWhereUniqueInput;
};
/**
 * EventFormAnswer findFirst
 */
export type EventFormAnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormAnswer to fetch.
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormAnswers to fetch.
     */
    orderBy?: Prisma.EventFormAnswerOrderByWithRelationInput | Prisma.EventFormAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFormAnswers.
     */
    cursor?: Prisma.EventFormAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormAnswers.
     */
    distinct?: Prisma.EventFormAnswerScalarFieldEnum | Prisma.EventFormAnswerScalarFieldEnum[];
};
/**
 * EventFormAnswer findFirstOrThrow
 */
export type EventFormAnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormAnswer to fetch.
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormAnswers to fetch.
     */
    orderBy?: Prisma.EventFormAnswerOrderByWithRelationInput | Prisma.EventFormAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFormAnswers.
     */
    cursor?: Prisma.EventFormAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormAnswers.
     */
    distinct?: Prisma.EventFormAnswerScalarFieldEnum | Prisma.EventFormAnswerScalarFieldEnum[];
};
/**
 * EventFormAnswer findMany
 */
export type EventFormAnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormAnswers to fetch.
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormAnswers to fetch.
     */
    orderBy?: Prisma.EventFormAnswerOrderByWithRelationInput | Prisma.EventFormAnswerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventFormAnswers.
     */
    cursor?: Prisma.EventFormAnswerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormAnswers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormAnswers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormAnswers.
     */
    distinct?: Prisma.EventFormAnswerScalarFieldEnum | Prisma.EventFormAnswerScalarFieldEnum[];
};
/**
 * EventFormAnswer create
 */
export type EventFormAnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventFormAnswer.
     */
    data: Prisma.XOR<Prisma.EventFormAnswerCreateInput, Prisma.EventFormAnswerUncheckedCreateInput>;
};
/**
 * EventFormAnswer createMany
 */
export type EventFormAnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventFormAnswers.
     */
    data: Prisma.EventFormAnswerCreateManyInput | Prisma.EventFormAnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventFormAnswer createManyAndReturn
 */
export type EventFormAnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * The data used to create many EventFormAnswers.
     */
    data: Prisma.EventFormAnswerCreateManyInput | Prisma.EventFormAnswerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventFormAnswer update
 */
export type EventFormAnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventFormAnswer.
     */
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateInput, Prisma.EventFormAnswerUncheckedUpdateInput>;
    /**
     * Choose, which EventFormAnswer to update.
     */
    where: Prisma.EventFormAnswerWhereUniqueInput;
};
/**
 * EventFormAnswer updateMany
 */
export type EventFormAnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventFormAnswers.
     */
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateManyMutationInput, Prisma.EventFormAnswerUncheckedUpdateManyInput>;
    /**
     * Filter which EventFormAnswers to update
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * Limit how many EventFormAnswers to update.
     */
    limit?: number;
};
/**
 * EventFormAnswer updateManyAndReturn
 */
export type EventFormAnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * The data used to update EventFormAnswers.
     */
    data: Prisma.XOR<Prisma.EventFormAnswerUpdateManyMutationInput, Prisma.EventFormAnswerUncheckedUpdateManyInput>;
    /**
     * Filter which EventFormAnswers to update
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * Limit how many EventFormAnswers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventFormAnswer upsert
 */
export type EventFormAnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventFormAnswer to update in case it exists.
     */
    where: Prisma.EventFormAnswerWhereUniqueInput;
    /**
     * In case the EventFormAnswer found by the `where` argument doesn't exist, create a new EventFormAnswer with this data.
     */
    create: Prisma.XOR<Prisma.EventFormAnswerCreateInput, Prisma.EventFormAnswerUncheckedCreateInput>;
    /**
     * In case the EventFormAnswer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventFormAnswerUpdateInput, Prisma.EventFormAnswerUncheckedUpdateInput>;
};
/**
 * EventFormAnswer delete
 */
export type EventFormAnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
    /**
     * Filter which EventFormAnswer to delete.
     */
    where: Prisma.EventFormAnswerWhereUniqueInput;
};
/**
 * EventFormAnswer deleteMany
 */
export type EventFormAnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormAnswers to delete
     */
    where?: Prisma.EventFormAnswerWhereInput;
    /**
     * Limit how many EventFormAnswers to delete.
     */
    limit?: number;
};
/**
 * EventFormAnswer without action
 */
export type EventFormAnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormAnswer
     */
    select?: Prisma.EventFormAnswerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormAnswer
     */
    omit?: Prisma.EventFormAnswerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormAnswerInclude<ExtArgs> | null;
};
//# sourceMappingURL=EventFormAnswer.d.ts.map