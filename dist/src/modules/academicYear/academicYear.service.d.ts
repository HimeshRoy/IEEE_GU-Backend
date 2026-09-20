import type { CreateAcademicYearInput, UpdateAcademicYearInput } from "./academicYear.dto.js";
export declare function getAcademicYears(): Promise<({
    _count: {
        leadershipPositions: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
})[]>;
export declare function getAcademicYearById(id: string): Promise<{
    _count: {
        leadershipPositions: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
}>;
export declare function createAcademicYear(data: CreateAcademicYearInput): Promise<{
    _count: {
        leadershipPositions: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
}>;
export declare function updateAcademicYear(id: string, data: UpdateAcademicYearInput): Promise<{
    _count: {
        leadershipPositions: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
}>;
//# sourceMappingURL=academicYear.service.d.ts.map