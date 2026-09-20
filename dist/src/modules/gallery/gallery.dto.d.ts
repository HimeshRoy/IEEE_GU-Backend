import { z } from "zod";
export declare const createAlbumSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    visibility: z.ZodDefault<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        PRIVATE: "PRIVATE";
    }>>;
}, z.core.$strip>;
export declare const updateAlbumSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        PRIVATE: "PRIVATE";
    }>>;
}, z.core.$strip>;
export declare const addGalleryImageSchema: z.ZodObject<{
    caption: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const updateGalleryImageSchema: z.ZodObject<{
    caption: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const galleryQuerySchema: z.ZodObject<{
    visibility: z.ZodOptional<z.ZodEnum<{
        PUBLIC: "PUBLIC";
        MEMBERS_ONLY: "MEMBERS_ONLY";
        PRIVATE: "PRIVATE";
    }>>;
}, z.core.$strip>;
//# sourceMappingURL=gallery.dto.d.ts.map