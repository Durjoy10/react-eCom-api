import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
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
