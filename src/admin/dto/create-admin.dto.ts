import { Type } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from 'class-validator';
import { AdminRole } from '../../schemas/admin.schema';

export class PermissionDto {
    @IsOptional()
    view: boolean;

    @IsOptional()
    manage: boolean;
}

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    password: string;

    @IsEnum(AdminRole)
    @IsOptional()
    role?: AdminRole;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    productsPermission?: PermissionDto;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    categoriesPermission?: PermissionDto;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    ordersPermission?: PermissionDto;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    customersPermission?: PermissionDto;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    reviewsPermission?: PermissionDto;

    @ValidateNested()
    @Type(() => PermissionDto)
    @IsOptional()
    customizationPermission?: PermissionDto;
} 