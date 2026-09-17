import { z } from "zod";

export const createAlbumSchema = z.object({
  title: z.string().trim().min(2).max(200),
  description: z.string().trim().max(2000).optional(),
  visibility: z
    .enum(["PUBLIC", "MEMBERS_ONLY", "PRIVATE"])
    .default("PUBLIC"),
});

export const updateAlbumSchema = z
  .object({
    title: z.string().trim().min(2).max(200).optional(),
    description: z.string().trim().max(2000).optional(),
    visibility: z
      .enum(["PUBLIC", "MEMBERS_ONLY", "PRIVATE"])
      .optional(),
  })
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "At least one field must be provided",
    },
  );

export const addGalleryImageSchema = z.object({
  caption: z.string().trim().max(500).optional(),
});

export const updateGalleryImageSchema = z
  .object({
    caption: z.string().trim().max(500).optional(),
  })
  .refine(
    (data) => Object.keys(data).length > 0,
    {
      message: "At least one field must be provided",
    },
  );

export const galleryQuerySchema = z.object({
  visibility: z
    .enum(["PUBLIC", "MEMBERS_ONLY", "PRIVATE"])
    .optional(),
});