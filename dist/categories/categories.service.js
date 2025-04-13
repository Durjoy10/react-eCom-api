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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const category_schema_1 = require("../schemas/category.schema");
let CategoriesService = class CategoriesService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async create(createCategoryDto) {
        const existingCategory = await this.categoryModel.findOne({ name: createCategoryDto.name }).exec();
        if (existingCategory) {
            throw new common_1.ConflictException('Category with this name already exists');
        }
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }
    async findAll(query = {}) {
        const filter = {};
        if (query.isActive !== undefined) {
            filter.isActive = query.isActive === 'true';
        }
        if (query.parentCategory === 'null') {
            filter.parentCategory = null;
        }
        else if (query.parentCategory) {
            filter.parentCategory = query.parentCategory;
        }
        return this.categoryModel.find(filter)
            .populate('parentCategory', 'name')
            .exec();
    }
    async findById(id) {
        const category = await this.categoryModel.findById(id)
            .populate('parentCategory', 'name')
            .exec();
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        return category;
    }
    async update(id, updateCategoryDto) {
        if (updateCategoryDto.name) {
            const existingCategory = await this.categoryModel.findOne({
                name: updateCategoryDto.name,
                _id: { $ne: id }
            }).exec();
            if (existingCategory) {
                throw new common_1.ConflictException('Category with this name already exists');
            }
        }
        const updatedCategory = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true }).exec();
        if (!updatedCategory) {
            throw new common_1.NotFoundException('Category not found');
        }
        return updatedCategory;
    }
    async remove(id) {
        const hasChildren = await this.categoryModel.exists({ parentCategory: id });
        if (hasChildren) {
            throw new common_1.ConflictException('Cannot delete category with subcategories');
        }
        const result = await this.categoryModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Category not found');
        }
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map