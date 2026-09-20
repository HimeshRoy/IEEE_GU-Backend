import argon2 from "argon2";
import { prisma } from "../../config/prisma.js";
import type {
  AssignLeadershipPositionInput,
  ChangeOwnPasswordInput,
  CreatePrivilegedUserInput,
  UpdateOwnProfileInput,
  UpdateUserRoleInput,
} from "./users.types.js";
import type { UserRole } from "../../generated/prisma/client.js";
import {
  deleteImageFromCloudinary,
  uploadProfileImageToCloudinary,
} from "../../services/cloudinary.service.js";

const ADMINISTRATIVE_ROLES: UserRole[] = [
  "WEBMASTER",
  "IEEE_COUNSELOR",
  "FACULTY_ADVISOR",
];

const STUDENT_LEADERSHIP_POSITIONS = [
  "CHAIRMAN",
  "VICE_CHAIRMAN",
  "JOINT_SECRETARY",
  "PHOTOGRAPHER",
  "TREASURER",
] as const;

const FACULTY_PROFILE_ROLES: UserRole[] = [
  "FACULTY",
  "FACULTY_ADVISOR",
  "FACULTY_MEMBER",
  "IEEE_COUNSELOR",
];

async function hasAdministrativeAccess(actorId: string) {
  const actor = await prisma.user.findUnique({
    where: {
      id: actorId,
    },
    select: {
      role: true,
    },
  });

  if (!actor) {
    throw new Error("Authenticated user not found");
  }

  if (ADMINISTRATIVE_ROLES.includes(actor.role)) {
    return true;
  }

  const chairman = await prisma.branchLeadership.findFirst({
    where: {
      userId: actorId,
      position: "CHAIRMAN",
      isCurrent: true,
    },
    select: {
      id: true,
    },
  });

  return Boolean(chairman);
}

function canManageRole(actorRole: UserRole, targetRole: UserRole): boolean {
  if (
    actorRole === "WEBMASTER" ||
    actorRole === "IEEE_COUNSELOR" ||
    actorRole === "FACULTY_ADVISOR" ||
    actorRole === "CHAIRMAN"
  ) {
    return (
      targetRole === "STUDENT" ||
      targetRole === "FACULTY" ||
      targetRole === "FACULTY_ADVISOR" ||
      targetRole === "IEEE_COUNSELOR" ||
      targetRole === "FACULTY_MEMBER" ||
      targetRole === "CHAIRMAN" ||
      targetRole === "VICE_CHAIRMAN" ||
      targetRole === "JOINT_SECRETARY" ||
      targetRole === "PHOTOGRAPHER" ||
      targetRole === "TREASURER"
    );
  }

  return false;
}

async function canManageUser(actorId: string, targetUserId: string) {
  if (!(await hasAdministrativeAccess(actorId))) {
    return false;
  }

  const actor = await prisma.user.findUnique({
    where: {
      id: actorId,
    },
    select: {
      role: true,
    },
  });

  const target = await prisma.user.findUnique({
    where: {
      id: targetUserId,
    },
    select: {
      role: true,
    },
  });

  if (!actor || !target) {
    return false;
  }

  if (target.role === "WEBMASTER") {
    return actor.role === "WEBMASTER";
  }

  return true;
}

function validateRoleChange(
  actorRole: UserRole,
  currentRole: UserRole,
  newRole: UserRole,
) {
  if (currentRole === newRole) {
    throw new Error("User already has this role");
  }

  if (newRole === "WEBMASTER") {
    throw new Error("WEBMASTER cannot be assigned through this operation");
  }

  if (currentRole === "WEBMASTER") {
    throw new Error("WEBMASTER cannot be changed through this operation");
  }

  if (!canManageRole(actorRole, currentRole)) {
    throw new Error("You are not authorized to modify this user");
  }

  if (!canManageRole(actorRole, newRole)) {
    throw new Error("You are not authorized to assign this role");
  }
}

function toUserManagementResult(user: {
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
}) {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    role: user.role,
    isActive: user.isActive,
    ieeeMembershipNumber: user.ieeeMembershipNumber,
    profileImage: user.profileImage,
    bio: user.bio,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}

function validateLeadershipEligibility(
  targetUser: {
    role: UserRole;
    isActive: boolean;
    memberProfile: {
      membershipStatus: string;
    } | null;
  },
  position: AssignLeadershipPositionInput["position"],
) {
  if (!targetUser.isActive) {
    throw new Error("Inactive users cannot be assigned leadership positions");
  }

  const isStudentPosition = STUDENT_LEADERSHIP_POSITIONS.includes(
    position as (typeof STUDENT_LEADERSHIP_POSITIONS)[number],
  );

  if (isStudentPosition) {
    if (targetUser.role !== position) {
      throw new Error(
        `${position} position can only be assigned to a user with the same role`,
      );
    }

    if (
      !targetUser.memberProfile ||
      targetUser.memberProfile.membershipStatus !== "ACTIVE"
    ) {
      throw new Error(
        "Student leadership positions require an active IEEE GU membership",
      );
    }
  }

  if (position === "IEEE_COUNSELOR" && targetUser.role !== "IEEE_COUNSELOR") {
    throw new Error("IEEE_COUNSELOR position requires IEEE_COUNSELOR role");
  }

  if (position === "FACULTY_MEMBER" && targetUser.role !== "FACULTY_MEMBER") {
    throw new Error("FACULTY_MEMBER position requires FACULTY_MEMBER role");
  }

  if (position === "WEBMASTER" && targetUser.role !== "WEBMASTER") {
    throw new Error("WEBMASTER position requires WEBMASTER role");
  }
}

export async function getCurrentUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      isActive: true,
      ieeeMembershipNumber: true,
      profileImage: true,
      bio: true,
      createdAt: true,
      updatedAt: true,
      memberProfile: {
        select: {
          id: true,
          userId: true,
          membershipStatus: true,
          joinedAt: true,
          department: true,
          course: true,
          year: true,
          rollNumber: true,
          profileVisibility: true,
          approvedById: true,
          approvedAt: true,
          rejectionReason: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      leadershipPositions: {
        where: {
          isCurrent: true,
        },
        select: {
          id: true,
          position: true,
          academicYearId: true,
          startDate: true,
          endDate: true,
          isCurrent: true,
        },
        orderBy: {
          startDate: "desc",
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.isActive) {
    throw new Error("This account is inactive");
  }

  if (FACULTY_PROFILE_ROLES.includes(user.role)) {
    return {
      ...user,
      memberProfile: user.memberProfile
        ? {
            id: user.memberProfile.id,
            userId: user.memberProfile.userId,
            membershipStatus: user.memberProfile.membershipStatus,
            joinedAt: user.memberProfile.joinedAt,
            profileVisibility: user.memberProfile.profileVisibility,
            approvedById: user.memberProfile.approvedById,
            approvedAt: user.memberProfile.approvedAt,
            rejectionReason: user.memberProfile.rejectionReason,
            createdAt: user.memberProfile.createdAt,
            updatedAt: user.memberProfile.updatedAt,
          }
        : null,
    };
  }

  return user;
}

function hasProfileManagementAccess(user: {
  role: UserRole;
  leadershipPositions: {
    position: string;
  }[];
}) {
  if (
    user.role === "WEBMASTER" ||
    user.role === "IEEE_COUNSELOR" ||
    user.role === "FACULTY_ADVISOR" ||
    user.role === "FACULTY"
  ) {
    return true;
  }

  if (user.role === "FACULTY_MEMBER") {
    return user.leadershipPositions.some(
      (leadership) => leadership.position === "FACULTY_MEMBER",
    );
  }

  return (
    STUDENT_LEADERSHIP_POSITIONS.includes(
      user.role as (typeof STUDENT_LEADERSHIP_POSITIONS)[number],
    ) &&
    user.leadershipPositions.some(
      (leadership) => leadership.position === user.role,
    )
  );
}

export async function updateOwnProfile(
  userId: string,
  input: UpdateOwnProfileInput,
) {
  const existingUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      isActive: true,
      role: true,
      ieeeMembershipNumber: true,
      memberProfile: {
        select: {
          id: true,
        },
      },
      leadershipPositions: {
        where: {
          isCurrent: true,
        },
        select: {
          position: true,
        },
      },
    },
  });

  if (!existingUser) {
    throw new Error("User not found");
  }

  if (!existingUser.isActive) {
    throw new Error("This account is inactive");
  }

  if (!hasProfileManagementAccess(existingUser)) {
    throw new Error(
      "Only branch leadership members and authorized faculty can update profiles",
    );
  }

  if (input.ieeeMembershipNumber !== undefined) {
    const ieeeMembershipNumber = input.ieeeMembershipNumber.trim();

    if (ieeeMembershipNumber !== (existingUser.ieeeMembershipNumber ?? "")) {
      if (ieeeMembershipNumber) {
        const existingMembership = await prisma.user.findFirst({
          where: {
            ieeeMembershipNumber,
            id: {
              not: userId,
            },
          },
          select: {
            id: true,
          },
        });

        if (existingMembership) {
          throw new Error("This IEEE Membership Number is already registered");
        }
      }
    }
  }

  const isFacultyProfile = FACULTY_PROFILE_ROLES.includes(existingUser.role);

  if (
    isFacultyProfile &&
    (input.department !== undefined ||
      input.course !== undefined ||
      input.year !== undefined ||
      input.rollNumber !== undefined)
  ) {
    throw new Error(
      "Department, course, year, and roll number are not available for faculty accounts",
    );
  }

  const updatedUser = await prisma.$transaction(async (tx) => {
    const user = await tx.user.update({
      where: {
        id: userId,
      },
      data: {
        ...(input.firstName !== undefined
          ? {
              firstName: input.firstName.trim(),
            }
          : {}),
        ...(input.lastName !== undefined
          ? {
              lastName: input.lastName.trim() || null,
            }
          : {}),
        ...(input.phone !== undefined
          ? {
              phone: input.phone.trim() || null,
            }
          : {}),
        ...(input.bio !== undefined
          ? {
              bio: input.bio.trim() || null,
            }
          : {}),
        ...(input.ieeeMembershipNumber !== undefined
          ? {
              ieeeMembershipNumber: input.ieeeMembershipNumber.trim() || null,
            }
          : {}),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        ieeeMembershipNumber: true,
        profileImage: true,
        bio: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (existingUser.memberProfile && !isFacultyProfile) {
      await tx.memberProfile.update({
        where: {
          userId,
        },
        data: {
          ...(input.department !== undefined
            ? {
                department: input.department.trim() || null,
              }
            : {}),
          ...(input.course !== undefined
            ? {
                course: input.course.trim() || null,
              }
            : {}),
          ...(input.year !== undefined
            ? {
                year: input.year.trim() || null,
              }
            : {}),
          ...(input.rollNumber !== undefined
            ? {
                rollNumber: input.rollNumber.trim() || null,
              }
            : {}),
        },
      });
    } else if (
      input.department !== undefined ||
      input.course !== undefined ||
      input.year !== undefined ||
      input.rollNumber !== undefined
    ) {
      throw new Error(
        "Member profile information is not available for this account",
      );
    }

    await tx.auditLog.create({
      data: {
        userId,
        action: "UPDATE",
        entityType: "USER",
        entityId: userId,
        description: "Updated own profile information",
      },
    });

    return user;
  });

  return getCurrentUser(updatedUser.id);
}

export async function changeOwnPassword(
  userId: string,
  input: ChangeOwnPasswordInput,
) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      password: true,
      isActive: true,
      role: true,
      leadershipPositions: {
        where: {
          isCurrent: true,
        },
        select: {
          position: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.isActive) {
    throw new Error("This account is inactive");
  }

  if (!hasProfileManagementAccess(user)) {
    throw new Error(
      "Only branch leadership members and authorized faculty can change passwords",
    );
  }

  const validPassword = await argon2.verify(
    user.password,
    input.currentPassword,
  );

  if (!validPassword) {
    throw new Error("Current password is incorrect");
  }

  const passwordHash = await argon2.hash(input.newPassword);

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: {
        id: userId,
      },
      data: {
        password: passwordHash,
      },
    });

    await tx.auditLog.create({
      data: {
        userId,
        action: "UPDATE",
        entityType: "USER",
        entityId: userId,
        description: "Changed account password",
      },
    });
  });

  return {
    changed: true,
  };
}

export async function createPrivilegedUser(
  actorId: string,
  input: CreatePrivilegedUserInput,
) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to create privileged users");
  }

  if (input.role === "WEBMASTER") {
    throw new Error(
      "WEBMASTER accounts cannot be created through this operation",
    );
  }

  const actor = await prisma.user.findUnique({
    where: {
      id: actorId,
    },
    select: {
      role: true,
    },
  });

  if (!actor) {
    throw new Error("Authenticated user not found");
  }

  if (!canManageRole(actor.role, input.role)) {
    throw new Error("You are not authorized to create this role");
  }

  const email = input.email.trim().toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  if (existingUser) {
    throw new Error("An account with this email already exists");
  }

  const ieeeMembershipNumber = input.ieeeMembershipNumber?.trim() || null;

  if (ieeeMembershipNumber) {
    const existingMembership = await prisma.user.findUnique({
      where: {
        ieeeMembershipNumber,
      },
      select: {
        id: true,
      },
    });

    if (existingMembership) {
      throw new Error("This IEEE Membership Number is already registered");
    }
  }

  const passwordHash = await argon2.hash(input.password);
  const now = new Date();

  const result = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email,
        password: passwordHash,
        firstName: input.firstName.trim(),
        lastName: input.lastName?.trim() || null,
        phone: input.phone?.trim() || null,
        role: input.role,
        isActive: true,
        ieeeMembershipNumber,
      },
    });

    const memberProfile = await tx.memberProfile.create({
      data: {
        userId: user.id,
        membershipStatus: "ACTIVE",
        approvedById: actorId,
        approvedAt: now,
        joinedAt: now,
        rejectionReason: null,
      },
    });

    await tx.auditLog.create({
      data: {
        userId: actorId,
        action: "CREATE",
        entityType: "USER",
        entityId: user.id,
        description:
          input.role === "STUDENT"
            ? "Created student account and directly approved IEEE GU membership"
            : `Created ${input.role} account`,
      },
    });

    return {
      user,
      memberProfile,
    };
  });

  return {
    ...toUserManagementResult(result.user),
    memberProfile: result.memberProfile,
  };
}

export async function updateUserRole(
  actorId: string,
  targetUserId: string,
  input: UpdateUserRoleInput,
) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to modify users");
  }

  const actor = await prisma.user.findUnique({
    where: {
      id: actorId,
    },
    select: {
      role: true,
    },
  });

  if (!actor) {
    throw new Error("Authenticated user not found");
  }

  const targetUser = await prisma.user.findUnique({
    where: {
      id: targetUserId,
    },
    include: {
      leadershipPositions: {
        where: {
          isCurrent: true,
        },
      },
    },
  });

  if (!targetUser) {
    throw new Error("User not found");
  }

  if (actorId === targetUserId) {
    throw new Error("You cannot change your own role");
  }

  if (targetUser.role === "WEBMASTER") {
    throw new Error("WEBMASTER cannot be changed through this operation");
  }

  validateRoleChange(actor.role, targetUser.role, input.role);

  const now = new Date();

  const updatedUser = await prisma.$transaction(async (tx) => {
    const user = await tx.user.update({
      where: {
        id: targetUserId,
      },
      data: {
        role: input.role,
      },
    });

    if (
      STUDENT_LEADERSHIP_POSITIONS.includes(
        input.role as (typeof STUDENT_LEADERSHIP_POSITIONS)[number],
      )
    ) {
      const existingMemberProfile = await tx.memberProfile.findUnique({
        where: {
          userId: targetUserId,
        },
        select: {
          id: true,
        },
      });

      if (existingMemberProfile) {
        await tx.memberProfile.update({
          where: {
            userId: targetUserId,
          },
          data: {
            membershipStatus: "ACTIVE",
            approvedById: actorId,
            approvedAt: now,
            joinedAt: now,
            rejectionReason: null,
          },
        });
      } else {
        await tx.memberProfile.create({
          data: {
            userId: targetUserId,
            membershipStatus: "ACTIVE",
            approvedById: actorId,
            approvedAt: now,
            joinedAt: now,
            rejectionReason: null,
          },
        });
      }
    }

    for (const leadership of targetUser.leadershipPositions) {
      let positionRemainsValid = true;

      if (leadership.position === "WEBMASTER" && input.role !== "WEBMASTER") {
        positionRemainsValid = false;
      }

      if (
        leadership.position === "IEEE_COUNSELOR" &&
        input.role !== "IEEE_COUNSELOR"
      ) {
        positionRemainsValid = false;
      }

      if (
        leadership.position === "FACULTY_MEMBER" &&
        input.role !== "FACULTY_MEMBER"
      ) {
        positionRemainsValid = false;
      }

      if (
        STUDENT_LEADERSHIP_POSITIONS.includes(
          leadership.position as (typeof STUDENT_LEADERSHIP_POSITIONS)[number],
        ) &&
        input.role !== leadership.position
      ) {
        positionRemainsValid = false;
      }

      if (!positionRemainsValid) {
        await tx.branchLeadership.update({
          where: {
            id: leadership.id,
          },
          data: {
            isCurrent: false,
            endDate: now,
          },
        });
      }
    }

    await tx.auditLog.create({
      data: {
        userId: actorId,
        action: "UPDATE",
        entityType: "USER",
        entityId: targetUserId,
        description: `Changed user role from ${targetUser.role} to ${input.role}`,
      },
    });

    return user;
  });

  return toUserManagementResult(updatedUser);
}

export async function setUserActiveStatus(
  actorId: string,
  targetUserId: string,
  isActive: boolean,
) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to modify users");
  }

  const targetUser = await prisma.user.findUnique({
    where: {
      id: targetUserId,
    },
    select: {
      role: true,
    },
  });

  if (!targetUser) {
    throw new Error("User not found");
  }

  if (actorId === targetUserId) {
    throw new Error("You cannot change your own account status");
  }

  if (targetUser.role === "WEBMASTER") {
    throw new Error("WEBMASTER account cannot be deactivated here");
  }

  const canManage = await canManageUser(actorId, targetUserId);

  if (!canManage) {
    throw new Error("You are not authorized to modify this user");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: targetUserId,
    },
    data: {
      isActive,
    },
  });

  await prisma.auditLog.create({
    data: {
      userId: actorId,
      action: "UPDATE",
      entityType: "USER",
      entityId: targetUserId,
      description: `User account ${isActive ? "activated" : "deactivated"}`,
    },
  });

  return toUserManagementResult(updatedUser);
}

export async function listUsers(actorId: string) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to view users");
  }

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      isActive: true,
      ieeeMembershipNumber: true,
      profileImage: true,
      bio: true,
      createdAt: true,
      updatedAt: true,
      memberProfile: {
        select: {
          id: true,
          membershipStatus: true,
          joinedAt: true,
          department: true,
          course: true,
          year: true,
          rollNumber: true,
          profileVisibility: true,
          approvedById: true,
          approvedAt: true,
          rejectionReason: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  return users.map((user) => {
    if (!FACULTY_PROFILE_ROLES.includes(user.role)) {
      return user;
    }

    return {
      ...user,
      memberProfile: user.memberProfile
        ? {
            id: user.memberProfile.id,
            membershipStatus: user.memberProfile.membershipStatus,
            joinedAt: user.memberProfile.joinedAt,
            profileVisibility: user.memberProfile.profileVisibility,
            approvedById: user.memberProfile.approvedById,
            approvedAt: user.memberProfile.approvedAt,
            rejectionReason: user.memberProfile.rejectionReason,
            createdAt: user.memberProfile.createdAt,
            updatedAt: user.memberProfile.updatedAt,
          }
        : null,
    };
  });
}

export async function assignLeadershipPosition(
  actorId: string,
  input: AssignLeadershipPositionInput,
) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to assign leadership positions");
  }

  const targetUser = await prisma.user.findUnique({
    where: {
      id: input.userId,
    },
    include: {
      memberProfile: true,
    },
  });

  if (!targetUser) {
    throw new Error("User not found");
  }

  validateLeadershipEligibility(targetUser, input.position);

  const academicYear = await prisma.academicYear.findUnique({
    where: {
      id: input.academicYearId,
    },
  });

  if (!academicYear) {
    throw new Error("Academic year not found");
  }

  if (input.startDate && input.endDate && input.endDate <= input.startDate) {
    throw new Error("Leadership end date must be after start date");
  }

  const existingPosition = await prisma.branchLeadership.findUnique({
    where: {
      position_academicYearId: {
        position: input.position,
        academicYearId: input.academicYearId,
      },
    },
  });

  if (existingPosition) {
    throw new Error(
      "This leadership position is already assigned for this academic year",
    );
  }

  const leadership = await prisma.$transaction(async (tx) => {
    const created = await tx.branchLeadership.create({
      data: {
        userId: input.userId,
        position: input.position,
        academicYearId: input.academicYearId,
        startDate: input.startDate ?? null,
        endDate: input.endDate ?? null,
        isCurrent: true,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            role: true,
            isActive: true,
            ieeeMembershipNumber: true,
            profileImage: true,
            bio: true,
            memberProfile: {
              select: {
                id: true,
                userId: true,
                membershipStatus: true,
                joinedAt: true,
                department: true,
                course: true,
                year: true,
                rollNumber: true,
              },
            },
          },
        },
        academicYear: {
          select: {
            id: true,
            name: true,
            startDate: true,
            endDate: true,
            isCurrent: true,
          },
        },
      },
    });

    await tx.auditLog.create({
      data: {
        userId: actorId,
        action: "CREATE",
        entityType: "BRANCH_LEADERSHIP",
        entityId: created.id,
        description: `Assigned ${input.position} position`,
      },
    });

    return created;
  });

  if (FACULTY_PROFILE_ROLES.includes(leadership.user.role)) {
    const { memberProfile, ...user } = leadership.user;
    return {
      ...leadership,
      user: {
        ...user,
        memberProfile: memberProfile
          ? {
              id: memberProfile.id,
              userId: memberProfile.userId,
              membershipStatus: memberProfile.membershipStatus,
              joinedAt: memberProfile.joinedAt,
            }
          : null,
      },
    };
  }

  return leadership;
}

export async function updateLeadershipPosition(
  actorId: string,
  leadershipId: string,
  input: AssignLeadershipPositionInput,
) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to update leadership positions");
  }

  const existingLeadership = await prisma.branchLeadership.findUnique({
    where: {
      id: leadershipId,
    },
    include: {
      user: {
        include: {
          memberProfile: true,
        },
      },
    },
  });

  if (!existingLeadership) {
    throw new Error("Leadership position not found");
  }

  const targetUser = await prisma.user.findUnique({
    where: {
      id: input.userId,
    },
    include: {
      memberProfile: true,
    },
  });

  if (!targetUser) {
    throw new Error("User not found");
  }

  validateLeadershipEligibility(targetUser, input.position);

  const academicYear = await prisma.academicYear.findUnique({
    where: {
      id: input.academicYearId,
    },
  });

  if (!academicYear) {
    throw new Error("Academic year not found");
  }

  if (input.startDate && input.endDate && input.endDate <= input.startDate) {
    throw new Error("Leadership end date must be after start date");
  }

  const duplicatePosition = await prisma.branchLeadership.findFirst({
    where: {
      id: {
        not: leadershipId,
      },
      position: input.position,
      academicYearId: input.academicYearId,
    },
    select: {
      id: true,
    },
  });

  if (duplicatePosition) {
    throw new Error(
      "This leadership position is already assigned for this academic year",
    );
  }

  const updatedLeadership = await prisma.$transaction(async (tx) => {
    const updated = await tx.branchLeadership.update({
      where: {
        id: leadershipId,
      },
      data: {
        userId: input.userId,
        position: input.position,
        academicYearId: input.academicYearId,
        startDate: input.startDate ?? null,
        endDate: input.endDate ?? null,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            role: true,
            isActive: true,
            ieeeMembershipNumber: true,
            profileImage: true,
            bio: true,
            memberProfile: {
              select: {
                id: true,
                userId: true,
                membershipStatus: true,
                joinedAt: true,
                department: true,
                course: true,
                year: true,
                rollNumber: true,
              },
            },
          },
        },
        academicYear: {
          select: {
            id: true,
            name: true,
            startDate: true,
            endDate: true,
            isCurrent: true,
          },
        },
      },
    });

    await tx.auditLog.create({
      data: {
        userId: actorId,
        action: "UPDATE",
        entityType: "BRANCH_LEADERSHIP",
        entityId: leadershipId,
        description: `Updated leadership position to ${input.position}`,
      },
    });

    return updated;
  });

  if (FACULTY_PROFILE_ROLES.includes(updatedLeadership.user.role)) {
    const { memberProfile, ...user } = updatedLeadership.user;
    return {
      ...updatedLeadership,
      user: {
        ...user,
        memberProfile: memberProfile
          ? {
              id: memberProfile.id,
              userId: memberProfile.userId,
              membershipStatus: memberProfile.membershipStatus,
              joinedAt: memberProfile.joinedAt,
            }
          : null,
      },
    };
  }

  return updatedLeadership;
}

export async function removeLeadershipPosition(
  actorId: string,
  leadershipId: string,
) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to remove leadership positions");
  }

  const leadership = await prisma.branchLeadership.findUnique({
    where: {
      id: leadershipId,
    },
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  if (!leadership) {
    throw new Error("Leadership position not found");
  }

  await prisma.$transaction(async (tx) => {
    await tx.branchLeadership.delete({
      where: {
        id: leadershipId,
      },
    });

    await tx.auditLog.create({
      data: {
        userId: actorId,
        action: "DELETE",
        entityType: "BRANCH_LEADERSHIP",
        entityId: leadershipId,
        description: `Removed ${leadership.position} leadership position from ${leadership.user.firstName}${leadership.user.lastName ? ` ${leadership.user.lastName}` : ""}`,
      },
    });
  });

  return {
    id: leadershipId,
    position: leadership.position,
    userId: leadership.userId,
  };
}

function extractCloudinaryPublicId(imageUrl: string) {
  try {
    const url = new URL(imageUrl);
    const uploadIndex = url.pathname.indexOf("/upload/");

    if (uploadIndex === -1) {
      return null;
    }

    let path = url.pathname.slice(uploadIndex + "/upload/".length);

    path = path.replace(/^v\d+\//, "");

    const extensionIndex = path.lastIndexOf(".");

    if (extensionIndex !== -1) {
      path = path.slice(0, extensionIndex);
    }

    return path || null;
  } catch {
    return null;
  }
}

export async function uploadUserProfileImage(
  userId: string,
  file: Express.Multer.File,
) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      role: true,
      profileImage: true,
      leadershipPositions: {
        where: {
          isCurrent: true,
        },
        select: {
          position: true,
        },
      },
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const isPrivilegedRole =
    user.role === "WEBMASTER" ||
    user.role === "IEEE_COUNSELOR" ||
    user.role === "FACULTY_ADVISOR" ||
    user.role === "FACULTY";

  const hasFacultyMemberPosition =
    user.role === "FACULTY_MEMBER" &&
    user.leadershipPositions.some(
      (leadership) => leadership.position === "FACULTY_MEMBER",
    );

  const hasStudentLeadershipPosition =
    STUDENT_LEADERSHIP_POSITIONS.includes(
      user.role as (typeof STUDENT_LEADERSHIP_POSITIONS)[number],
    ) &&
    user.leadershipPositions.some(
      (leadership) => leadership.position === user.role,
    );

  if (
    !isPrivilegedRole &&
    !hasFacultyMemberPosition &&
    !hasStudentLeadershipPosition
  ) {
    throw new Error(
      "Only branch leadership members and authorized faculty can upload profile photos",
    );
  }

  if (!file) {
    throw new Error("Profile image is required");
  }

  let uploadResult;

  try {
    uploadResult = await uploadProfileImageToCloudinary(
      file.buffer,
      file.originalname,
    );
  } catch {
    throw new Error("Failed to upload profile image to Cloudinary");
  }

  try {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        profileImage: uploadResult.secureUrl,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        ieeeMembershipNumber: true,
        profileImage: true,
        bio: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    await prisma.auditLog.create({
      data: {
        userId,
        action: "UPDATE",
        entityType: "USER",
        entityId: userId,
        description: "Updated profile image",
      },
    });

    if (user.profileImage) {
      const oldPublicId = extractCloudinaryPublicId(user.profileImage);

      if (oldPublicId) {
        try {
          await deleteImageFromCloudinary(oldPublicId);
        } catch (error) {
          console.error(
            `Failed to delete previous profile image ${oldPublicId}:`,
            error,
          );
        }
      }
    }

    return toUserManagementResult(updatedUser);
  } catch (error) {
    try {
      await deleteImageFromCloudinary(uploadResult.publicId);
    } catch (cleanupError) {
      console.error(
        `Failed to clean up profile image ${uploadResult.publicId}:`,
        cleanupError,
      );
    }

    throw error;
  }
}

export async function getPublicLeadership() {
  const leadership = await prisma.branchLeadership.findMany({
    where: {
      isCurrent: true,
      user: {
        isActive: true,
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      userId: true,
      position: true,
      academicYearId: true,
      startDate: true,
      endDate: true,
      isCurrent: true,
      createdAt: true,
      updatedAt: true,
      user: {
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          role: true,
          isActive: true,
          ieeeMembershipNumber: true,
          profileImage: true,
          bio: true,
          memberProfile: {
            select: {
              id: true,
              membershipStatus: true,
              joinedAt: true,
              department: true,
              course: true,
              year: true,
              rollNumber: true,
            },
          },
        },
      },
      academicYear: {
        select: {
          id: true,
          name: true,
          startDate: true,
          endDate: true,
          isCurrent: true,
        },
      },
    },
  });

  return leadership.map((item) => {
    if (!FACULTY_PROFILE_ROLES.includes(item.user.role)) {
      return item;
    }

    const { memberProfile, ...user } = item.user;

    return {
      ...item,
      user: {
        ...user,
        memberProfile: memberProfile
          ? {
              id: memberProfile.id,
              membershipStatus: memberProfile.membershipStatus,
              joinedAt: memberProfile.joinedAt,
            }
          : null,
      },
    };
  });
}

export async function listMembers(actorId: string) {
  if (!(await hasAdministrativeAccess(actorId))) {
    throw new Error("You are not authorized to view members");
  }

  const members = await prisma.user.findMany({
    where: {
      isActive: true,
      memberProfile: {
        membershipStatus: "ACTIVE",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      isActive: true,
      ieeeMembershipNumber: true,
      profileImage: true,
      bio: true,
      createdAt: true,
      updatedAt: true,
      memberProfile: {
        select: {
          id: true,
          membershipStatus: true,
          joinedAt: true,
          department: true,
          course: true,
          year: true,
          rollNumber: true,
          profileVisibility: true,
          approvedAt: true,
        },
      },
    },
  });

  return members.map((member) => {
    if (!FACULTY_PROFILE_ROLES.includes(member.role)) {
      return member;
    }

    return {
      ...member,
      memberProfile: member.memberProfile
        ? {
            id: member.memberProfile.id,
            membershipStatus: member.memberProfile.membershipStatus,
            joinedAt: member.memberProfile.joinedAt,
            profileVisibility: member.memberProfile.profileVisibility,
            approvedAt: member.memberProfile.approvedAt,
          }
        : null,
    };
  });
}
