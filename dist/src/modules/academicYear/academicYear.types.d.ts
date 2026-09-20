import type { AcademicYear } from "../../generated/prisma/client.js";
export type AcademicYearWithLeadershipCount = AcademicYear & {
    _count: {
        leadershipPositions: number;
    };
};
//# sourceMappingURL=academicYear.types.d.ts.map