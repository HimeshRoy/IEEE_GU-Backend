import { Router } from "express";
import { setupRateLimiter } from "../../middlewares/rate-limit.middleware.js";
import { initialSetup } from "./setup.controller.js";
const router = Router();
router.post("/", setupRateLimiter, initialSetup);
export default router;
//# sourceMappingURL=setup.routes.js.map