import { Document, Types } from 'mongoose';
declare class OrderItem {
    product: Types.ObjectId;
    quantity: number;
    price: number;
}
export declare class Order extends Document {
    user: Types.ObjectId;
    items: OrderItem[];
    status: string;
    totalAmount: number;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & {
    _id: Types.ObjectId;
}>;
export {};
