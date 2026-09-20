import type { NextFunction, Request, Response } from "express";
import type { BranchPosition, UserRole } from "../generated/prisma/client.js";
export declare function authorizeRoles(...allowedRoles: UserRole[]): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export declare function authorizeRolesOrPositions(allowedRoles: UserRole[], allowedPositions: BranchPosition[]): (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=role.middleware.d.ts.map