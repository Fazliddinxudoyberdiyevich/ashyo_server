import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
<<<<<<< HEAD
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { User_addressModule } from './user_address/user_address.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PrismaModule,
=======
import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AttributesModule } from './attributes/attributes.module';
import { ProductInfoModule } from './product_info/product_info.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
>>>>>>> 01929a42473de89e54e3213b2c5321dfb10b5dea
    CategoryModule,
    BrandModule,
    ProductModelModule,
    CategoryBrandModule,
<<<<<<< HEAD
    CommentModule,
    User_addressModule,
=======
    AttributeGroupModule,
    AttributesModule,
    ProductInfoModule,
>>>>>>> 01929a42473de89e54e3213b2c5321dfb10b5dea
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
