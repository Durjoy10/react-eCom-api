export declare class WishlistService {
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
