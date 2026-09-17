import { z } from "zod";

const eventAccessSchema = z.enum([
  "PUBLIC",
  "UNIVERSITY",
  "MEMBERS_ONLY",
  "INVITE_ONLY",
]);

export const createEventSchema = z.object({
  title: z.string().trim().min(3).max(200),
  slug: z
    .string()
    .trim()
    .min(3)
    .max(200)
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens",
    ),
  shortDescription: z.string().trim().max(500).optional(),
  description: z.string().trim().min(10).max(10000),
  bannerImage: z.string().trim().url().optional(),
  venue: z.string().trim().max(300).optional(),
  eventDate: z.coerce.date(),
  startTime: z.coerce.date().optional(),
  endTime: z.coerce.date().optional(),
  registrationDeadline: z.coerce.date().optional(),
  capacity: z.number().int().positive().optional(),
  access: eventAccessSchema.default("PUBLIC"),
  isFeatured: z.boolean().default(false),
});

export const updateEventSchema = z
  .object({
    title: z.string().trim().min(3).max(200).optional(),
    slug: z
      .string()
      .trim()
      .min(3)
      .max(200)
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug must contain only lowercase letters, numbers, and hyphens",
      )
      .optional(),
    shortDescription: z.string().trim().max(500).optional(),
    description: z.string().trim().min(10).max(10000).optional(),
    bannerImage: z.string().trim().url().optional(),
    venue: z.string().trim().max(300).optional(),
    eventDate: z.coerce.date().optional(),
    startTime: z.coerce.date().optional(),
    endTime: z.coerce.date().optional(),
    registrationDeadline: z.coerce.date().optional(),
    capacity: z.number().int().positive().optional(),
    access: eventAccessSchema.optional(),
    isFeatured: z.boolean().optional(),
  })
  .refine(
    (data) => Object.keys(data).length > 0,
    "At least one field is required",
  );

export const rejectEventSchema = z.object({
  rejectionReason: z.string().trim().min(5).max(500),
});

export const eventListQuerySchema = z.object({
  status: z
    .enum([
      "DRAFT",
      "PENDING_APPROVAL",
      "APPROVED",
      "REJECTED",
      "PUBLISHED",
      "CANCELLED",
      "COMPLETED",
    ])
    .optional(),
  access: eventAccessSchema.optional(),
  featured: z
    .enum(["true", "false"])
    .transform((value) => value === "true")
    .optional(),
});

export type CreateEventInput = z.infer<typeof createEventSchema>;
export type UpdateEventInput = z.infer<typeof updateEventSchema>;
export type RejectEventInput = z.infer<typeof rejectEventSchema>;
export type EventListQuery = z.infer<typeof eventListQuerySchema>;