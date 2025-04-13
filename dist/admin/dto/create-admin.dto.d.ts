import { AdminRole } from '../../schemas/admin.schema';
export declare class PermissionDto {
    view: boolean;
    manage: boolean;
}
export declare class CreateAdminDto {
    name: string;
    email: string;
    password: string;
    role?: AdminRole;
    productsPermission?: PermissionDto;
    categoriesPermission?: PermissionDto;
    ordersPermission?: PermissionDto;
    customersPermission?: PermissionDto;
    reviewsPermission?: PermissionDto;
    customizationPermission?: PermissionDto;
}
