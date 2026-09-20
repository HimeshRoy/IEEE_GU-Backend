import type { AssignLeadershipPositionInput, ChangeOwnPasswordInput, CreatePrivilegedUserInput, UpdateOwnProfileInput, UpdateUserRoleInput } from "./users.types.js";
import type { UserRole } from "../../generated/prisma/client.js";
export declare function getCurrentUser(userId: string): Promise<{
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    memberProfile: {
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
    } | null;
    leadershipPositions: {
        id: string;
        position: import("../../generated/prisma/enums.js").BranchPosition;
        academicYearId: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
    }[];
} | {
    memberProfile: {
        id: string;
        userId: string;
        membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
        joinedAt: Date | null;
        profileVisibility: import("../../generated/prisma/enums.js").Visibility;
        approvedById: string | null;
        approvedAt: Date | null;
        rejectionReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null;
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    leadershipPositions: {
        id: string;
        position: import("../../generated/prisma/enums.js").BranchPosition;
        academicYearId: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
    }[];
}>;
export declare function updateOwnProfile(userId: string, input: UpdateOwnProfileInput): Promise<{
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    memberProfile: {
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
    } | null;
    leadershipPositions: {
        id: string;
        position: import("../../generated/prisma/enums.js").BranchPosition;
        academicYearId: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
    }[];
} | {
    memberProfile: {
        id: string;
        userId: string;
        membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
        joinedAt: Date | null;
        profileVisibility: import("../../generated/prisma/enums.js").Visibility;
        approvedById: string | null;
        approvedAt: Date | null;
        rejectionReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null;
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    leadershipPositions: {
        id: string;
        position: import("../../generated/prisma/enums.js").BranchPosition;
        academicYearId: string;
        startDate: Date | null;
        endDate: Date | null;
        isCurrent: boolean;
    }[];
}>;
export declare function changeOwnPassword(userId: string, input: ChangeOwnPasswordInput): Promise<{
    changed: boolean;
}>;
export declare function createPrivilegedUser(actorId: string, input: CreatePrivilegedUserInput): Promise<{
    memberProfile: {
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
    };
    id: string;
    email: string;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function updateUserRole(actorId: string, targetUserId: string, input: UpdateUserRoleInput): Promise<{
    id: string;
    email: string;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function setUserActiveStatus(actorId: string, targetUserId: string, isActive: boolean): Promise<{
    id: string;
    email: string;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function listUsers(actorId: string): Promise<({
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    memberProfile: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
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
    } | null;
} | {
    memberProfile: {
        id: string;
        membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
        joinedAt: Date | null;
        profileVisibility: import("../../generated/prisma/enums.js").Visibility;
        approvedById: string | null;
        approvedAt: Date | null;
        rejectionReason: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null;
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare function assignLeadershipPosition(actorId: string, input: AssignLeadershipPositionInput): Promise<({
    user: {
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: UserRole;
        isActive: boolean;
        profileImage: string | null;
        bio: string | null;
        memberProfile: {
            id: string;
            userId: string;
            membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
            joinedAt: Date | null;
            department: string | null;
            course: string | null;
            year: string | null;
            rollNumber: string | null;
        } | null;
    };
    academicYear: {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
}) | {
    user: {
        memberProfile: {
            id: string;
            userId: string;
            membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
            joinedAt: Date | null;
        } | null;
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: UserRole;
        isActive: boolean;
        profileImage: string | null;
        bio: string | null;
    };
    academicYear: {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
}>;
export declare function updateLeadershipPosition(actorId: string, leadershipId: string, input: AssignLeadershipPositionInput): Promise<({
    user: {
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: UserRole;
        isActive: boolean;
        profileImage: string | null;
        bio: string | null;
        memberProfile: {
            id: string;
            userId: string;
            membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
            joinedAt: Date | null;
            department: string | null;
            course: string | null;
            year: string | null;
            rollNumber: string | null;
        } | null;
    };
    academicYear: {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
}) | {
    user: {
        memberProfile: {
            id: string;
            userId: string;
            membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
            joinedAt: Date | null;
        } | null;
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: UserRole;
        isActive: boolean;
        profileImage: string | null;
        bio: string | null;
    };
    academicYear: {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
}>;
export declare function removeLeadershipPosition(actorId: string, leadershipId: string): Promise<{
    id: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    userId: string;
}>;
export declare function uploadUserProfileImage(userId: string, file: Express.Multer.File): Promise<{
    id: string;
    email: string;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    ieeeMembershipNumber: string | null;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function getPublicLeadership(): Promise<({
    id: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: UserRole;
        isActive: boolean;
        profileImage: string | null;
        bio: string | null;
        memberProfile: {
            id: string;
            membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
            joinedAt: Date | null;
            department: string | null;
            course: string | null;
            year: string | null;
            rollNumber: string | null;
        } | null;
    };
    userId: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
    academicYear: {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
} | {
    user: {
        memberProfile: {
            id: string;
            membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
            joinedAt: Date | null;
        } | null;
        id: string;
        email: string;
        ieeeMembershipNumber: string | null;
        firstName: string;
        lastName: string | null;
        phone: string | null;
        role: UserRole;
        isActive: boolean;
        profileImage: string | null;
        bio: string | null;
    };
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    position: import("../../generated/prisma/enums.js").BranchPosition;
    academicYearId: string;
    startDate: Date | null;
    endDate: Date | null;
    isCurrent: boolean;
    academicYear: {
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        isCurrent: boolean;
    };
})[]>;
export declare function listMembers(actorId: string): Promise<({
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
    memberProfile: {
        id: string;
        membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
        joinedAt: Date | null;
        department: string | null;
        course: string | null;
        year: string | null;
        rollNumber: string | null;
        profileVisibility: import("../../generated/prisma/enums.js").Visibility;
        approvedAt: Date | null;
    } | null;
} | {
    memberProfile: {
        id: string;
        membershipStatus: import("../../generated/prisma/enums.js").MembershipStatus;
        joinedAt: Date | null;
        profileVisibility: import("../../generated/prisma/enums.js").Visibility;
        approvedAt: Date | null;
    } | null;
    id: string;
    email: string;
    ieeeMembershipNumber: string | null;
    firstName: string;
    lastName: string | null;
    phone: string | null;
    role: UserRole;
    isActive: boolean;
    profileImage: string | null;
    bio: string | null;
    createdAt: Date;
    updatedAt: Date;
})[]>;
//# sourceMappingURL=users.service.d.ts.map