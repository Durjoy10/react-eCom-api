export interface OrderItem {
    product: string;
    quantity: number;
    price: number;
}
export interface Order {
    _id?: string;
    user: string;
    items: OrderItem[];
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
    totalAmount: number;
    createdAt: Date;
}
