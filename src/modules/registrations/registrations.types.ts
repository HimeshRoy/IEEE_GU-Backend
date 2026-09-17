import type { RegistrationStatus } from "../../generated/prisma/client.js";

export interface PublicRegistrationInput {
  name: string;
  email: string;
  phone?: string | undefined;
}

export interface RegistrationResult {
  id: string;
  eventId: string;
  userId: string | null;
  name: string;
  email: string;
  phone: string | null;
  registrationStatus: RegistrationStatus;
  registeredAt: Date;
  attendedAt: Date | null;
}

export interface RegistrationListFilters {
  status?: RegistrationStatus | undefined;
}

export interface UpdateRegistrationStatusInput {
  status: RegistrationStatus;
}