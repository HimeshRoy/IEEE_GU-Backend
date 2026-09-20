import { Readable } from "node:stream";
import { cloudinary } from "../config/cloudinary.js";
const galleryFolder = "ieee-gu/gallery";
const profileFolder = "ieee-gu/profiles";
async function uploadToCloudinary(buffer, originalName, folder) {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
            folder,
            resource_type: "image",
            use_filename: true,
            unique_filename: true,
            filename_override: originalName,
            overwrite: false,
        }, (error, result) => {
            if (error || !result) {
                reject(error instanceof Error
                    ? error
                    : new Error("Cloudinary image upload failed"));
                return;
            }
            resolve({
                secureUrl: result.secure_url,
                publicId: result.public_id,
                width: result.width ?? 0,
                height: result.height ?? 0,
                format: result.format ?? "",
                bytes: result.bytes ?? 0,
            });
        });
        Readable.from(buffer).pipe(uploadStream);
    });
}
export async function uploadImageToCloudinary(buffer, originalName) {
    return uploadToCloudinary(buffer, originalName, galleryFolder);
}
export async function uploadProfileImageToCloudinary(buffer, originalName) {
    return uploadToCloudinary(buffer, originalName, profileFolder);
}
export async function deleteImageFromCloudinary(publicId) {
    const result = await cloudinary.uploader.destroy(publicId, {
        resource_type: "image",
    });
    if (result.result !== "ok" &&
        result.result !== "not found") {
        throw new Error(`Cloudinary image deletion failed: ${result.result}`);
    }
    return result;
}
//# sourceMappingURL=cloudinary.service.js.map