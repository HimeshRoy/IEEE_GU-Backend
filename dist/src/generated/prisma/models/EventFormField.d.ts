import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EventFormField
 *
 */
export type EventFormFieldModel = runtime.Types.Result.DefaultSelection<Prisma.$EventFormFieldPayload>;
export type AggregateEventFormField = {
    _count: EventFormFieldCountAggregateOutputType | null;
    _avg: EventFormFieldAvgAggregateOutputType | null;
    _sum: EventFormFieldSumAggregateOutputType | null;
    _min: EventFormFieldMinAggregateOutputType | null;
    _max: EventFormFieldMaxAggregateOutputType | null;
};
export type EventFormFieldAvgAggregateOutputType = {
    order: number | null;
};
export type EventFormFieldSumAggregateOutputType = {
    order: number | null;
};
export type EventFormFieldMinAggregateOutputType = {
    id: string | null;
    formId: string | null;
    key: string | null;
    label: string | null;
    description: string | null;
    type: $Enums.EventFormFieldType | null;
    scope: $Enums.EventFormFieldScope | null;
    required: boolean | null;
    placeholder: string | null;
    order: number | null;
    isSystemField: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventFormFieldMaxAggregateOutputType = {
    id: string | null;
    formId: string | null;
    key: string | null;
    label: string | null;
    description: string | null;
    type: $Enums.EventFormFieldType | null;
    scope: $Enums.EventFormFieldScope | null;
    required: boolean | null;
    placeholder: string | null;
    order: number | null;
    isSystemField: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EventFormFieldCountAggregateOutputType = {
    id: number;
    formId: number;
    key: number;
    label: number;
    description: number;
    type: number;
    scope: number;
    required: number;
    placeholder: number;
    options: number;
    validation: number;
    order: number;
    isSystemField: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EventFormFieldAvgAggregateInputType = {
    order?: true;
};
export type EventFormFieldSumAggregateInputType = {
    order?: true;
};
export type EventFormFieldMinAggregateInputType = {
    id?: true;
    formId?: true;
    key?: true;
    label?: true;
    description?: true;
    type?: true;
    scope?: true;
    required?: true;
    placeholder?: true;
    order?: true;
    isSystemField?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventFormFieldMaxAggregateInputType = {
    id?: true;
    formId?: true;
    key?: true;
    label?: true;
    description?: true;
    type?: true;
    scope?: true;
    required?: true;
    placeholder?: true;
    order?: true;
    isSystemField?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EventFormFieldCountAggregateInputType = {
    id?: true;
    formId?: true;
    key?: true;
    label?: true;
    description?: true;
    type?: true;
    scope?: true;
    required?: true;
    placeholder?: true;
    options?: true;
    validation?: true;
    order?: true;
    isSystemField?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EventFormFieldAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormField to aggregate.
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: Prisma.EventFormFieldOrderByWithRelationInput | Prisma.EventFormFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EventFormFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EventFormFields
    **/
    _count?: true | EventFormFieldCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EventFormFieldAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EventFormFieldSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EventFormFieldMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EventFormFieldMaxAggregateInputType;
};
export type GetEventFormFieldAggregateType<T extends EventFormFieldAggregateArgs> = {
    [P in keyof T & keyof AggregateEventFormField]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventFormField[P]> : Prisma.GetScalarType<T[P], AggregateEventFormField[P]>;
};
export type EventFormFieldGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventFormFieldWhereInput;
    orderBy?: Prisma.EventFormFieldOrderByWithAggregationInput | Prisma.EventFormFieldOrderByWithAggregationInput[];
    by: Prisma.EventFormFieldScalarFieldEnum[] | Prisma.EventFormFieldScalarFieldEnum;
    having?: Prisma.EventFormFieldScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventFormFieldCountAggregateInputType | true;
    _avg?: EventFormFieldAvgAggregateInputType;
    _sum?: EventFormFieldSumAggregateInputType;
    _min?: EventFormFieldMinAggregateInputType;
    _max?: EventFormFieldMaxAggregateInputType;
};
export type EventFormFieldGroupByOutputType = {
    id: string;
    formId: string;
    key: string;
    label: string;
    description: string | null;
    type: $Enums.EventFormFieldType;
    scope: $Enums.EventFormFieldScope;
    required: boolean;
    placeholder: string | null;
    options: runtime.JsonValue | null;
    validation: runtime.JsonValue | null;
    order: number;
    isSystemField: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: EventFormFieldCountAggregateOutputType | null;
    _avg: EventFormFieldAvgAggregateOutputType | null;
    _sum: EventFormFieldSumAggregateOutputType | null;
    _min: EventFormFieldMinAggregateOutputType | null;
    _max: EventFormFieldMaxAggregateOutputType | null;
};
export type GetEventFormFieldGroupByPayload<T extends EventFormFieldGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventFormFieldGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventFormFieldGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventFormFieldGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventFormFieldGroupByOutputType[P]>;
}>>;
export type EventFormFieldWhereInput = {
    AND?: Prisma.EventFormFieldWhereInput | Prisma.EventFormFieldWhereInput[];
    OR?: Prisma.EventFormFieldWhereInput[];
    NOT?: Prisma.EventFormFieldWhereInput | Prisma.EventFormFieldWhereInput[];
    id?: Prisma.StringFilter<"EventFormField"> | string;
    formId?: Prisma.StringFilter<"EventFormField"> | string;
    key?: Prisma.StringFilter<"EventFormField"> | string;
    label?: Prisma.StringFilter<"EventFormField"> | string;
    description?: Prisma.StringNullableFilter<"EventFormField"> | string | null;
    type?: Prisma.EnumEventFormFieldTypeFilter<"EventFormField"> | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFilter<"EventFormField"> | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFilter<"EventFormField"> | boolean;
    placeholder?: Prisma.StringNullableFilter<"EventFormField"> | string | null;
    options?: Prisma.JsonNullableFilter<"EventFormField">;
    validation?: Prisma.JsonNullableFilter<"EventFormField">;
    order?: Prisma.IntFilter<"EventFormField"> | number;
    isSystemField?: Prisma.BoolFilter<"EventFormField"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventFormField"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormField"> | Date | string;
    form?: Prisma.XOR<Prisma.EventFormScalarRelationFilter, Prisma.EventFormWhereInput>;
    answers?: Prisma.EventFormAnswerListRelationFilter;
};
export type EventFormFieldOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    placeholder?: Prisma.SortOrderInput | Prisma.SortOrder;
    options?: Prisma.SortOrderInput | Prisma.SortOrder;
    validation?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    isSystemField?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    form?: Prisma.EventFormOrderByWithRelationInput;
    answers?: Prisma.EventFormAnswerOrderByRelationAggregateInput;
};
export type EventFormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    formId_key?: Prisma.EventFormFieldFormIdKeyCompoundUniqueInput;
    AND?: Prisma.EventFormFieldWhereInput | Prisma.EventFormFieldWhereInput[];
    OR?: Prisma.EventFormFieldWhereInput[];
    NOT?: Prisma.EventFormFieldWhereInput | Prisma.EventFormFieldWhereInput[];
    formId?: Prisma.StringFilter<"EventFormField"> | string;
    key?: Prisma.StringFilter<"EventFormField"> | string;
    label?: Prisma.StringFilter<"EventFormField"> | string;
    description?: Prisma.StringNullableFilter<"EventFormField"> | string | null;
    type?: Prisma.EnumEventFormFieldTypeFilter<"EventFormField"> | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFilter<"EventFormField"> | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFilter<"EventFormField"> | boolean;
    placeholder?: Prisma.StringNullableFilter<"EventFormField"> | string | null;
    options?: Prisma.JsonNullableFilter<"EventFormField">;
    validation?: Prisma.JsonNullableFilter<"EventFormField">;
    order?: Prisma.IntFilter<"EventFormField"> | number;
    isSystemField?: Prisma.BoolFilter<"EventFormField"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventFormField"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormField"> | Date | string;
    form?: Prisma.XOR<Prisma.EventFormScalarRelationFilter, Prisma.EventFormWhereInput>;
    answers?: Prisma.EventFormAnswerListRelationFilter;
}, "id" | "formId_key">;
export type EventFormFieldOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    type?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    placeholder?: Prisma.SortOrderInput | Prisma.SortOrder;
    options?: Prisma.SortOrderInput | Prisma.SortOrder;
    validation?: Prisma.SortOrderInput | Prisma.SortOrder;
    order?: Prisma.SortOrder;
    isSystemField?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EventFormFieldCountOrderByAggregateInput;
    _avg?: Prisma.EventFormFieldAvgOrderByAggregateInput;
    _max?: Prisma.EventFormFieldMaxOrderByAggregateInput;
    _min?: Prisma.EventFormFieldMinOrderByAggregateInput;
    _sum?: Prisma.EventFormFieldSumOrderByAggregateInput;
};
export type EventFormFieldScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventFormFieldScalarWhereWithAggregatesInput | Prisma.EventFormFieldScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventFormFieldScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventFormFieldScalarWhereWithAggregatesInput | Prisma.EventFormFieldScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EventFormField"> | string;
    formId?: Prisma.StringWithAggregatesFilter<"EventFormField"> | string;
    key?: Prisma.StringWithAggregatesFilter<"EventFormField"> | string;
    label?: Prisma.StringWithAggregatesFilter<"EventFormField"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"EventFormField"> | string | null;
    type?: Prisma.EnumEventFormFieldTypeWithAggregatesFilter<"EventFormField"> | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeWithAggregatesFilter<"EventFormField"> | $Enums.EventFormFieldScope;
    required?: Prisma.BoolWithAggregatesFilter<"EventFormField"> | boolean;
    placeholder?: Prisma.StringNullableWithAggregatesFilter<"EventFormField"> | string | null;
    options?: Prisma.JsonNullableWithAggregatesFilter<"EventFormField">;
    validation?: Prisma.JsonNullableWithAggregatesFilter<"EventFormField">;
    order?: Prisma.IntWithAggregatesFilter<"EventFormField"> | number;
    isSystemField?: Prisma.BoolWithAggregatesFilter<"EventFormField"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EventFormField"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EventFormField"> | Date | string;
};
export type EventFormFieldCreateInput = {
    id?: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    form: Prisma.EventFormCreateNestedOneWithoutFieldsInput;
    answers?: Prisma.EventFormAnswerCreateNestedManyWithoutFieldInput;
};
export type EventFormFieldUncheckedCreateInput = {
    id?: string;
    formId: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EventFormAnswerUncheckedCreateNestedManyWithoutFieldInput;
};
export type EventFormFieldUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.EventFormUpdateOneRequiredWithoutFieldsNestedInput;
    answers?: Prisma.EventFormAnswerUpdateManyWithoutFieldNestedInput;
};
export type EventFormFieldUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EventFormAnswerUncheckedUpdateManyWithoutFieldNestedInput;
};
export type EventFormFieldCreateManyInput = {
    id?: string;
    formId: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormFieldUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormFieldUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormFieldListRelationFilter = {
    every?: Prisma.EventFormFieldWhereInput;
    some?: Prisma.EventFormFieldWhereInput;
    none?: Prisma.EventFormFieldWhereInput;
};
export type EventFormFieldOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventFormFieldFormIdKeyCompoundUniqueInput = {
    formId: string;
    key: string;
};
export type EventFormFieldCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    placeholder?: Prisma.SortOrder;
    options?: Prisma.SortOrder;
    validation?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    isSystemField?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormFieldAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type EventFormFieldMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    placeholder?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    isSystemField?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormFieldMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    formId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    required?: Prisma.SortOrder;
    placeholder?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    isSystemField?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EventFormFieldSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type EventFormFieldScalarRelationFilter = {
    is?: Prisma.EventFormFieldWhereInput;
    isNot?: Prisma.EventFormFieldWhereInput;
};
export type EventFormFieldCreateNestedManyWithoutFormInput = {
    create?: Prisma.XOR<Prisma.EventFormFieldCreateWithoutFormInput, Prisma.EventFormFieldUncheckedCreateWithoutFormInput> | Prisma.EventFormFieldCreateWithoutFormInput[] | Prisma.EventFormFieldUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormFieldCreateOrConnectWithoutFormInput | Prisma.EventFormFieldCreateOrConnectWithoutFormInput[];
    createMany?: Prisma.EventFormFieldCreateManyFormInputEnvelope;
    connect?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
};
export type EventFormFieldUncheckedCreateNestedManyWithoutFormInput = {
    create?: Prisma.XOR<Prisma.EventFormFieldCreateWithoutFormInput, Prisma.EventFormFieldUncheckedCreateWithoutFormInput> | Prisma.EventFormFieldCreateWithoutFormInput[] | Prisma.EventFormFieldUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormFieldCreateOrConnectWithoutFormInput | Prisma.EventFormFieldCreateOrConnectWithoutFormInput[];
    createMany?: Prisma.EventFormFieldCreateManyFormInputEnvelope;
    connect?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
};
export type EventFormFieldUpdateManyWithoutFormNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormFieldCreateWithoutFormInput, Prisma.EventFormFieldUncheckedCreateWithoutFormInput> | Prisma.EventFormFieldCreateWithoutFormInput[] | Prisma.EventFormFieldUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormFieldCreateOrConnectWithoutFormInput | Prisma.EventFormFieldCreateOrConnectWithoutFormInput[];
    upsert?: Prisma.EventFormFieldUpsertWithWhereUniqueWithoutFormInput | Prisma.EventFormFieldUpsertWithWhereUniqueWithoutFormInput[];
    createMany?: Prisma.EventFormFieldCreateManyFormInputEnvelope;
    set?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    disconnect?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    delete?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    connect?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    update?: Prisma.EventFormFieldUpdateWithWhereUniqueWithoutFormInput | Prisma.EventFormFieldUpdateWithWhereUniqueWithoutFormInput[];
    updateMany?: Prisma.EventFormFieldUpdateManyWithWhereWithoutFormInput | Prisma.EventFormFieldUpdateManyWithWhereWithoutFormInput[];
    deleteMany?: Prisma.EventFormFieldScalarWhereInput | Prisma.EventFormFieldScalarWhereInput[];
};
export type EventFormFieldUncheckedUpdateManyWithoutFormNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormFieldCreateWithoutFormInput, Prisma.EventFormFieldUncheckedCreateWithoutFormInput> | Prisma.EventFormFieldCreateWithoutFormInput[] | Prisma.EventFormFieldUncheckedCreateWithoutFormInput[];
    connectOrCreate?: Prisma.EventFormFieldCreateOrConnectWithoutFormInput | Prisma.EventFormFieldCreateOrConnectWithoutFormInput[];
    upsert?: Prisma.EventFormFieldUpsertWithWhereUniqueWithoutFormInput | Prisma.EventFormFieldUpsertWithWhereUniqueWithoutFormInput[];
    createMany?: Prisma.EventFormFieldCreateManyFormInputEnvelope;
    set?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    disconnect?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    delete?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    connect?: Prisma.EventFormFieldWhereUniqueInput | Prisma.EventFormFieldWhereUniqueInput[];
    update?: Prisma.EventFormFieldUpdateWithWhereUniqueWithoutFormInput | Prisma.EventFormFieldUpdateWithWhereUniqueWithoutFormInput[];
    updateMany?: Prisma.EventFormFieldUpdateManyWithWhereWithoutFormInput | Prisma.EventFormFieldUpdateManyWithWhereWithoutFormInput[];
    deleteMany?: Prisma.EventFormFieldScalarWhereInput | Prisma.EventFormFieldScalarWhereInput[];
};
export type EnumEventFormFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.EventFormFieldType;
};
export type EnumEventFormFieldScopeFieldUpdateOperationsInput = {
    set?: $Enums.EventFormFieldScope;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EventFormFieldCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.EventFormFieldCreateWithoutAnswersInput, Prisma.EventFormFieldUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EventFormFieldCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.EventFormFieldWhereUniqueInput;
};
export type EventFormFieldUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.EventFormFieldCreateWithoutAnswersInput, Prisma.EventFormFieldUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EventFormFieldCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.EventFormFieldUpsertWithoutAnswersInput;
    connect?: Prisma.EventFormFieldWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventFormFieldUpdateToOneWithWhereWithoutAnswersInput, Prisma.EventFormFieldUpdateWithoutAnswersInput>, Prisma.EventFormFieldUncheckedUpdateWithoutAnswersInput>;
};
export type EventFormFieldCreateWithoutFormInput = {
    id?: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EventFormAnswerCreateNestedManyWithoutFieldInput;
};
export type EventFormFieldUncheckedCreateWithoutFormInput = {
    id?: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EventFormAnswerUncheckedCreateNestedManyWithoutFieldInput;
};
export type EventFormFieldCreateOrConnectWithoutFormInput = {
    where: Prisma.EventFormFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormFieldCreateWithoutFormInput, Prisma.EventFormFieldUncheckedCreateWithoutFormInput>;
};
export type EventFormFieldCreateManyFormInputEnvelope = {
    data: Prisma.EventFormFieldCreateManyFormInput | Prisma.EventFormFieldCreateManyFormInput[];
    skipDuplicates?: boolean;
};
export type EventFormFieldUpsertWithWhereUniqueWithoutFormInput = {
    where: Prisma.EventFormFieldWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventFormFieldUpdateWithoutFormInput, Prisma.EventFormFieldUncheckedUpdateWithoutFormInput>;
    create: Prisma.XOR<Prisma.EventFormFieldCreateWithoutFormInput, Prisma.EventFormFieldUncheckedCreateWithoutFormInput>;
};
export type EventFormFieldUpdateWithWhereUniqueWithoutFormInput = {
    where: Prisma.EventFormFieldWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventFormFieldUpdateWithoutFormInput, Prisma.EventFormFieldUncheckedUpdateWithoutFormInput>;
};
export type EventFormFieldUpdateManyWithWhereWithoutFormInput = {
    where: Prisma.EventFormFieldScalarWhereInput;
    data: Prisma.XOR<Prisma.EventFormFieldUpdateManyMutationInput, Prisma.EventFormFieldUncheckedUpdateManyWithoutFormInput>;
};
export type EventFormFieldScalarWhereInput = {
    AND?: Prisma.EventFormFieldScalarWhereInput | Prisma.EventFormFieldScalarWhereInput[];
    OR?: Prisma.EventFormFieldScalarWhereInput[];
    NOT?: Prisma.EventFormFieldScalarWhereInput | Prisma.EventFormFieldScalarWhereInput[];
    id?: Prisma.StringFilter<"EventFormField"> | string;
    formId?: Prisma.StringFilter<"EventFormField"> | string;
    key?: Prisma.StringFilter<"EventFormField"> | string;
    label?: Prisma.StringFilter<"EventFormField"> | string;
    description?: Prisma.StringNullableFilter<"EventFormField"> | string | null;
    type?: Prisma.EnumEventFormFieldTypeFilter<"EventFormField"> | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFilter<"EventFormField"> | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFilter<"EventFormField"> | boolean;
    placeholder?: Prisma.StringNullableFilter<"EventFormField"> | string | null;
    options?: Prisma.JsonNullableFilter<"EventFormField">;
    validation?: Prisma.JsonNullableFilter<"EventFormField">;
    order?: Prisma.IntFilter<"EventFormField"> | number;
    isSystemField?: Prisma.BoolFilter<"EventFormField"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"EventFormField"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EventFormField"> | Date | string;
};
export type EventFormFieldCreateWithoutAnswersInput = {
    id?: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    form: Prisma.EventFormCreateNestedOneWithoutFieldsInput;
};
export type EventFormFieldUncheckedCreateWithoutAnswersInput = {
    id?: string;
    formId: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormFieldCreateOrConnectWithoutAnswersInput = {
    where: Prisma.EventFormFieldWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventFormFieldCreateWithoutAnswersInput, Prisma.EventFormFieldUncheckedCreateWithoutAnswersInput>;
};
export type EventFormFieldUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.EventFormFieldUpdateWithoutAnswersInput, Prisma.EventFormFieldUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.EventFormFieldCreateWithoutAnswersInput, Prisma.EventFormFieldUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.EventFormFieldWhereInput;
};
export type EventFormFieldUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.EventFormFieldWhereInput;
    data: Prisma.XOR<Prisma.EventFormFieldUpdateWithoutAnswersInput, Prisma.EventFormFieldUncheckedUpdateWithoutAnswersInput>;
};
export type EventFormFieldUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    form?: Prisma.EventFormUpdateOneRequiredWithoutFieldsNestedInput;
};
export type EventFormFieldUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    formId?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventFormFieldCreateManyFormInput = {
    id?: string;
    key: string;
    label: string;
    description?: string | null;
    type: $Enums.EventFormFieldType;
    scope?: $Enums.EventFormFieldScope;
    required?: boolean;
    placeholder?: string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order: number;
    isSystemField?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EventFormFieldUpdateWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EventFormAnswerUpdateManyWithoutFieldNestedInput;
};
export type EventFormFieldUncheckedUpdateWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EventFormAnswerUncheckedUpdateManyWithoutFieldNestedInput;
};
export type EventFormFieldUncheckedUpdateManyWithoutFormInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    type?: Prisma.EnumEventFormFieldTypeFieldUpdateOperationsInput | $Enums.EventFormFieldType;
    scope?: Prisma.EnumEventFormFieldScopeFieldUpdateOperationsInput | $Enums.EventFormFieldScope;
    required?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    placeholder?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    options?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    validation?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    isSystemField?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type EventFormFieldCountOutputType
 */
export type EventFormFieldCountOutputType = {
    answers: number;
};
export type EventFormFieldCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | EventFormFieldCountOutputTypeCountAnswersArgs;
};
/**
 * EventFormFieldCountOutputType without action
 */
export type EventFormFieldCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormFieldCountOutputType
     */
    select?: Prisma.EventFormFieldCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EventFormFieldCountOutputType without action
 */
export type EventFormFieldCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventFormAnswerWhereInput;
};
export type EventFormFieldSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    key?: boolean;
    label?: boolean;
    description?: boolean;
    type?: boolean;
    scope?: boolean;
    required?: boolean;
    placeholder?: boolean;
    options?: boolean;
    validation?: boolean;
    order?: boolean;
    isSystemField?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.EventFormField$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EventFormFieldCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormField"]>;
export type EventFormFieldSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    key?: boolean;
    label?: boolean;
    description?: boolean;
    type?: boolean;
    scope?: boolean;
    required?: boolean;
    placeholder?: boolean;
    options?: boolean;
    validation?: boolean;
    order?: boolean;
    isSystemField?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormField"]>;
export type EventFormFieldSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    formId?: boolean;
    key?: boolean;
    label?: boolean;
    description?: boolean;
    type?: boolean;
    scope?: boolean;
    required?: boolean;
    placeholder?: boolean;
    options?: boolean;
    validation?: boolean;
    order?: boolean;
    isSystemField?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventFormField"]>;
export type EventFormFieldSelectScalar = {
    id?: boolean;
    formId?: boolean;
    key?: boolean;
    label?: boolean;
    description?: boolean;
    type?: boolean;
    scope?: boolean;
    required?: boolean;
    placeholder?: boolean;
    options?: boolean;
    validation?: boolean;
    order?: boolean;
    isSystemField?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EventFormFieldOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "formId" | "key" | "label" | "description" | "type" | "scope" | "required" | "placeholder" | "options" | "validation" | "order" | "isSystemField" | "createdAt" | "updatedAt", ExtArgs["result"]["eventFormField"]>;
export type EventFormFieldInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.EventFormField$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EventFormFieldCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EventFormFieldIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
};
export type EventFormFieldIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    form?: boolean | Prisma.EventFormDefaultArgs<ExtArgs>;
};
export type $EventFormFieldPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventFormField";
    objects: {
        form: Prisma.$EventFormPayload<ExtArgs>;
        answers: Prisma.$EventFormAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        formId: string;
        key: string;
        label: string;
        description: string | null;
        type: $Enums.EventFormFieldType;
        scope: $Enums.EventFormFieldScope;
        required: boolean;
        placeholder: string | null;
        options: runtime.JsonValue | null;
        validation: runtime.JsonValue | null;
        order: number;
        isSystemField: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["eventFormField"]>;
    composites: {};
};
export type EventFormFieldGetPayload<S extends boolean | null | undefined | EventFormFieldDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload, S>;
export type EventFormFieldCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventFormFieldCountAggregateInputType | true;
};
export interface EventFormFieldDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventFormField'];
        meta: {
            name: 'EventFormField';
        };
    };
    /**
     * Find zero or one EventFormField that matches the filter.
     * @param {EventFormFieldFindUniqueArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFormFieldFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFormFieldFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EventFormField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFormFieldFindUniqueOrThrowArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFormFieldFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventFormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldFindFirstArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFormFieldFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFormFieldFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EventFormField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldFindFirstOrThrowArgs} args - Arguments to find a EventFormField
     * @example
     * // Get one EventFormField
     * const eventFormField = await prisma.eventFormField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFormFieldFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EventFormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventFormFields
     * const eventFormFields = await prisma.eventFormField.findMany()
     *
     * // Get first 10 EventFormFields
     * const eventFormFields = await prisma.eventFormField.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventFormFieldWithIdOnly = await prisma.eventFormField.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EventFormFieldFindManyArgs>(args?: Prisma.SelectSubset<T, EventFormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EventFormField.
     * @param {EventFormFieldCreateArgs} args - Arguments to create a EventFormField.
     * @example
     * // Create one EventFormField
     * const EventFormField = await prisma.eventFormField.create({
     *   data: {
     *     // ... data to create a EventFormField
     *   }
     * })
     *
     */
    create<T extends EventFormFieldCreateArgs>(args: Prisma.SelectSubset<T, EventFormFieldCreateArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EventFormFields.
     * @param {EventFormFieldCreateManyArgs} args - Arguments to create many EventFormFields.
     * @example
     * // Create many EventFormFields
     * const eventFormField = await prisma.eventFormField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EventFormFieldCreateManyArgs>(args?: Prisma.SelectSubset<T, EventFormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EventFormFields and returns the data saved in the database.
     * @param {EventFormFieldCreateManyAndReturnArgs} args - Arguments to create many EventFormFields.
     * @example
     * // Create many EventFormFields
     * const eventFormField = await prisma.eventFormField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EventFormFields and only return the `id`
     * const eventFormFieldWithIdOnly = await prisma.eventFormField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EventFormFieldCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventFormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EventFormField.
     * @param {EventFormFieldDeleteArgs} args - Arguments to delete one EventFormField.
     * @example
     * // Delete one EventFormField
     * const EventFormField = await prisma.eventFormField.delete({
     *   where: {
     *     // ... filter to delete one EventFormField
     *   }
     * })
     *
     */
    delete<T extends EventFormFieldDeleteArgs>(args: Prisma.SelectSubset<T, EventFormFieldDeleteArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EventFormField.
     * @param {EventFormFieldUpdateArgs} args - Arguments to update one EventFormField.
     * @example
     * // Update one EventFormField
     * const eventFormField = await prisma.eventFormField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EventFormFieldUpdateArgs>(args: Prisma.SelectSubset<T, EventFormFieldUpdateArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EventFormFields.
     * @param {EventFormFieldDeleteManyArgs} args - Arguments to filter EventFormFields to delete.
     * @example
     * // Delete a few EventFormFields
     * const { count } = await prisma.eventFormField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EventFormFieldDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventFormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventFormFields
     * const eventFormField = await prisma.eventFormField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EventFormFieldUpdateManyArgs>(args: Prisma.SelectSubset<T, EventFormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EventFormFields and returns the data updated in the database.
     * @param {EventFormFieldUpdateManyAndReturnArgs} args - Arguments to update many EventFormFields.
     * @example
     * // Update many EventFormFields
     * const eventFormField = await prisma.eventFormField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EventFormFields and only return the `id`
     * const eventFormFieldWithIdOnly = await prisma.eventFormField.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventFormFieldUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventFormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EventFormField.
     * @param {EventFormFieldUpsertArgs} args - Arguments to update or create a EventFormField.
     * @example
     * // Update or create a EventFormField
     * const eventFormField = await prisma.eventFormField.upsert({
     *   create: {
     *     // ... data to create a EventFormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventFormField we want to update
     *   }
     * })
     */
    upsert<T extends EventFormFieldUpsertArgs>(args: Prisma.SelectSubset<T, EventFormFieldUpsertArgs<ExtArgs>>): Prisma.Prisma__EventFormFieldClient<runtime.Types.Result.GetResult<Prisma.$EventFormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EventFormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldCountArgs} args - Arguments to filter EventFormFields to count.
     * @example
     * // Count the number of EventFormFields
     * const count = await prisma.eventFormField.count({
     *   where: {
     *     // ... the filter for the EventFormFields we want to count
     *   }
     * })
    **/
    count<T extends EventFormFieldCountArgs>(args?: Prisma.Subset<T, EventFormFieldCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventFormFieldCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EventFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventFormFieldAggregateArgs>(args: Prisma.Subset<T, EventFormFieldAggregateArgs>): Prisma.PrismaPromise<GetEventFormFieldAggregateType<T>>;
    /**
     * Group by EventFormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormFieldGroupByArgs} args - Group by arguments.
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
    groupBy<T extends EventFormFieldGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventFormFieldGroupByArgs['orderBy'];
    } : {
        orderBy?: EventFormFieldGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventFormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EventFormField model
     */
    readonly fields: EventFormFieldFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EventFormField.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EventFormFieldClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    form<T extends Prisma.EventFormDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventFormDefaultArgs<ExtArgs>>): Prisma.Prisma__EventFormClient<runtime.Types.Result.GetResult<Prisma.$EventFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.EventFormField$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventFormField$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventFormAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the EventFormField model
 */
export interface EventFormFieldFieldRefs {
    readonly id: Prisma.FieldRef<"EventFormField", 'String'>;
    readonly formId: Prisma.FieldRef<"EventFormField", 'String'>;
    readonly key: Prisma.FieldRef<"EventFormField", 'String'>;
    readonly label: Prisma.FieldRef<"EventFormField", 'String'>;
    readonly description: Prisma.FieldRef<"EventFormField", 'String'>;
    readonly type: Prisma.FieldRef<"EventFormField", 'EventFormFieldType'>;
    readonly scope: Prisma.FieldRef<"EventFormField", 'EventFormFieldScope'>;
    readonly required: Prisma.FieldRef<"EventFormField", 'Boolean'>;
    readonly placeholder: Prisma.FieldRef<"EventFormField", 'String'>;
    readonly options: Prisma.FieldRef<"EventFormField", 'Json'>;
    readonly validation: Prisma.FieldRef<"EventFormField", 'Json'>;
    readonly order: Prisma.FieldRef<"EventFormField", 'Int'>;
    readonly isSystemField: Prisma.FieldRef<"EventFormField", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"EventFormField", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EventFormField", 'DateTime'>;
}
/**
 * EventFormField findUnique
 */
export type EventFormFieldFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormField to fetch.
     */
    where: Prisma.EventFormFieldWhereUniqueInput;
};
/**
 * EventFormField findUniqueOrThrow
 */
export type EventFormFieldFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormField to fetch.
     */
    where: Prisma.EventFormFieldWhereUniqueInput;
};
/**
 * EventFormField findFirst
 */
export type EventFormFieldFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormField to fetch.
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: Prisma.EventFormFieldOrderByWithRelationInput | Prisma.EventFormFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFormFields.
     */
    cursor?: Prisma.EventFormFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormFields.
     */
    distinct?: Prisma.EventFormFieldScalarFieldEnum | Prisma.EventFormFieldScalarFieldEnum[];
};
/**
 * EventFormField findFirstOrThrow
 */
export type EventFormFieldFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormField to fetch.
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: Prisma.EventFormFieldOrderByWithRelationInput | Prisma.EventFormFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EventFormFields.
     */
    cursor?: Prisma.EventFormFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormFields.
     */
    distinct?: Prisma.EventFormFieldScalarFieldEnum | Prisma.EventFormFieldScalarFieldEnum[];
};
/**
 * EventFormField findMany
 */
export type EventFormFieldFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * Filter, which EventFormFields to fetch.
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EventFormFields to fetch.
     */
    orderBy?: Prisma.EventFormFieldOrderByWithRelationInput | Prisma.EventFormFieldOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EventFormFields.
     */
    cursor?: Prisma.EventFormFieldWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EventFormFields from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EventFormFields.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EventFormFields.
     */
    distinct?: Prisma.EventFormFieldScalarFieldEnum | Prisma.EventFormFieldScalarFieldEnum[];
};
/**
 * EventFormField create
 */
export type EventFormFieldCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * The data needed to create a EventFormField.
     */
    data: Prisma.XOR<Prisma.EventFormFieldCreateInput, Prisma.EventFormFieldUncheckedCreateInput>;
};
/**
 * EventFormField createMany
 */
export type EventFormFieldCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventFormFields.
     */
    data: Prisma.EventFormFieldCreateManyInput | Prisma.EventFormFieldCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EventFormField createManyAndReturn
 */
export type EventFormFieldCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * The data used to create many EventFormFields.
     */
    data: Prisma.EventFormFieldCreateManyInput | Prisma.EventFormFieldCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EventFormField update
 */
export type EventFormFieldUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * The data needed to update a EventFormField.
     */
    data: Prisma.XOR<Prisma.EventFormFieldUpdateInput, Prisma.EventFormFieldUncheckedUpdateInput>;
    /**
     * Choose, which EventFormField to update.
     */
    where: Prisma.EventFormFieldWhereUniqueInput;
};
/**
 * EventFormField updateMany
 */
export type EventFormFieldUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EventFormFields.
     */
    data: Prisma.XOR<Prisma.EventFormFieldUpdateManyMutationInput, Prisma.EventFormFieldUncheckedUpdateManyInput>;
    /**
     * Filter which EventFormFields to update
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * Limit how many EventFormFields to update.
     */
    limit?: number;
};
/**
 * EventFormField updateManyAndReturn
 */
export type EventFormFieldUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * The data used to update EventFormFields.
     */
    data: Prisma.XOR<Prisma.EventFormFieldUpdateManyMutationInput, Prisma.EventFormFieldUncheckedUpdateManyInput>;
    /**
     * Filter which EventFormFields to update
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * Limit how many EventFormFields to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EventFormField upsert
 */
export type EventFormFieldUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * The filter to search for the EventFormField to update in case it exists.
     */
    where: Prisma.EventFormFieldWhereUniqueInput;
    /**
     * In case the EventFormField found by the `where` argument doesn't exist, create a new EventFormField with this data.
     */
    create: Prisma.XOR<Prisma.EventFormFieldCreateInput, Prisma.EventFormFieldUncheckedCreateInput>;
    /**
     * In case the EventFormField was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EventFormFieldUpdateInput, Prisma.EventFormFieldUncheckedUpdateInput>;
};
/**
 * EventFormField delete
 */
export type EventFormFieldDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
    /**
     * Filter which EventFormField to delete.
     */
    where: Prisma.EventFormFieldWhereUniqueInput;
};
/**
 * EventFormField deleteMany
 */
export type EventFormFieldDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormFields to delete
     */
    where?: Prisma.EventFormFieldWhereInput;
    /**
     * Limit how many EventFormFields to delete.
     */
    limit?: number;
};
/**
 * EventFormField.answers
 */
export type EventFormField$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * EventFormField without action
 */
export type EventFormFieldDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormField
     */
    select?: Prisma.EventFormFieldSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EventFormField
     */
    omit?: Prisma.EventFormFieldOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EventFormFieldInclude<ExtArgs> | null;
};
//# sourceMappingURL=EventFormField.d.ts.map