import { Controller, Get, Post, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('wishlist')
@Controller('wishlist')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  async getWishlist() {
    return this.wishlistService.getWishlist();
  }

  @Post('items')
  async addToWishlist(@Body() addToWishlistDto: any) {
    return this.wishlistService.addToWishlist(addToWishlistDto);
  }

  @Delete('items/:id')
  async removeFromWishlist(@Param('id') id: string) {
    return this.wishlistService.removeFromWishlist(id);
  }
}