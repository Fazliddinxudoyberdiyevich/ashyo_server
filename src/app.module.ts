import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { User_addressModule } from './user_address/user_address.module';
import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { AttributesModule } from './attributes/attributes.module';
import { ProductInfoModule } from './product_info/product_info.module';
import { OrderModule } from './order/order.module';
import { Order_itemsModule } from './order_items/order_items.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PrismaModule,
    CategoryModule,
    BrandModule,
    ProductModelModule,
    CategoryBrandModule,
    CommentModule,
    User_addressModule,
    AttributeGroupModule,
    AttributesModule,
    ProductInfoModule,
    OrderModule,
    Order_itemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
