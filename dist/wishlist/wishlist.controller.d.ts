import { WishlistService } from './wishlist.service';
export declare class WishlistController {
    private readonly wishlistService;
    constructor(wishlistService: WishlistService);
    getWishlist(): Promise<{
        items: any[];
    }>;
    addToWishlist(addToWishlistDto: any): Promise<{
        message: string;
    }>;
    removeFromWishlist(id: string): Promise<{
        message: string;
    }>;
}
