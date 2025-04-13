import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        message: string;
        category: import("../schemas/category.schema").Category;
    }>;
    findAll(query: any): Promise<import("../schemas/category.schema").Category[]>;
    findOne(id: string): Promise<import("../schemas/category.schema").Category>;
    update(id: string, updateCategoryDto: Partial<CreateCategoryDto>): Promise<import("../schemas/category.schema").Category>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
