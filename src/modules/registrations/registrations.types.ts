import type {
  EventFormFieldType,
  EventParticipationType,
  RegistrationStatus,
} from "../../generated/prisma/client.js";

export type { PublicRegistrationInput } from "./registrations.dto.js";

export interface FormAnswerInput {
  [fieldKey: string]:
    | string
    | number
    | boolean
    | string[];
}

export interface TeamMemberInput {
  name: string;
  email: string;
  phone?: string;
  answers: FormAnswerInput;
}

export interface RegistrationResult {
  id: string;
  eventId: string;
  userId: string | null;
  teamId: string | null;
  name: string;
  email: string;
  phone: string | null;
  qrToken: string | null;
  isTeamLeader: boolean;
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

export interface ScanRegistrationQrInput {
  qrToken: string;
  eventId: string;
}

export interface RegistrationFormField {
  id: string;
  key: string;
  label: string;
  type: EventFormFieldType;
  scope: "PARTICIPANT" | "TEAM";
  required: boolean;
  options: unknown;
  validation: unknown;
  order: number;
  isSystemField: boolean;
}

export interface RegistrationForm {
  id: string;
  eventId: string;
  title: string;
  description: string | null;
  participationType: EventParticipationType;
  minTeamSize: number | null;
  maxTeamSize: number | null;
  fields: RegistrationFormField[];
}