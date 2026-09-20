import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { deleteNotificationController, getNotificationsController, getUnreadNotificationCountController, markAllNotificationsAsReadController, markNotificationAsReadController, } from "./notifications.controller.js";
const router = Router();
router.use(authenticate);
router.get("/", getNotificationsController);
router.get("/unread-count", getUnreadNotificationCountController);
router.patch("/read-all", markAllNotificationsAsReadController);
router.patch("/:notificationId/read", markNotificationAsReadController);
router.delete("/:notificationId", deleteNotificationController);
export default router;
//# sourceMappingURL=notifications.routes.js.map