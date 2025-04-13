import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: any): Promise<{
        user: import("../schemas/user.schema").User;
        token: string;
    }>;
    login(loginDto: any): Promise<{
        user: import("../schemas/user.schema").User;
        token: string;
    }>;
}
