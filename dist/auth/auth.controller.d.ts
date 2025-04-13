import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: any): Promise<{
        user: import("../schemas/user.schema").User;
        token: string;
    }>;
    login(loginDto: any): Promise<{
        user: import("../schemas/user.schema").User;
        token: string;
    }>;
}
