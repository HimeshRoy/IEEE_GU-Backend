import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authorizeRolesOrPositions } from "../../middlewares/role.middleware.js";
import { imageUpload } from "../../middlewares/upload.middleware.js";
import {
  assignLeadershipPositionController,
  changeOwnPasswordController,
  createPrivilegedUserAccount,
  getUsers,
  updateOwnProfileController,
  updateUserRoleController,
  updateUserStatusController,
  uploadUserProfileImageController,
  getCurrentUserController,
  getPublicLeadershipController,
  getMembers,
  updateLeadershipPositionController,
  removeLeadershipPositionController,
} from "./users.controller.js";

const router = Router();

router.get("/leadership", getPublicLeadershipController);

router.get("/me", authenticate, getCurrentUserController);

router.patch("/me", authenticate, updateOwnProfileController);

router.patch("/me/password", authenticate, changeOwnPasswordController);

router.get(
  "/members",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  getMembers,
);

router.get(
  "/",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  getUsers,
);

router.post(
  "/privileged",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  createPrivilegedUserAccount,
);

router.patch(
  "/:userId/role",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  updateUserRoleController,
);

router.patch(
  "/profile-image",
  authenticate,
  imageUpload.single("image"),
  uploadUserProfileImageController,
);

router.patch(
  "/:userId/status",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  updateUserStatusController,
);

router.post(
  "/leadership",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  assignLeadershipPositionController,
);

router.patch(
  "/leadership/:leadershipId",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  updateLeadershipPositionController,
);

router.delete(
  "/leadership/:leadershipId",
  authenticate,
  authorizeRolesOrPositions(
    ["FACULTY_ADVISOR", "IEEE_COUNSELOR", "WEBMASTER"],
    ["CHAIRMAN"],
  ),
  removeLeadershipPositionController,
);

export default router;
