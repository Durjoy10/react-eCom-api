import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../schemas/category.schema';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel(Category.name) private categoryModel: Model<Category>
    ) { }

    async create(createCategoryDto: any): Promise<Category> {
        const existingCategory = await this.categoryModel.findOne({ name: createCategoryDto.name }).exec();
        if (existingCategory) {
            throw new ConflictException('Category with this name already exists');
        }

        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    async findAll(query: any = {}): Promise<Category[]> {
        const filter: any = {};

        if (query.isActive !== undefined) {
            filter.isActive = query.isActive === 'true';
        }

        if (query.parentCategory === 'null') {
            filter.parentCategory = null;
        } else if (query.parentCategory) {
            filter.parentCategory = query.parentCategory;
        }

        return this.categoryModel.find(filter)
            .populate('parentCategory', 'name')
            .exec();
    }

    async findById(id: string): Promise<Category> {
        const category = await this.categoryModel.findById(id)
            .populate('parentCategory', 'name')
            .exec();

        if (!category) {
            throw new NotFoundException('Category not found');
        }
        return category;
    }

    async update(id: string, updateCategoryDto: any): Promise<Category> {
        if (updateCategoryDto.name) {
            const existingCategory = await this.categoryModel.findOne({
                name: updateCategoryDto.name,
                _id: { $ne: id }
            }).exec();

            if (existingCategory) {
                throw new ConflictException('Category with this name already exists');
            }
        }

        const updatedCategory = await this.categoryModel.findByIdAndUpdate(
            id,
            updateCategoryDto,
            { new: true }
        ).exec();

        if (!updatedCategory) {
            throw new NotFoundException('Category not found');
        }
        return updatedCategory;
    }

    async remove(id: string): Promise<void> {
        // Check if there are any subcategories using this as parent
        const hasChildren = await this.categoryModel.exists({ parentCategory: id });
        if (hasChildren) {
            throw new ConflictException('Cannot delete category with subcategories');
        }

        const result = await this.categoryModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('Category not found');
        }
    }
} 