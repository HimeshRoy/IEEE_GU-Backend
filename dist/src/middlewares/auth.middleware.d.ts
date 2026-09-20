import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "../generated/prisma/client.js";
export interface AuthenticatedUser {
    id: string;
    email: string;
    role: UserRole;
}
declare global {
    namespace Express {
        interface Request {
            user?: AuthenticatedUser;
        }
    }
}
export declare function authenticate(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.middleware.d.ts.map