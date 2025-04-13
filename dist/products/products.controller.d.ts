import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("../schemas/product.schema").Product[]>;
    findOne(id: string): Promise<import("../schemas/product.schema").Product>;
    create(createProductDto: any): Promise<import("../schemas/product.schema").Product>;
    update(id: string, updateProductDto: any): Promise<import("../schemas/product.schema").Product>;
    remove(id: string): Promise<import("../schemas/product.schema").Product>;
}
