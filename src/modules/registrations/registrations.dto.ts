import { z } from "zod";

export const publicRegistrationSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().min(10).max(15).optional(),
});

export const registrationListQuerySchema = z.object({
  status: z
    .enum([
      "REGISTERED",
      "CANCELLED",
      "ATTENDED",
      "ABSENT",
      "WAITLISTED",
    ])
    .optional(),
});

export const updateRegistrationStatusSchema = z.object({
  status: z.enum([
    "REGISTERED",
    "CANCELLED",
    "ATTENDED",
    "ABSENT",
    "WAITLISTED",
  ]),
});

export type PublicRegistrationInput = z.infer<
  typeof publicRegistrationSchema
>;

export type RegistrationListQueryInput = z.infer<
  typeof registrationListQuerySchema
>;

export type UpdateRegistrationStatusInput = z.infer<
  typeof updateRegistrationStatusSchema
>;