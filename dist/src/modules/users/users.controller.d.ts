import type { Request, Response } from "express";
export declare function createPrivilegedUserAccount(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getUsers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getCurrentUserController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateOwnProfileController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function changeOwnPasswordController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateUserRoleController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateUserStatusController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function assignLeadershipPositionController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateLeadershipPositionController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function removeLeadershipPositionController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function uploadUserProfileImageController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPublicLeadershipController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMembers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=users.controller.d.ts.map