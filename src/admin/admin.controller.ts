import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AdminAuthGuard } from './admin-auth.guard';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post('register')
    async register(@Body() createAdminDto: CreateAdminDto) {
        const admin = await this.adminService.createAdmin(createAdminDto);
        return { message: 'Admin created successfully', admin };
    }

    @Post('login')
    async login(@Body() loginDto: { email: string; password: string }) {
        return this.adminService.login(loginDto);
    }

    @Get()
    @UseGuards(AdminAuthGuard)
    async findAll() {
        return this.adminService.findAll();
    }

    @Get(':id')
    @UseGuards(AdminAuthGuard)
    async findOne(@Param('id') id: string) {
        return this.adminService.findById(id);
    }

    @Put(':id')
    @UseGuards(AdminAuthGuard)
    async update(@Param('id') id: string, @Body() updateAdminDto: Partial<CreateAdminDto>) {
        return this.adminService.update(id, updateAdminDto);
    }

    @Delete(':id')
    @UseGuards(AdminAuthGuard)
    async remove(@Param('id') id: string) {
        await this.adminService.remove(id);
        return { message: 'Admin deleted successfully' };
    }

    @Get('profile')
    @UseGuards(AdminAuthGuard)
    async getProfile(@Req() req: any) {
        const admin = await this.adminService.findById(req.user.id);
        return {
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            permissions: {
                products: admin.productsPermission,
                categories: admin.categoriesPermission,
                orders: admin.ordersPermission,
                customers: admin.customersPermission,
                reviews: admin.reviewsPermission,
                customization: admin.customizationPermission,
            }
        };
    }
} 