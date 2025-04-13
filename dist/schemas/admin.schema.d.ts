import { Document } from 'mongoose';
export declare enum AdminRole {
    ADMIN = "admin",
    SUPER_ADMIN = "super_admin"
}
export declare class Permission {
    view: boolean;
    manage: boolean;
}
export declare class Admin extends Document {
    name: string;
    email: string;
    password: string;
    role: AdminRole;
    productsPermission: Permission;
    categoriesPermission: Permission;
    ordersPermission: Permission;
    customersPermission: Permission;
    reviewsPermission: Permission;
    customizationPermission: Permission;
}
export declare const AdminSchema: import("mongoose").Schema<Admin, import("mongoose").Model<Admin, any, any, any, Document<unknown, any, Admin> & Admin & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Admin, Document<unknown, {}, import("mongoose").FlatRecord<Admin>> & import("mongoose").FlatRecord<Admin> & {
    _id: import("mongoose").Types.ObjectId;
}>;
