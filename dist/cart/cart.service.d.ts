export declare class CartService {
    getCart(): Promise<{
        items: any[];
    }>;
    addToCart(addToCartDto: any): Promise<{
        message: string;
    }>;
    removeFromCart(id: string): Promise<{
        message: string;
    }>;
    checkout(): Promise<{
        message: string;
    }>;
}
