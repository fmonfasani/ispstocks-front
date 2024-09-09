import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsRepository } from './products.repository';
import { Products } from './products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsDbService } from './productsDb.service';

const ACCESS = 'Esta es mi clave';
@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  providers: [
    ProductsService,
    ProductsDbService,
    ProductsRepository,
    { provide: 'ACCESS_TOKEN', useValue: ACCESS },
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
