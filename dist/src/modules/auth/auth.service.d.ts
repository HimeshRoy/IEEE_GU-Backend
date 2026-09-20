import type { LoginInput, SignupInput } from "./auth.dto.js";
import type { AuthResponse, AuthUser } from "./auth.types.js";
export declare function signup(input: SignupInput): Promise<AuthResponse>;
export declare function login(input: LoginInput): Promise<AuthResponse>;
export declare function getCurrentUser(userId: string): Promise<AuthUser>;
//# sourceMappingURL=auth.service.d.ts.map