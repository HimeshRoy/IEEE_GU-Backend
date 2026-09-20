import type { Request, Response } from "express";
export declare function applyForMembershipApplication(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getMyMembershipDetails(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPendingMembershipApplications(_req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function approveMembershipApplication(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function rejectMembershipApplication(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=membership.controller.d.ts.map