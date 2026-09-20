import multer from "multer";
const allowedMimeTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
]);
const storage = multer.memoryStorage();
export const imageUpload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 1,
    },
    fileFilter: (_req, file, callback) => {
        if (!allowedMimeTypes.has(file.mimetype)) {
            callback(new Error("Only JPG, JPEG, PNG, and WebP images are allowed"));
            return;
        }
        callback(null, true);
    },
});
//# sourceMappingURL=upload.middleware.js.map