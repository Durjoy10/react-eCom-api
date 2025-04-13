import { Injectable } from '@nestjs/common';

@Injectable()
export class WishlistService {
  async getWishlist() {
    return { items: [] };
  }

  async addToWishlist(addToWishlistDto: any) {
    return { message: 'Item added to wishlist' };
  }

  async removeFromWishlist(id: string) {
    return { message: 'Item removed from wishlist' };
  }
}