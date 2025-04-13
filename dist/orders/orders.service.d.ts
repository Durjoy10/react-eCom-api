import { Model } from 'mongoose';
import { Order } from '../schemas/order.schema';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order>;
    create(createOrderDto: any): Promise<Order>;
}
