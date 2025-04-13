export interface OrderItem {
  product: string; // Product ID
  quantity: number;
  price: number;
}

export interface Order {
  _id?: string;
  user: string; // User ID
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  totalAmount: number;
  createdAt: Date;
}