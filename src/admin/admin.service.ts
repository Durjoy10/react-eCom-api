import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { Admin, AdminRole } from '../schemas/admin.schema';

@Injectable()
export class AdminService {
    constructor(
        @InjectModel(Admin.name) private adminModel: Model<Admin>,
        private jwtService: JwtService
    ) { }

    async createAdmin(createAdminDto: any): Promise<Admin> {
        const existingAdmin = await this.adminModel.findOne({ email: createAdminDto.email }).exec();
        if (existingAdmin) {
            throw new ConflictException('Email already exists');
        }

        const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
        const createdAdmin = new this.adminModel({
            ...createAdminDto,
            password: hashedPassword
        });
        return createdAdmin.save();
    }

    async login(loginDto: any) {
        const admin = await this.adminModel.findOne({ email: loginDto.email }).exec();
        if (!admin) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, admin.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const token = this.jwtService.sign({ id: admin._id, role: admin.role });
        return {
            admin: {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
            },
            token
        };
    }

    async findAll(): Promise<Admin[]> {
        return this.adminModel.find().exec();
    }

    async findById(id: string): Promise<Admin> {
        const admin = await this.adminModel.findById(id).exec();
        if (!admin) {
            throw new NotFoundException('Admin not found');
        }
        return admin;
    }

    async update(id: string, updateAdminDto: any): Promise<Admin> {
        if (updateAdminDto.password) {
            updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 10);
        }

        const updatedAdmin = await this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).exec();
        if (!updatedAdmin) {
            throw new NotFoundException('Admin not found');
        }
        return updatedAdmin;
    }

    async remove(id: string): Promise<void> {
        const result = await this.adminModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Admin not found');
        }
    }

    async createFirstSuperAdmin() {
        const existingSuperAdmin = await this.adminModel.findOne({ role: AdminRole.SUPER_ADMIN }).exec();
        if (!existingSuperAdmin) {
            const password = await bcrypt.hash('admin123', 10);
            const superAdmin = new this.adminModel({
                name: 'Super Admin',
                email: 'admin@example.com',
                password,
                role: AdminRole.SUPER_ADMIN,
                productsPermission: { view: true, manage: true },
                categoriesPermission: { view: true, manage: true },
                ordersPermission: { view: true, manage: true },
                customersPermission: { view: true, manage: true },
                reviewsPermission: { view: true, manage: true },
                customizationPermission: { view: true, manage: true },
            });
            return superAdmin.save();
        }
        return existingSuperAdmin;
    }
} 