import type { Request, Response } from "express";
export declare function registerForEventController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getEventRegistrationsController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateRegistrationStatusController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function promoteNextWaitlistedController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function scanRegistrationQrController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function syncEventRegistrationsToExcelController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function downloadEventRegistrationsExcelController(req: Request, res: Response): Promise<void | Response<any, Record<string, any>>>;
export declare function getMyRegistrationsController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=registrations.controller.d.ts.map