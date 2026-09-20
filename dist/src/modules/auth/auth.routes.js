import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { authRateLimiter, signupRateLimiter, } from "../../middlewares/rate-limit.middleware.js";
import { getMe, loginUser, signupUser } from "./auth.controller.js";
const router = Router();
router.post("/signup", signupRateLimiter, signupUser);
router.post("/login", authRateLimiter, loginUser);
router.get("/me", authenticate, getMe);
export default router;
//# sourceMappingURL=auth.routes.js.map