export declare function getMyMembership(userId: string): Promise<{
    user: {
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rejectionReason: string | null;
    membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
    joinedAt: Date | null;
    department: string | null;
    course: string | null;
    year: string | null;
    rollNumber: string | null;
    profileVisibility: import("../../generated/prisma/enums.js").Visibility;
    approvedById: string | null;
    approvedAt: Date | null;
}>;
export declare function getPendingMemberships(): Promise<({
    user: {
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rejectionReason: string | null;
    membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
    joinedAt: Date | null;
    department: string | null;
    course: string | null;
    year: string | null;
    rollNumber: string | null;
    profileVisibility: import("../../generated/prisma/enums.js").Visibility;
    approvedById: string | null;
    approvedAt: Date | null;
})[]>;
export declare function approveMembership(memberProfileId: string, approverId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rejectionReason: string | null;
    membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
    joinedAt: Date | null;
    department: string | null;
    course: string | null;
    year: string | null;
    rollNumber: string | null;
    profileVisibility: import("../../generated/prisma/enums.js").Visibility;
    approvedById: string | null;
    approvedAt: Date | null;
}>;
export declare function rejectMembership(memberProfileId: string, approverId: string, rejectionReason: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rejectionReason: string | null;
    membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
    joinedAt: Date | null;
    department: string | null;
    course: string | null;
    year: string | null;
    rollNumber: string | null;
    profileVisibility: import("../../generated/prisma/enums.js").Visibility;
    approvedById: string | null;
    approvedAt: Date | null;
}>;
export declare function applyForMembership(userId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    rejectionReason: string | null;
    membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
    joinedAt: Date | null;
    department: string | null;
    course: string | null;
    year: string | null;
    rollNumber: string | null;
    profileVisibility: import("../../generated/prisma/enums.js").Visibility;
    approvedById: string | null;
    approvedAt: Date | null;
}>;
//# sourceMappingURL=membership.service.d.ts.map