import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum AdminRole {
    ADMIN = 'admin',
    SUPER_ADMIN = 'super_admin',
}

export class Permission {
    @Prop({ default: false })
    view: boolean;

    @Prop({ default: false })
    manage: boolean;
}

@Schema({ timestamps: true })
export class Admin extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ enum: AdminRole, default: AdminRole.ADMIN })
    role: AdminRole;

    @Prop({ type: Permission, default: () => ({}) })
    productsPermission: Permission;

    @Prop({ type: Permission, default: () => ({}) })
    categoriesPermission: Permission;

    @Prop({ type: Permission, default: () => ({}) })
    ordersPermission: Permission;

    @Prop({ type: Permission, default: () => ({}) })
    customersPermission: Permission;

    @Prop({ type: Permission, default: () => ({}) })
    reviewsPermission: Permission;

    @Prop({ type: Permission, default: () => ({}) })
    customizationPermission: Permission;
}

export const AdminSchema = SchemaFactory.createForClass(Admin); 