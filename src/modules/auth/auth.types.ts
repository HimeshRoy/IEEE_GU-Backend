import type { UserRole } from "../../generated/prisma/client.js";

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string | null;
  phone: string | null;
  role: UserRole;
  isActive: boolean;
  ieeeMembershipNumber: string | null;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
}