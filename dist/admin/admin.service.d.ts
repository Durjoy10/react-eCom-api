import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { Admin, AdminRole } from '../schemas/admin.schema';
export declare class AdminService {
    private adminModel;
    private jwtService;
    constructor(adminModel: Model<Admin>, jwtService: JwtService);
    createAdmin(createAdminDto: any): Promise<Admin>;
    login(loginDto: any): Promise<{
        admin: {
            _id: any;
            name: string;
            email: string;
            role: AdminRole;
        };
        token: string;
    }>;
    findAll(): Promise<Admin[]>;
    findById(id: string): Promise<Admin>;
    update(id: string, updateAdminDto: any): Promise<Admin>;
    remove(id: string): Promise<void>;
    createFirstSuperAdmin(): Promise<import("mongoose").Document<unknown, {}, Admin> & Admin & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
