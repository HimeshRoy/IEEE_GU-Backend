import { assignLeadershipPositionSchema, changeOwnPasswordSchema, createPrivilegedUserSchema, updateOwnProfileSchema, updateUserRoleSchema, } from "./users.dto.js";
import { assignLeadershipPosition, createPrivilegedUser, getCurrentUser, getPublicLeadership, listMembers, listUsers, removeLeadershipPosition, setUserActiveStatus, updateLeadershipPosition, updateOwnProfile, updateUserRole, uploadUserProfileImage, changeOwnPassword, } from "./users.service.js";
function getUserId(req) {
    if (!req.user) {
        throw new Error("Authentication required");
    }
    return req.user.id;
}
function getLeadershipId(req) {
    const leadershipId = req.params.leadershipId;
    if (!leadershipId) {
        throw new Error("Leadership ID is required");
    }
    return leadershipId;
}
function getErrorStatus(error) {
    if (!(error instanceof Error)) {
        return 500;
    }
    const message = error.message;
    if (message === "Authentication required" ||
        message === "Authenticated user not found") {
        return 401;
    }
    if (message === "User not found" ||
        message === "Leadership position not found" ||
        message === "Academic year not found") {
        return 404;
    }
    if (message.includes("not authorized") ||
        message.includes("not authorized") ||
        message.includes("cannot") ||
        message.includes("requires") ||
        message.includes("already") ||
        message.includes("incorrect") ||
        message.includes("different") ||
        message.includes("must be") ||
        message.includes("required")) {
        return 400;
    }
    return 500;
}
export async function createPrivilegedUserAccount(req, res) {
    try {
        const actorId = getUserId(req);
        const input = createPrivilegedUserSchema.parse(req.body);
        const user = await createPrivilegedUser(actorId, input);
        return res.status(201).json({
            success: true,
            message: "User account created successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to create user account",
        });
    }
}
export async function getUsers(req, res) {
    try {
        const actorId = getUserId(req);
        const users = await listUsers(actorId);
        return res.status(200).json({
            success: true,
            data: users,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch users",
        });
    }
}
export async function getCurrentUserController(req, res) {
    try {
        const userId = getUserId(req);
        const user = await getCurrentUser(userId);
        return res.status(200).json({
            success: true,
            data: user,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch current user",
        });
    }
}
export async function updateOwnProfileController(req, res) {
    try {
        const userId = getUserId(req);
        const input = updateOwnProfileSchema.parse(req.body);
        const user = await updateOwnProfile(userId, input);
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to update profile",
        });
    }
}
export async function changeOwnPasswordController(req, res) {
    try {
        const userId = getUserId(req);
        const input = changeOwnPasswordSchema.parse(req.body);
        const result = await changeOwnPassword(userId, input);
        return res.status(200).json({
            success: true,
            message: "Password changed successfully",
            data: result,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to change password",
        });
    }
}
export async function updateUserRoleController(req, res) {
    try {
        const actorId = getUserId(req);
        const userId = req.params.userId;
        if (!userId) {
            throw new Error("User ID is required");
        }
        const input = updateUserRoleSchema.parse(req.body);
        const user = await updateUserRole(actorId, userId, input);
        return res.status(200).json({
            success: true,
            message: "User role updated successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to update user role",
        });
    }
}
export async function updateUserStatusController(req, res) {
    try {
        const actorId = getUserId(req);
        const userId = req.params.userId;
        if (!userId) {
            throw new Error("User ID is required");
        }
        const isActive = req.body?.isActive;
        if (typeof isActive !== "boolean") {
            throw new Error("isActive must be a boolean");
        }
        const user = await setUserActiveStatus(actorId, userId, isActive);
        return res.status(200).json({
            success: true,
            message: `User account ${isActive ? "activated" : "deactivated"} successfully`,
            data: user,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to update user status",
        });
    }
}
export async function assignLeadershipPositionController(req, res) {
    try {
        const actorId = getUserId(req);
        const input = assignLeadershipPositionSchema.parse(req.body);
        const leadership = await assignLeadershipPosition(actorId, input);
        return res.status(201).json({
            success: true,
            message: "Leadership position assigned successfully",
            data: leadership,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to assign leadership position",
        });
    }
}
export async function updateLeadershipPositionController(req, res) {
    try {
        const actorId = getUserId(req);
        const leadershipId = getLeadershipId(req);
        const input = assignLeadershipPositionSchema.parse(req.body);
        const leadership = await updateLeadershipPosition(actorId, leadershipId, input);
        return res.status(200).json({
            success: true,
            message: "Leadership position updated successfully",
            data: leadership,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to update leadership position",
        });
    }
}
export async function removeLeadershipPositionController(req, res) {
    try {
        const actorId = getUserId(req);
        const leadershipId = getLeadershipId(req);
        const leadership = await removeLeadershipPosition(actorId, leadershipId);
        return res.status(200).json({
            success: true,
            message: "Leadership position removed successfully",
            data: leadership,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to remove leadership position",
        });
    }
}
export async function uploadUserProfileImageController(req, res) {
    try {
        const userId = getUserId(req);
        if (!req.file) {
            throw new Error("Profile image is required");
        }
        const user = await uploadUserProfileImage(userId, req.file);
        return res.status(200).json({
            success: true,
            message: "Profile image updated successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to upload profile image",
        });
    }
}
export async function getPublicLeadershipController(req, res) {
    try {
        const leadership = await getPublicLeadership();
        return res.status(200).json({
            success: true,
            data: leadership,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch public leadership",
        });
    }
}
export async function getMembers(req, res) {
    try {
        const actorId = getUserId(req);
        const members = await listMembers(actorId);
        return res.status(200).json({
            success: true,
            data: members,
        });
    }
    catch (error) {
        return res.status(getErrorStatus(error)).json({
            success: false,
            message: error instanceof Error
                ? error.message
                : "Failed to fetch members",
        });
    }
}
//# sourceMappingURL=users.controller.js.map