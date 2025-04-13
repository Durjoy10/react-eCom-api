import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  async getCart() {
    return { items: [] };
  }

  async addToCart(addToCartDto: any) {
    return { message: 'Item added to cart' };
  }

  async removeFromCart(id: string) {
    return { message: 'Item removed from cart' };
  }

  async checkout() {
    return { message: 'Checkout completed' };
  }
}