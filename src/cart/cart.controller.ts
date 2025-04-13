import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { CartService } from './cart.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('cart')
@Controller('cart')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  async getCart() {
    return this.cartService.getCart();
  }

  @Post('items')
  async addToCart(@Body() addToCartDto: any) {
    return this.cartService.addToCart(addToCartDto);
  }

  @Delete('items/:id')
  async removeFromCart(@Param('id') id: string) {
    return this.cartService.removeFromCart(id);
  }

  @Post('checkout')
  async checkout() {
    return this.cartService.checkout();
  }
}