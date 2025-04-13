import { Model } from 'mongoose';
import { Category } from '../schemas/category.schema';
export declare class CategoriesService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    create(createCategoryDto: any): Promise<Category>;
    findAll(query?: any): Promise<Category[]>;
    findById(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: any): Promise<Category>;
    remove(id: string): Promise<void>;
}
