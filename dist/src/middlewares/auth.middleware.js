import jwt, {} from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
}
const JWT_SECRET = jwtSecret;
function isAuthTokenPayload(payload) {
    return (typeof payload !== "string" &&
        typeof payload.sub === "string");
}
export async function authenticate(req, res, next) {
    try {
        const authorization = req.headers.authorization;
        if (!authorization?.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const token = authorization.slice(7).trim();
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        const payload = jwt.verify(token, JWT_SECRET);
        if (!isAuthTokenPayload(payload)) {
            return res.status(401).json({
                success: false,
                message: "Invalid authentication token",
            });
        }
        const user = await prisma.user.findUnique({
            where: {
                id: payload.sub,
            },
            select: {
                id: true,
                email: true,
                role: true,
                isActive: true,
            },
        });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User account not found",
            });
        }
        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message: "This account is inactive",
            });
        }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
        };
        next();
    }
    catch {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired authentication token",
        });
    }
}
//# sourceMappingURL=auth.middleware.js.map