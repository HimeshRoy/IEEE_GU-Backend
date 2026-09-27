import { z } from "zod";

export const updateMaintenanceSchema = z.object({
  enabled: z.boolean(),
  title: z
    .string()
    .trim()
    .min(1)
    .max(150)
    .optional(),
  message: z
    .string()
    .trim()
    .min(1)
    .max(1000)
    .optional(),
});