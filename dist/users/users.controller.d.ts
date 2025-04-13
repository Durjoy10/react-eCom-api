import { Request } from 'express';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: Request): Promise<import("../schemas/user.schema").User>;
    updateProfile(req: Request, updateProfileDto: any): Promise<import("../schemas/user.schema").User>;
}
