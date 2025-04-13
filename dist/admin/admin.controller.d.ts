import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    register(createAdminDto: CreateAdminDto): Promise<{
        message: string;
        admin: import("../schemas/admin.schema").Admin;
    }>;
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        admin: {
            _id: any;
            name: string;
            email: string;
            role: import("../schemas/admin.schema").AdminRole;
        };
        token: string;
    }>;
    findAll(): Promise<import("../schemas/admin.schema").Admin[]>;
    findOne(id: string): Promise<import("../schemas/admin.schema").Admin>;
    update(id: string, updateAdminDto: Partial<CreateAdminDto>): Promise<import("../schemas/admin.schema").Admin>;
    remove(id: string): Promise<{
        message: string;
    }>;
    getProfile(req: any): Promise<{
        _id: any;
        name: string;
        email: string;
        role: import("../schemas/admin.schema").AdminRole;
        permissions: {
            products: import("../schemas/admin.schema").Permission;
            categories: import("../schemas/admin.schema").Permission;
            orders: import("../schemas/admin.schema").Permission;
            customers: import("../schemas/admin.schema").Permission;
            reviews: import("../schemas/admin.schema").Permission;
            customization: import("../schemas/admin.schema").Permission;
        };
    }>;
}
