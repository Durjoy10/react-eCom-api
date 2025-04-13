import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://durjoy1514135:123456qwE@ecom.wbhww.mongodb.net/ecommerce'),
    UsersModule,
    ProductsModule,
    OrdersModule,
    CartModule,
    WishlistModule,
    AuthModule,
  ],
})
export class AppModule {}