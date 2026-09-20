import type { AddGalleryImageInput, CreateAlbumInput, GalleryListFilters, UpdateAlbumInput, UpdateGalleryImageInput } from "./gallery.types.js";
export declare function createAlbum(userId: string, input: CreateAlbumInput): Promise<{
    images: {
        id: string;
        createdAt: Date;
        imageUrl: string;
        caption: string | null;
        albumId: string;
        cloudinaryId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    visibility: import("../../generated/prisma/enums.js").Visibility;
    coverImage: string | null;
    coverCloudinaryId: string | null;
}>;
export declare function getAlbums(filters?: GalleryListFilters): Promise<({
    images: {
        id: string;
        createdAt: Date;
        imageUrl: string;
        caption: string | null;
        albumId: string;
        cloudinaryId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    visibility: import("../../generated/prisma/enums.js").Visibility;
    coverImage: string | null;
    coverCloudinaryId: string | null;
})[]>;
export declare function getAlbumById(albumId: string): Promise<{
    images: {
        id: string;
        createdAt: Date;
        imageUrl: string;
        caption: string | null;
        albumId: string;
        cloudinaryId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    visibility: import("../../generated/prisma/enums.js").Visibility;
    coverImage: string | null;
    coverCloudinaryId: string | null;
}>;
export declare function updateAlbum(userId: string, albumId: string, input: UpdateAlbumInput): Promise<{
    images: {
        id: string;
        createdAt: Date;
        imageUrl: string;
        caption: string | null;
        albumId: string;
        cloudinaryId: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    visibility: import("../../generated/prisma/enums.js").Visibility;
    coverImage: string | null;
    coverCloudinaryId: string | null;
}>;
export declare function deleteAlbum(userId: string, albumId: string): Promise<{
    id: string;
    title: string;
}>;
export declare function addGalleryImage(userId: string, albumId: string, input: AddGalleryImageInput, file: Express.Multer.File): Promise<{
    id: string;
    createdAt: Date;
    imageUrl: string;
    caption: string | null;
    albumId: string;
    cloudinaryId: string;
}>;
export declare function updateGalleryImage(userId: string, imageId: string, input: UpdateGalleryImageInput): Promise<{
    id: string;
    createdAt: Date;
    imageUrl: string;
    caption: string | null;
    albumId: string;
    cloudinaryId: string;
}>;
export declare function deleteGalleryImage(userId: string, imageId: string): Promise<{
    id: string;
}>;
export declare function uploadAlbumCover(userId: string, albumId: string, file: Express.Multer.File): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
    visibility: import("../../generated/prisma/enums.js").Visibility;
    coverImage: string | null;
    coverCloudinaryId: string | null;
}>;
//# sourceMappingURL=gallery.service.d.ts.map