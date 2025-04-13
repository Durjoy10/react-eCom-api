import { Document } from 'mongoose';
export declare class Category extends Document {
    name: string;
    description: string;
    image: string;
    isActive: boolean;
    parentCategory: Category;
}
export declare const CategorySchema: import("mongoose").Schema<Category, import("mongoose").Model<Category, any, any, any, Document<unknown, any, Category> & Category & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Category, Document<unknown, {}, import("mongoose").FlatRecord<Category>> & import("mongoose").FlatRecord<Category> & {
    _id: import("mongoose").Types.ObjectId;
}>;
