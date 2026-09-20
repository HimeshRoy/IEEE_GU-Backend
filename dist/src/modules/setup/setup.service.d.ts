import type { InitialSetupInput } from "./setup.dto.js";
export declare function createInitialWebmaster(input: InitialSetupInput): Promise<{
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string | null;
        role: import("../../generated/prisma/enums.js").UserRole;
        isActive: boolean;
    };
    academicYear: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
    leadership: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        position: import("../../generated/prisma/enums.js").BranchPosition;
        academicYearId: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
    };
}>;
//# sourceMappingURL=setup.service.d.ts.map