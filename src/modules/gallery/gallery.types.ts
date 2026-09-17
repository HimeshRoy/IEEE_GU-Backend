import type { Visibility } from "../../generated/prisma/client.js";

export interface CreateAlbumInput {
  title: string;
  description?: string | undefined;
  visibility: Visibility;
}

export interface UpdateAlbumInput {
  title?: string | undefined;
  description?: string | undefined;
  visibility?: Visibility | undefined;
}

export interface AddGalleryImageInput {
  caption?: string | undefined;
}

export interface UpdateGalleryImageInput {
  caption?: string | undefined;
}

export interface CloudinaryUploadResult {
  secureUrl: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
}

export interface GalleryListFilters {
  visibility?: Visibility | undefined;
}