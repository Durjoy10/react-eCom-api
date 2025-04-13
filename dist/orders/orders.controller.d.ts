import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<import("../schemas/order.schema").Order[]>;
    findOne(id: string): Promise<import("../schemas/order.schema").Order>;
    create(createOrderDto: any): Promise<import("../schemas/order.schema").Order>;
}
