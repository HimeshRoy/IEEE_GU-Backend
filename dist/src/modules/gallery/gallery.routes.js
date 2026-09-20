import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import { imageUpload } from "../../middlewares/upload.middleware.js";
import { addGalleryImageController, createAlbumController, deleteAlbumController, deleteGalleryImageController, getAlbumController, getAlbumsController, getManagementAlbumController, getManagementAlbumsController, updateAlbumController, updateGalleryImageController, uploadAlbumCoverController, } from "./gallery.controller.js";
const router = Router();
const galleryManagementAccess = authorizeRolesOrPositions([
    "FACULTY_ADVISOR",
    "IEEE_COUNSELOR",
    "WEBMASTER",
    "PHOTOGRAPHER",
], ["CHAIRMAN", "PHOTOGRAPHER"]);
router.get("/", getAlbumsController);
router.get("/manage", authenticate, galleryManagementAccess, getManagementAlbumsController);
router.get("/manage/:albumId", authenticate, galleryManagementAccess, getManagementAlbumController);
router.post("/:albumId/cover", authenticate, galleryManagementAccess, imageUpload.single("image"), uploadAlbumCoverController);
router.get("/:albumId", getAlbumController);
router.post("/", authenticate, galleryManagementAccess, createAlbumController);
router.patch("/:albumId", authenticate, galleryManagementAccess, updateAlbumController);
router.delete("/:albumId", authenticate, galleryManagementAccess, deleteAlbumController);
router.post("/:albumId/images", authenticate, galleryManagementAccess, imageUpload.single("image"), addGalleryImageController);
router.patch("/images/:imageId", authenticate, galleryManagementAccess, updateGalleryImageController);
router.delete("/images/:imageId", authenticate, galleryManagementAccess, deleteGalleryImageController);
export default router;
//# sourceMappingURL=gallery.routes.js.map