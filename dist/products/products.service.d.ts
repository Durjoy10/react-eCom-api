import { Model } from 'mongoose';
import { Product } from '../schemas/product.schema';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(createProductDto: any): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: any): Promise<Product>;
    remove(id: string): Promise<Product>;
}
