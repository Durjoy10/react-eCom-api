import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AdminAuthGuard } from '../admin/admin-auth.guard';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Post()
    @UseGuards(AdminAuthGuard)
    async create(@Body() createCategoryDto: CreateCategoryDto) {
        const category = await this.categoriesService.create(createCategoryDto);
        return { message: 'Category created successfully', category };
    }

    @Get()
    async findAll(@Query() query: any) {
        return this.categoriesService.findAll(query);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.categoriesService.findById(id);
    }

    @Put(':id')
    @UseGuards(AdminAuthGuard)
    async update(@Param('id') id: string, @Body() updateCategoryDto: Partial<CreateCategoryDto>) {
        return this.categoriesService.update(id, updateCategoryDto);
    }

    @Delete(':id')
    @UseGuards(AdminAuthGuard)
    async remove(@Param('id') id: string) {
        await this.categoriesService.remove(id);
        return { message: 'Category deleted successfully' };
    }
} 