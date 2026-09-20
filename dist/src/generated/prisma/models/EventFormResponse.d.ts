import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventFormResponse
 *
 */
export type EventFormResponseModel = runtime.Types.Result.DefaultSelection<Prisma.$EventFormResponsePayload>;
export type AggregateEventFormResponse = {
    _count: EventFormResponseCountAggregateOutputType | null;
    _min: EventFormResponseMinAggregateOutputType | null;
    _max: EventFormResponseMaxAggregateOutputType | null;
};
export type EventFormResponseMinAggregateOutputType = {
    id: string | null;
    formId: string | null;
    registrationId: string | null;
    submittedAt: Date | null;
    updatedAt: Date | null;
};
export type EventFormResponseMaxAggregateOutputType = {
    id: string | null;
    formId: string | null;
    registrationId: string | null;
    submittedAt: Date | null;
    updatedAt: Date | null;
};
export type EventFormResponseCountAggregateOutputType = {
    id: number;
    formId: number;
    registrationId: number;
    submittedAt: number;
    updatedAt: number;
    _all: number;
};
export type EventFormResponseMinAggregateInputType = {
    id?: true;
    formId?: true;
    registrationId?: true;
    submittedAt?: true;
    updatedAt?: true;
};
export type EventFormResponseMaxAggregateInputType = {
    id?: true;
    formId?: true;
    registrationId?: true;
    submittedAt?: true;
    updatedAt?: true;
};
export type EventFormResponseCountAggregateInputType = {
    id?: true;
    formId?: true;
    registrationId?: true;
    submittedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventFormResponseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormResponse to aggregate.
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormResponses to fetch.
     */
    orderBy?: Prisma.EventFormResponseOrderByWithRelationInput | Prisma.EventFormResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventFormResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventFormResponses
    **/
    _count?: true | EventFormResponseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventFormResponseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventFormResponseMaxAggregateInputType;
};
export type GetEventFormResponseAggregateType<T extends EventFormResponseAggregateArgs> = {
    [P in keyof T & keyof AggregateEventFormResponse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventFormResponse[P]> : Prisma.GetScalarType<T[P], AggregateEventFormResponse[P]>;
};
export type EventFormResponseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventFormResponseWhereInput;
    orderBy?: Prisma.EventFormResponseOrderByWithAggregationInput | Prisma.EventFormResponseOrderByWithAggregationInput[];
    by: Prisma.EventFormResponseScalarFieldEnum[] | Prisma.EventFormResponseScalarFieldEnum;
    having?: Prisma.EventFormResponseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventFormResponseCountAggregateInputType | true;
    _min?: EventFormResponseMinAggregateInputType;
    _max?: EventFormResponseMaxAggregateInputType;
};
export type EventFormResponseGroupByOutputType = {
    id: string;
    formId: string;
    registrationId: string;
    submittedAt: Date;
    updatedAt: Date;
    _count: EventFormResponseCountAggregateOutputType | null;
    _min: EventFormResponseMinAggregateOutputType | null;
    _max: EventFormResponseMaxAggregateOutputType | null;
};
export type GetEventFormResponseGroupByPayload<T extends EventFormResponseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventFormResponseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventFormResponseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventFormResponseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventFormResponseGroupByOutputType[P]>;
}>>;
export type EventFormResponseWhereInput = {
    AND?: Prisma.EventFormResponseWhereInput | Prisma.EventFormResponseWhereInput[];
    OR?: Prisma.EventFormResponseWhereInput[];
    NOT?: Prisma.EventFormResponseWhereInput | Prisma.EventFormResponseWhereInput[];
    id?: Prisma.StringFilter<"EventFormResponse"> | string;
    formId?: Prisma.StringFilter<"EventFormResponse"> | string;
    registrationId?: Prisma.StringFilter<"EventFormResponse"> | string;
    submittedAt?: Prisma.DateTimeFilter<"EventFormResponse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormResponse"> | Date | string;
    form?: Prisma.XOR<Prisma.EventFormScalarRelationFilter, Prisma.EventFormWhereInput>;
    registration?: Prisma.XOR<Prisma.EventRegistrationScalarRelationFilter, Prisma.EventRegistrationWhereInput>;
    answers?: Prisma.EventFormAnswerListRelationFilter;
};
export type EventFormResponseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    form?: Prisma.EventFormOrderByWithRelationInput;
    registration?: Prisma.EventRegistrationOrderByWithRelationInput;
    answers?: Prisma.EventFormAnswerOrderByRelationAggregateInput;
};
export type EventFormResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    registrationId?: string;
    AND?: Prisma.EventFormResponseWhereInput | Prisma.EventFormResponseWhereInput[];
    OR?: Prisma.EventFormResponseWhereInput[];
    NOT?: Prisma.EventFormResponseWhereInput | Prisma.EventFormResponseWhereInput[];
    formId?: Prisma.StringFilter<"EventFormResponse"> | string;
    submittedAt?: Prisma.DateTimeFilter<"EventFormResponse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormResponse"> | Date | string;
    form?: Prisma.XOR<Prisma.EventFormScalarRelationFilter, Prisma.EventFormWhereInput>;
    registration?: Prisma.XOR<Prisma.EventRegistrationScalarRelationFilter, Prisma.EventRegistrationWhereInput>;
    answers?: Prisma.EventFormAnswerListRelationFilter;
}, "id" | "registrationId">;
export type EventFormResponseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventFormResponseCountOrderByAggregateInput;
    _max?: Prisma.EventFormResponseMaxOrderByAggregateInput;
    _min?: Prisma.EventFormResponseMinOrderByAggregateInput;
};
export type EventFormResponseScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventFormResponseScalarWhereWithAggregatesInput | Prisma.EventFormResponseScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventFormResponseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventFormResponseScalarWhereWithAggregatesInput | Prisma.EventFormResponseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventFormResponse"> | string;
    formId?: Prisma.StringWithAggregatesFilter<"EventFormResponse"> | string;
    registrationId?: Prisma.StringWithAggregatesFilter<"EventFormResponse"> | string;
    submittedAt?: Prisma.DateTimeWithAggregatesFilter<"EventFormResponse"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventFormResponse"> | Date | string;
};
export type EventFormResponseCreateInput = {
    id?: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    form: Prisma.EventFormCreateNestedOneWithoutResponsesInput;
    registration: Prisma.EventRegistrationCreateNestedOneWithoutFormResponseInput;
    answers?: Prisma.EventFormAnswerCreateNestedManyWithoutResponseInput;
};
export type EventFormResponseUncheckedCreateInput = {
    id?: string;
    formId: string;
    registrationId: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EventFormAnswerUncheckedCreateNestedManyWithoutResponseInput;
};
export type EventFormResponseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.EventFormUpdateOneRequiredWithoutResponsesNestedInput;
    registration?: Prisma.EventRegistrationUpdateOneRequiredWithoutFormResponseNestedInput;
    answers?: Prisma.EventFormAnswerUpdateManyWithoutResponseNestedInput;
};
export type EventFormResponseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EventFormAnswerUncheckedUpdateManyWithoutResponseNestedInput;
};
export type EventFormResponseCreateManyInput = {
    id?: string;
    formId: string;
    registrationId: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormResponseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormResponseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormResponseNullableScalarRelationFilter = {
    is?: Prisma.EventFormResponseWhereInput | null;
    isNot?: Prisma.EventFormResponseWhereInput | null;
};
export type EventFormResponseListRelationFilter = {
    every?: Prisma.EventFormResponseWhereInput;
    some?: Prisma.EventFormResponseWhereInput;
    none?: Prisma.EventFormResponseWhereInput;
};
export type EventFormResponseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventFormResponseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormResponseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormResponseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    registrationId?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormResponseScalarRelationFilter = {
    is?: Prisma.EventFormResponseWhereInput;
    isNot?: Prisma.EventFormResponseWhereInput;
};
export type EventFormResponseCreateNestedOneWithoutRegistrationInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedCreateWithoutRegistrationInput>;
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutRegistrationInput;
    connect?: Prisma.EventFormResponseWhereUniqueInput;
};
export type EventFormResponseUncheckedCreateNestedOneWithoutRegistrationInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedCreateWithoutRegistrationInput>;
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutRegistrationInput;
    connect?: Prisma.EventFormResponseWhereUniqueInput;
};
export type EventFormResponseUpdateOneWithoutRegistrationNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedCreateWithoutRegistrationInput>;
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutRegistrationInput;
    upsert?: Prisma.EventFormResponseUpsertWithoutRegistrationInput;
    disconnect?: Prisma.EventFormResponseWhereInput | boolean;
    delete?: Prisma.EventFormResponseWhereInput | boolean;
    connect?: Prisma.EventFormResponseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventFormResponseUpdateToOneWithWhereWithoutRegistrationInput, Prisma.EventFormResponseUpdateWithoutRegistrationInput>, Prisma.EventFormResponseUncheckedUpdateWithoutRegistrationInput>;
};
export type EventFormResponseUncheckedUpdateOneWithoutRegistrationNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedCreateWithoutRegistrationInput>;
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutRegistrationInput;
    upsert?: Prisma.EventFormResponseUpsertWithoutRegistrationInput;
    disconnect?: Prisma.EventFormResponseWhereInput | boolean;
    delete?: Prisma.EventFormResponseWhereInput | boolean;
    connect?: Prisma.EventFormResponseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventFormResponseUpdateToOneWithWhereWithoutRegistrationInput, Prisma.EventFormResponseUpdateWithoutRegistrationInput>, Prisma.EventFormResponseUncheckedUpdateWithoutRegistrationInput>;
};
export type EventFormResponseCreateNestedManyWithoutFormInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutFormInput, Prisma.EventFormResponseUncheckedCreateWithoutFormInput> | Prisma.EventFormResponseCreateWithoutFormInput[] | Prisma.EventFormResponseUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutFormInput | Prisma.EventFormResponseCreateOrConnectWithoutFormInput[];
    createMany?: Prisma.EventFormResponseCreateManyFormInputEnvelope;
    connect?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
};
export type EventFormResponseUncheckedCreateNestedManyWithoutFormInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutFormInput, Prisma.EventFormResponseUncheckedCreateWithoutFormInput> | Prisma.EventFormResponseCreateWithoutFormInput[] | Prisma.EventFormResponseUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutFormInput | Prisma.EventFormResponseCreateOrConnectWithoutFormInput[];
    createMany?: Prisma.EventFormResponseCreateManyFormInputEnvelope;
    connect?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
};
export type EventFormResponseUpdateManyWithoutFormNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutFormInput, Prisma.EventFormResponseUncheckedCreateWithoutFormInput> | Prisma.EventFormResponseCreateWithoutFormInput[] | Prisma.EventFormResponseUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutFormInput | Prisma.EventFormResponseCreateOrConnectWithoutFormInput[];
    upsert?: Prisma.EventFormResponseUpsertWithWhereUniqueWithoutFormInput | Prisma.EventFormResponseUpsertWithWhereUniqueWithoutFormInput[];
    createMany?: Prisma.EventFormResponseCreateManyFormInputEnvelope;
    set?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    disconnect?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    delete?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    connect?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    update?: Prisma.EventFormResponseUpdateWithWhereUniqueWithoutFormInput | Prisma.EventFormResponseUpdateWithWhereUniqueWithoutFormInput[];
    updateMany?: Prisma.EventFormResponseUpdateManyWithWhereWithoutFormInput | Prisma.EventFormResponseUpdateManyWithWhereWithoutFormInput[];
    deleteMany?: Prisma.EventFormResponseScalarWhereInput | Prisma.EventFormResponseScalarWhereInput[];
};
export type EventFormResponseUncheckedUpdateManyWithoutFormNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutFormInput, Prisma.EventFormResponseUncheckedCreateWithoutFormInput> | Prisma.EventFormResponseCreateWithoutFormInput[] | Prisma.EventFormResponseUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutFormInput | Prisma.EventFormResponseCreateOrConnectWithoutFormInput[];
    upsert?: Prisma.EventFormResponseUpsertWithWhereUniqueWithoutFormInput | Prisma.EventFormResponseUpsertWithWhereUniqueWithoutFormInput[];
    createMany?: Prisma.EventFormResponseCreateManyFormInputEnvelope;
    set?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    disconnect?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    delete?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    connect?: Prisma.EventFormResponseWhereUniqueInput | Prisma.EventFormResponseWhereUniqueInput[];
    update?: Prisma.EventFormResponseUpdateWithWhereUniqueWithoutFormInput | Prisma.EventFormResponseUpdateWithWhereUniqueWithoutFormInput[];
    updateMany?: Prisma.EventFormResponseUpdateManyWithWhereWithoutFormInput | Prisma.EventFormResponseUpdateManyWithWhereWithoutFormInput[];
    deleteMany?: Prisma.EventFormResponseScalarWhereInput | Prisma.EventFormResponseScalarWhereInput[];
};
export type EventFormResponseCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutAnswersInput, Prisma.EventFormResponseUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.EventFormResponseWhereUniqueInput;
};
export type EventFormResponseUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormResponseCreateWithoutAnswersInput, Prisma.EventFormResponseUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EventFormResponseCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.EventFormResponseUpsertWithoutAnswersInput;
    connect?: Prisma.EventFormResponseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventFormResponseUpdateToOneWithWhereWithoutAnswersInput, Prisma.EventFormResponseUpdateWithoutAnswersInput>, Prisma.EventFormResponseUncheckedUpdateWithoutAnswersInput>;
};
export type EventFormResponseCreateWithoutRegistrationInput = {
    id?: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    form: Prisma.EventFormCreateNestedOneWithoutResponsesInput;
    answers?: Prisma.EventFormAnswerCreateNestedManyWithoutResponseInput;
};
export type EventFormResponseUncheckedCreateWithoutRegistrationInput = {
    id?: string;
    formId: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EventFormAnswerUncheckedCreateNestedManyWithoutResponseInput;
};
export type EventFormResponseCreateOrConnectWithoutRegistrationInput = {
    where: Prisma.EventFormResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormResponseCreateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedCreateWithoutRegistrationInput>;
};
export type EventFormResponseUpsertWithoutRegistrationInput = {
    update: Prisma.XOR<Prisma.EventFormResponseUpdateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedUpdateWithoutRegistrationInput>;
    create: Prisma.XOR<Prisma.EventFormResponseCreateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedCreateWithoutRegistrationInput>;
    where?: Prisma.EventFormResponseWhereInput;
};
export type EventFormResponseUpdateToOneWithWhereWithoutRegistrationInput = {
    where?: Prisma.EventFormResponseWhereInput;
    data: Prisma.XOR<Prisma.EventFormResponseUpdateWithoutRegistrationInput, Prisma.EventFormResponseUncheckedUpdateWithoutRegistrationInput>;
};
export type EventFormResponseUpdateWithoutRegistrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.EventFormUpdateOneRequiredWithoutResponsesNestedInput;
    answers?: Prisma.EventFormAnswerUpdateManyWithoutResponseNestedInput;
};
export type EventFormResponseUncheckedUpdateWithoutRegistrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EventFormAnswerUncheckedUpdateManyWithoutResponseNestedInput;
};
export type EventFormResponseCreateWithoutFormInput = {
    id?: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    registration: Prisma.EventRegistrationCreateNestedOneWithoutFormResponseInput;
    answers?: Prisma.EventFormAnswerCreateNestedManyWithoutResponseInput;
};
export type EventFormResponseUncheckedCreateWithoutFormInput = {
    id?: string;
    registrationId: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EventFormAnswerUncheckedCreateNestedManyWithoutResponseInput;
};
export type EventFormResponseCreateOrConnectWithoutFormInput = {
    where: Prisma.EventFormResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormResponseCreateWithoutFormInput, Prisma.EventFormResponseUncheckedCreateWithoutFormInput>;
};
export type EventFormResponseCreateManyFormInputEnvelope = {
    data: Prisma.EventFormResponseCreateManyFormInput | Prisma.EventFormResponseCreateManyFormInput[];
    skipDuplicates?: boolean;
};
export type EventFormResponseUpsertWithWhereUniqueWithoutFormInput = {
    where: Prisma.EventFormResponseWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventFormResponseUpdateWithoutFormInput, Prisma.EventFormResponseUncheckedUpdateWithoutFormInput>;
    create: Prisma.XOR<Prisma.EventFormResponseCreateWithoutFormInput, Prisma.EventFormResponseUncheckedCreateWithoutFormInput>;
};
export type EventFormResponseUpdateWithWhereUniqueWithoutFormInput = {
    where: Prisma.EventFormResponseWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventFormResponseUpdateWithoutFormInput, Prisma.EventFormResponseUncheckedUpdateWithoutFormInput>;
};
export type EventFormResponseUpdateManyWithWhereWithoutFormInput = {
    where: Prisma.EventFormResponseScalarWhereInput;
    data: Prisma.XOR<Prisma.EventFormResponseUpdateManyMutationInput, Prisma.EventFormResponseUncheckedUpdateManyWithoutFormInput>;
};
export type EventFormResponseScalarWhereInput = {
    AND?: Prisma.EventFormResponseScalarWhereInput | Prisma.EventFormResponseScalarWhereInput[];
    OR?: Prisma.EventFormResponseScalarWhereInput[];
    NOT?: Prisma.EventFormResponseScalarWhereInput | Prisma.EventFormResponseScalarWhereInput[];
    id?: Prisma.StringFilter<"EventFormResponse"> | string;
    formId?: Prisma.StringFilter<"EventFormResponse"> | string;
    registrationId?: Prisma.StringFilter<"EventFormResponse"> | string;
    submittedAt?: Prisma.DateTimeFilter<"EventFormResponse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormResponse"> | Date | string;
};
export type EventFormResponseCreateWithoutAnswersInput = {
    id?: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
    form: Prisma.EventFormCreateNestedOneWithoutResponsesInput;
    registration: Prisma.EventRegistrationCreateNestedOneWithoutFormResponseInput;
};
export type EventFormResponseUncheckedCreateWithoutAnswersInput = {
    id?: string;
    formId: string;
    registrationId: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormResponseCreateOrConnectWithoutAnswersInput = {
    where: Prisma.EventFormResponseWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormResponseCreateWithoutAnswersInput, Prisma.EventFormResponseUncheckedCreateWithoutAnswersInput>;
};
export type EventFormResponseUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.EventFormResponseUpdateWithoutAnswersInput, Prisma.EventFormResponseUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.EventFormResponseCreateWithoutAnswersInput, Prisma.EventFormResponseUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.EventFormResponseWhereInput;
};
export type EventFormResponseUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.EventFormResponseWhereInput;
    data: Prisma.XOR<Prisma.EventFormResponseUpdateWithoutAnswersInput, Prisma.EventFormResponseUncheckedUpdateWithoutAnswersInput>;
};
export type EventFormResponseUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.EventFormUpdateOneRequiredWithoutResponsesNestedInput;
    registration?: Prisma.EventRegistrationUpdateOneRequiredWithoutFormResponseNestedInput;
};
export type EventFormResponseUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormResponseCreateManyFormInput = {
    id?: string;
    registrationId: string;
    submittedAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormResponseUpdateWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration?: Prisma.EventRegistrationUpdateOneRequiredWithoutFormResponseNestedInput;
    answers?: Prisma.EventFormAnswerUpdateManyWithoutResponseNestedInput;
};
export type EventFormResponseUncheckedUpdateWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EventFormAnswerUncheckedUpdateManyWithoutResponseNestedInput;
};
export type EventFormResponseUncheckedUpdateManyWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    registrationId?: Prisma.StringFieldUpdateOperationsInput | string;
    submittedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type EventFormResponseCountOutputType
 */
export type EventFormResponseCountOutputType = {
    answers: number;
};
export type EventFormResponseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | EventFormResponseCountOutputTypeCountAnswersArgs;
};
/**
 * EventFormResponseCountOutputType without action
 */
export type EventFormResponseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponseCountOutputType
     */
    select?: Prisma.EventFormResponseCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventFormResponseCountOutputType without action
 */
export type EventFormResponseCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventFormAnswerWhereInput;
};
export type EventFormResponseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    registrationId?: boolean;
    submittedAt?: boolean;
    updatedAt?: boolean;
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.EventRegistrationDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.EventFormResponse$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EventFormResponseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormResponse"]>;
export type EventFormResponseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    registrationId?: boolean;
    submittedAt?: boolean;
    updatedAt?: boolean;
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.EventRegistrationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormResponse"]>;
export type EventFormResponseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    registrationId?: boolean;
    submittedAt?: boolean;
    updatedAt?: boolean;
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.EventRegistrationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormResponse"]>;
export type EventFormResponseSelectScalar = {
    id?: boolean;
    formId?: boolean;
    registrationId?: boolean;
    submittedAt?: boolean;
    updatedAt?: boolean;
};
export type EventFormResponseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "formId" | "registrationId" | "submittedAt" | "updatedAt", ExtArgs["result"]["eventFormResponse"]>;
export type EventFormResponseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.EventRegistrationDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.EventFormResponse$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EventFormResponseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventFormResponseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.EventRegistrationDefaultArgs<ExtArgs>;
};
export type EventFormResponseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    registration?: boolean | Prisma.EventRegistrationDefaultArgs<ExtArgs>;
};
export type $EventFormResponsePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventFormResponse";
    objects: {
        form: Prisma.$EventFormPayload<ExtArgs>;
        registration: Prisma.$EventRegistrationPayload<ExtArgs>;
        answers: Prisma.$EventFormAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        formId: string;
        registrationId: string;
        submittedAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventFormResponse"]>;
    composites: {};
};
export type EventFormResponseGetPayload<S extends boolean | null | undefined | EventFormResponseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload, S>;
export type EventFormResponseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFormResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventFormResponseCountAggregateInputType | true;
};
export interface EventFormResponseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventFormResponse'];
        meta: {
            name: 'EventFormResponse';
        };
    };
    /**
     * Find zero or one EventFormResponse that matches the filter.
     * @param {EventFormResponseFindUniqueArgs} args - Arguments to find a EventFormResponse
     * @example
     * // Get one EventFormResponse
     * const eventFormResponse = await prisma.eventFormResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFormResponseFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFormResponseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventFormResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFormResponseFindUniqueOrThrowArgs} args - Arguments to find a EventFormResponse
     * @example
     * // Get one EventFormResponse
     * const eventFormResponse = await prisma.eventFormResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFormResponseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFormResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventFormResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseFindFirstArgs} args - Arguments to find a EventFormResponse
     * @example
     * // Get one EventFormResponse
     * const eventFormResponse = await prisma.eventFormResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFormResponseFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFormResponseFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventFormResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseFindFirstOrThrowArgs} args - Arguments to find a EventFormResponse
     * @example
     * // Get one EventFormResponse
     * const eventFormResponse = await prisma.eventFormResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFormResponseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFormResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventFormResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventFormResponses
     * const eventFormResponses = await prisma.eventFormResponse.findMany()
     *
     * // Get first 10 EventFormResponses
     * const eventFormResponses = await prisma.eventFormResponse.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventFormResponseWithIdOnly = await prisma.eventFormResponse.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFormResponseFindManyArgs>(args?: Prisma.SelectSubset<T, EventFormResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventFormResponse.
     * @param {EventFormResponseCreateArgs} args - Arguments to create a EventFormResponse.
     * @example
     * // Create one EventFormResponse
     * const EventFormResponse = await prisma.eventFormResponse.create({
     *   data: {
     *     // ... data to create a EventFormResponse
     *   }
     * })
     *
     */
    create<T extends EventFormResponseCreateArgs>(args: Prisma.SelectSubset<T, EventFormResponseCreateArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventFormResponses.
     * @param {EventFormResponseCreateManyArgs} args - Arguments to create many EventFormResponses.
     * @example
     * // Create many EventFormResponses
     * const eventFormResponse = await prisma.eventFormResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventFormResponseCreateManyArgs>(args?: Prisma.SelectSubset<T, EventFormResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventFormResponses and returns the data saved in the database.
     * @param {EventFormResponseCreateManyAndReturnArgs} args - Arguments to create many EventFormResponses.
     * @example
     * // Create many EventFormResponses
     * const eventFormResponse = await prisma.eventFormResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventFormResponses and only return the `id`
     * const eventFormResponseWithIdOnly = await prisma.eventFormResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventFormResponseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventFormResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventFormResponse.
     * @param {EventFormResponseDeleteArgs} args - Arguments to delete one EventFormResponse.
     * @example
     * // Delete one EventFormResponse
     * const EventFormResponse = await prisma.eventFormResponse.delete({
     *   where: {
     *     // ... filter to delete one EventFormResponse
     *   }
     * })
     *
     */
    delete<T extends EventFormResponseDeleteArgs>(args: Prisma.SelectSubset<T, EventFormResponseDeleteArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventFormResponse.
     * @param {EventFormResponseUpdateArgs} args - Arguments to update one EventFormResponse.
     * @example
     * // Update one EventFormResponse
     * const eventFormResponse = await prisma.eventFormResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventFormResponseUpdateArgs>(args: Prisma.SelectSubset<T, EventFormResponseUpdateArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventFormResponses.
     * @param {EventFormResponseDeleteManyArgs} args - Arguments to filter EventFormResponses to delete.
     * @example
     * // Delete a few EventFormResponses
     * const { count } = await prisma.eventFormResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventFormResponseDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventFormResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventFormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventFormResponses
     * const eventFormResponse = await prisma.eventFormResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventFormResponseUpdateManyArgs>(args: Prisma.SelectSubset<T, EventFormResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventFormResponses and returns the data updated in the database.
     * @param {EventFormResponseUpdateManyAndReturnArgs} args - Arguments to update many EventFormResponses.
     * @example
     * // Update many EventFormResponses
     * const eventFormResponse = await prisma.eventFormResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventFormResponses and only return the `id`
     * const eventFormResponseWithIdOnly = await prisma.eventFormResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventFormResponseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventFormResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventFormResponse.
     * @param {EventFormResponseUpsertArgs} args - Arguments to update or create a EventFormResponse.
     * @example
     * // Update or create a EventFormResponse
     * const eventFormResponse = await prisma.eventFormResponse.upsert({
     *   create: {
     *     // ... data to create a EventFormResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventFormResponse we want to update
     *   }
     * })
     */
    upsert<T extends EventFormResponseUpsertArgs>(args: Prisma.SelectSubset<T, EventFormResponseUpsertArgs<ExtArgs>>): Prisma.Prisma__EventFormResponseClient<runtime.Types.Result.GetResult<Prisma.$EventFormResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventFormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseCountArgs} args - Arguments to filter EventFormResponses to count.
     * @example
     * // Count the number of EventFormResponses
     * const count = await prisma.eventFormResponse.count({
     *   where: {
     *     // ... the filter for the EventFormResponses we want to count
     *   }
     * })
    **/
    count<T extends EventFormResponseCountArgs>(args?: Prisma.Subset<T, EventFormResponseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventFormResponseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventFormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventFormResponseAggregateArgs>(args: Prisma.Subset<T, EventFormResponseAggregateArgs>): Prisma.PrismaPromise<GetEventFormResponseAggregateType<T>>;
    /**
     * Group by EventFormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormResponseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventFormResponseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventFormResponseGroupByArgs['orderBy'];
    } : {
        orderBy?: EventFormResponseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventFormResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventFormResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventFormResponse model
     */
    readonly fields: EventFormResponseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventFormResponse.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventFormResponseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    form<T extends Prisma.EventFormDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventFormDefaultArgs<ExtArgs>>): Prisma.Prisma__EventFormClient<runtime.Types.Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registration<T extends Prisma.EventRegistrationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventRegistrationDefaultArgs<ExtArgs>>): Prisma.Prisma__EventRegistrationClient<runtime.Types.Result.GetResult<Prisma.$EventRegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.EventFormResponse$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventFormResponse$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EventFormResponse model
 */
export interface EventFormResponseFieldRefs {
    readonly id: Prisma.FieldRef<"EventFormResponse", 'String'>;
    readonly formId: Prisma.FieldRef<"EventFormResponse", 'String'>;
    readonly registrationId: Prisma.FieldRef<"EventFormResponse", 'String'>;
    readonly submittedAt: Prisma.FieldRef<"EventFormResponse", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventFormResponse", 'DateTime'>;
}
/**
 * EventFormResponse findUnique
 */
export type EventFormResponseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormResponse to fetch.
     */
    where: Prisma.EventFormResponseWhereUniqueInput;
};
/**
 * EventFormResponse findUniqueOrThrow
 */
export type EventFormResponseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormResponse to fetch.
     */
    where: Prisma.EventFormResponseWhereUniqueInput;
};
/**
 * EventFormResponse findFirst
 */
export type EventFormResponseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormResponse to fetch.
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormResponses to fetch.
     */
    orderBy?: Prisma.EventFormResponseOrderByWithRelationInput | Prisma.EventFormResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFormResponses.
     */
    cursor?: Prisma.EventFormResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormResponses.
     */
    distinct?: Prisma.EventFormResponseScalarFieldEnum | Prisma.EventFormResponseScalarFieldEnum[];
};
/**
 * EventFormResponse findFirstOrThrow
 */
export type EventFormResponseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormResponse to fetch.
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormResponses to fetch.
     */
    orderBy?: Prisma.EventFormResponseOrderByWithRelationInput | Prisma.EventFormResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFormResponses.
     */
    cursor?: Prisma.EventFormResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormResponses.
     */
    distinct?: Prisma.EventFormResponseScalarFieldEnum | Prisma.EventFormResponseScalarFieldEnum[];
};
/**
 * EventFormResponse findMany
 */
export type EventFormResponseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormResponses to fetch.
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormResponses to fetch.
     */
    orderBy?: Prisma.EventFormResponseOrderByWithRelationInput | Prisma.EventFormResponseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventFormResponses.
     */
    cursor?: Prisma.EventFormResponseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormResponses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormResponses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormResponses.
     */
    distinct?: Prisma.EventFormResponseScalarFieldEnum | Prisma.EventFormResponseScalarFieldEnum[];
};
/**
 * EventFormResponse create
 */
export type EventFormResponseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventFormResponse.
     */
    data: Prisma.XOR<Prisma.EventFormResponseCreateInput, Prisma.EventFormResponseUncheckedCreateInput>;
};
/**
 * EventFormResponse createMany
 */
export type EventFormResponseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventFormResponses.
     */
    data: Prisma.EventFormResponseCreateManyInput | Prisma.EventFormResponseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventFormResponse createManyAndReturn
 */
export type EventFormResponseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * The data used to create many EventFormResponses.
     */
    data: Prisma.EventFormResponseCreateManyInput | Prisma.EventFormResponseCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventFormResponse update
 */
export type EventFormResponseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventFormResponse.
     */
    data: Prisma.XOR<Prisma.EventFormResponseUpdateInput, Prisma.EventFormResponseUncheckedUpdateInput>;
    /**
     * Choose, which EventFormResponse to update.
     */
    where: Prisma.EventFormResponseWhereUniqueInput;
};
/**
 * EventFormResponse updateMany
 */
export type EventFormResponseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventFormResponses.
     */
    data: Prisma.XOR<Prisma.EventFormResponseUpdateManyMutationInput, Prisma.EventFormResponseUncheckedUpdateManyInput>;
    /**
     * Filter which EventFormResponses to update
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * Limit how many EventFormResponses to update.
     */
    limit?: number;
};
/**
 * EventFormResponse updateManyAndReturn
 */
export type EventFormResponseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * The data used to update EventFormResponses.
     */
    data: Prisma.XOR<Prisma.EventFormResponseUpdateManyMutationInput, Prisma.EventFormResponseUncheckedUpdateManyInput>;
    /**
     * Filter which EventFormResponses to update
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * Limit how many EventFormResponses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventFormResponse upsert
 */
export type EventFormResponseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventFormResponse to update in case it exists.
     */
    where: Prisma.EventFormResponseWhereUniqueInput;
    /**
     * In case the EventFormResponse found by the `where` argument doesn't exist, create a new EventFormResponse with this data.
     */
    create: Prisma.XOR<Prisma.EventFormResponseCreateInput, Prisma.EventFormResponseUncheckedCreateInput>;
    /**
     * In case the EventFormResponse was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventFormResponseUpdateInput, Prisma.EventFormResponseUncheckedUpdateInput>;
};
/**
 * EventFormResponse delete
 */
export type EventFormResponseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
    /**
     * Filter which EventFormResponse to delete.
     */
    where: Prisma.EventFormResponseWhereUniqueInput;
};
/**
 * EventFormResponse deleteMany
 */
export type EventFormResponseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormResponses to delete
     */
    where?: Prisma.EventFormResponseWhereInput;
    /**
     * Limit how many EventFormResponses to delete.
     */
    limit?: number;
};
/**
 * EventFormResponse.answers
 */
export type EventFormResponse$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EventFormAnswerWhereInput;
    orderBy?: Prisma.EventFormAnswerOrderByWithRelationInput | Prisma.EventFormAnswerOrderByWithRelationInput[];
    cursor?: Prisma.EventFormAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventFormAnswerScalarFieldEnum | Prisma.EventFormAnswerScalarFieldEnum[];
};
/**
 * EventFormResponse without action
 */
export type EventFormResponseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormResponse
     */
    select?: Prisma.EventFormResponseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormResponse
     */
    omit?: Prisma.EventFormResponseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormResponseInclude<ExtArgs> | null;
};
//# sourceMappingURL=EventFormResponse.d.ts.map