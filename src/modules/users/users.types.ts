import type {
  BranchPosition,
  UserRole,
} from "../../generated/prisma/client.js";

export interface CreatePrivilegedUserInput {
  email: string;
  password: string;
  firstName: string;
  lastName?: string | undefined;
  phone?: string | undefined;
  ieeeMembershipNumber?: string | undefined;
  role: UserRole;
}

export interface UpdateUserRoleInput {
  role: UserRole;
}

export interface AssignLeadershipPositionInput {
  userId: string;
  position: BranchPosition;
  academicYearId: string;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
}

export interface UpdateOwnProfileInput {
  firstName?: string | undefined;
  lastName?: string | undefined;
  phone?: string | undefined;
  bio?: string | undefined;
  ieeeMembershipNumber?: string | undefined;
  department?: string | undefined;
  course?: string | undefined;
  year?: string | undefined;
  rollNumber?: string | undefined;
}

export interface ChangeOwnPasswordInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UserManagementResult {
  id: string;
  email: string;
  firstName: string;
  lastName: string | null;
  phone: string | null;
  role: UserRole;
  isActive: boolean;
  profileImage: string | null;
  bio: string | null;
  ieeeMembershipNumber: string | null;
  createdAt: Date;
  updatedAt: Date;
}