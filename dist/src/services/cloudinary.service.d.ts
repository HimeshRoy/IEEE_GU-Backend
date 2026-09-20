import type { CloudinaryUploadResult } from "../modules/gallery/gallery.types.js";
export declare function uploadImageToCloudinary(buffer: Buffer, originalName: string): Promise<CloudinaryUploadResult>;
export declare function uploadProfileImageToCloudinary(buffer: Buffer, originalName: string): Promise<CloudinaryUploadResult>;
export declare function deleteImageFromCloudinary(publicId: string): Promise<any>;
//# sourceMappingURL=cloudinary.service.d.ts.map