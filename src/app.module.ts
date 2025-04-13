import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { JwtGlobalModule } from './jwt/jwt.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://durjoy1514135:123456qwE@ecom.wbhww.mongodb.net/ecommerce'),
    JwtGlobalModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    CartModule,
    WishlistModule,
    AuthModule,
  ],
})
export class AppModule { }