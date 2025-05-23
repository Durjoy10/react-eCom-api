"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt = require("bcrypt");
const mongoose_2 = require("mongoose");
const admin_schema_1 = require("../schemas/admin.schema");
let AdminService = class AdminService {
    constructor(adminModel, jwtService) {
        this.adminModel = adminModel;
        this.jwtService = jwtService;
    }
    async createAdmin(createAdminDto) {
        const existingAdmin = await this.adminModel.findOne({ email: createAdminDto.email }).exec();
        if (existingAdmin) {
            throw new common_1.ConflictException('Email already exists');
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.password, 10);
        const createdAdmin = new this.adminModel({
            ...createAdminDto,
            password: hashedPassword
        });
        return createdAdmin.save();
    }
    async login(loginDto) {
        const admin = await this.adminModel.findOne({ email: loginDto.email }).exec();
        if (!admin) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, admin.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
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
    async findAll() {
        return this.adminModel.find().exec();
    }
    async findById(id) {
        const admin = await this.adminModel.findById(id).exec();
        if (!admin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return admin;
    }
    async update(id, updateAdminDto) {
        if (updateAdminDto.password) {
            updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 10);
        }
        const updatedAdmin = await this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true }).exec();
        if (!updatedAdmin) {
            throw new common_1.NotFoundException('Admin not found');
        }
        return updatedAdmin;
    }
    async remove(id) {
        const result = await this.adminModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Admin not found');
        }
    }
    async createFirstSuperAdmin() {
        const existingSuperAdmin = await this.adminModel.findOne({ role: admin_schema_1.AdminRole.SUPER_ADMIN }).exec();
        if (!existingSuperAdmin) {
            const password = await bcrypt.hash('admin123', 10);
            const superAdmin = new this.adminModel({
                name: 'Super Admin',
                email: 'admin@example.com',
                password,
                role: admin_schema_1.AdminRole.SUPER_ADMIN,
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
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map