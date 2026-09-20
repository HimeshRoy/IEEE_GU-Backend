import { prisma } from "../config/prisma.js";
export function authorizeRoles(...allowedRoles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }
        if (!allowedRoles.includes(user.role)) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to perform this action",
            });
        }
        next();
    };
}
export function authorizeRolesOrPositions(allowedRoles, allowedPositions) {
    return async (req, res, next) => {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Authentication required",
                });
            }
            if (allowedRoles.includes(user.role)) {
                return next();
            }
            if (allowedPositions.length === 0) {
                return res.status(403).json({
                    success: false,
                    message: "You are not authorized to perform this action",
                });
            }
            const leadership = await prisma.branchLeadership.findFirst({
                where: {
                    userId: user.id,
                    position: {
                        in: allowedPositions,
                    },
                    isCurrent: true,
                },
                select: {
                    id: true,
                },
            });
            if (!leadership) {
                return res.status(403).json({
                    success: false,
                    message: "You are not authorized to perform this action",
                });
            }
            next();
        }
        catch {
            return res.status(500).json({
                success: false,
                message: "Something went wrong",
            });
        }
    };
}
//# sourceMappingURL=role.middleware.js.map