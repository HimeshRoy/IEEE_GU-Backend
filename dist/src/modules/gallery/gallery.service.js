import { prisma } from "../../config/prisma.js";
import { deleteImageFromCloudinary, uploadImageToCloudinary, } from "../../services/cloudinary.service.js";
async function hasOperationalAccess(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            role: true,
        },
    });
    if (!user) {
        return false;
    }
    if (user.role === "FACULTY_ADVISOR" ||
        user.role === "IEEE_COUNSELOR" ||
        user.role === "WEBMASTER" ||
        user.role === "PHOTOGRAPHER") {
        return true;
    }
    const chairman = await prisma.branchLeadership.findFirst({
        where: {
            userId,
            position: "CHAIRMAN",
            isCurrent: true,
        },
        select: {
            id: true,
        },
    });
    return Boolean(chairman);
}
async function createAuditLog(userId, action, entityType, entityId, description) {
    await prisma.auditLog.create({
        data: {
            userId,
            action,
            entityType,
            entityId,
            description,
        },
    });
}
export async function createAlbum(userId, input) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const album = await prisma.galleryAlbum.create({
        data: {
            title: input.title,
            description: input.description ?? null,
            visibility: input.visibility,
        },
        include: {
            images: true,
        },
    });
    await createAuditLog(userId, "CREATE", "GalleryAlbum", album.id, `Created gallery album "${album.title}"`);
    return album;
}
export async function getAlbums(filters = {}) {
    return prisma.galleryAlbum.findMany({
        where: {
            ...(filters.visibility
                ? {
                    visibility: filters.visibility,
                }
                : {}),
        },
        include: {
            images: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
}
export async function getAlbumById(albumId) {
    const album = await prisma.galleryAlbum.findUnique({
        where: {
            id: albumId,
        },
        include: {
            images: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });
    if (!album) {
        throw new Error("Gallery album not found");
    }
    return album;
}
export async function updateAlbum(userId, albumId, input) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const existingAlbum = await prisma.galleryAlbum.findUnique({
        where: {
            id: albumId,
        },
    });
    if (!existingAlbum) {
        throw new Error("Gallery album not found");
    }
    const album = await prisma.galleryAlbum.update({
        where: {
            id: albumId,
        },
        data: {
            ...(input.title !== undefined
                ? {
                    title: input.title,
                }
                : {}),
            ...(input.description !== undefined
                ? {
                    description: input.description,
                }
                : {}),
            ...(input.visibility !== undefined
                ? {
                    visibility: input.visibility,
                }
                : {}),
        },
        include: {
            images: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });
    await createAuditLog(userId, "UPDATE", "GalleryAlbum", album.id, `Updated gallery album "${album.title}"`);
    return album;
}
export async function deleteAlbum(userId, albumId) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const existingAlbum = await prisma.galleryAlbum.findUnique({
        where: {
            id: albumId,
        },
        include: {
            images: {
                select: {
                    cloudinaryId: true,
                },
            },
        },
    });
    if (!existingAlbum) {
        throw new Error("Gallery album not found");
    }
    for (const image of existingAlbum.images) {
        try {
            await deleteImageFromCloudinary(image.cloudinaryId);
        }
        catch (error) {
            console.error(`Failed to delete Cloudinary image ${image.cloudinaryId}:`, error);
        }
    }
    await prisma.galleryAlbum.delete({
        where: {
            id: albumId,
        },
    });
    await createAuditLog(userId, "DELETE", "GalleryAlbum", albumId, `Deleted gallery album "${existingAlbum.title}"`);
    return {
        id: albumId,
        title: existingAlbum.title,
    };
}
export async function addGalleryImage(userId, albumId, input, file) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const album = await prisma.galleryAlbum.findUnique({
        where: {
            id: albumId,
        },
        select: {
            id: true,
            title: true,
        },
    });
    if (!album) {
        throw new Error("Gallery album not found");
    }
    let uploadResult;
    try {
        uploadResult = await uploadImageToCloudinary(file.buffer, file.originalname);
    }
    catch {
        throw new Error("Failed to upload image to Cloudinary");
    }
    try {
        const image = await prisma.galleryImage.create({
            data: {
                albumId,
                imageUrl: uploadResult.secureUrl,
                cloudinaryId: uploadResult.publicId,
                caption: input.caption ?? null,
            },
        });
        await createAuditLog(userId, "CREATE", "GalleryImage", image.id, `Added image to gallery album "${album.title}"`);
        return image;
    }
    catch (error) {
        try {
            await deleteImageFromCloudinary(uploadResult.publicId);
        }
        catch (cleanupError) {
            console.error(`Failed to clean up Cloudinary image ${uploadResult.publicId}:`, cleanupError);
        }
        throw error;
    }
}
export async function updateGalleryImage(userId, imageId, input) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const existingImage = await prisma.galleryImage.findUnique({
        where: {
            id: imageId,
        },
        include: {
            album: {
                select: {
                    title: true,
                },
            },
        },
    });
    if (!existingImage) {
        throw new Error("Gallery image not found");
    }
    const image = await prisma.galleryImage.update({
        where: {
            id: imageId,
        },
        data: {
            ...(input.caption !== undefined
                ? {
                    caption: input.caption,
                }
                : {}),
        },
    });
    await createAuditLog(userId, "UPDATE", "GalleryImage", image.id, `Updated image in gallery album "${existingImage.album.title}"`);
    return image;
}
export async function deleteGalleryImage(userId, imageId) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const existingImage = await prisma.galleryImage.findUnique({
        where: {
            id: imageId,
        },
        include: {
            album: {
                select: {
                    title: true,
                },
            },
        },
    });
    if (!existingImage) {
        throw new Error("Gallery image not found");
    }
    try {
        await deleteImageFromCloudinary(existingImage.cloudinaryId);
    }
    catch {
        throw new Error("Failed to delete image from Cloudinary");
    }
    await prisma.galleryImage.delete({
        where: {
            id: imageId,
        },
    });
    await createAuditLog(userId, "DELETE", "GalleryImage", imageId, `Deleted image from gallery album "${existingImage.album.title}"`);
    return {
        id: imageId,
    };
}
export async function uploadAlbumCover(userId, albumId, file) {
    const allowed = await hasOperationalAccess(userId);
    if (!allowed) {
        throw new Error("You do not have permission to manage the gallery");
    }
    const existingAlbum = await prisma.galleryAlbum.findUnique({
        where: {
            id: albumId,
        },
        select: {
            id: true,
            title: true,
            coverCloudinaryId: true,
        },
    });
    if (!existingAlbum) {
        throw new Error("Gallery album not found");
    }
    let uploadResult;
    try {
        uploadResult = await uploadImageToCloudinary(file.buffer, file.originalname);
    }
    catch {
        throw new Error("Failed to upload album cover to Cloudinary");
    }
    try {
        const album = await prisma.galleryAlbum.update({
            where: {
                id: albumId,
            },
            data: {
                coverImage: uploadResult.secureUrl,
                coverCloudinaryId: uploadResult.publicId,
            },
        });
        if (existingAlbum.coverCloudinaryId) {
            try {
                await deleteImageFromCloudinary(existingAlbum.coverCloudinaryId);
            }
            catch (error) {
                console.error(`Failed to delete previous album cover ${existingAlbum.coverCloudinaryId}:`, error);
            }
        }
        await createAuditLog(userId, "UPDATE", "GalleryAlbum", album.id, `Updated cover image for gallery album "${album.title}"`);
        return album;
    }
    catch (error) {
        try {
            await deleteImageFromCloudinary(uploadResult.publicId);
        }
        catch (cleanupError) {
            console.error(`Failed to clean up Cloudinary album cover ${uploadResult.publicId}:`, cleanupError);
        }
        throw error;
    }
}
//# sourceMappingURL=gallery.service.js.map