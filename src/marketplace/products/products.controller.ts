import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';
import { ProductsDbService } from './productsDb.service';
import { v4 as uuid } from 'uuid';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly productsDbService: ProductsDbService,
  ) {}
  @Get()
  getAllProducts() {
    // return this.productsService.getAllProducts();
    return this.productsService.getAllProducts();
  }
  @Put()
  updateProducts() {
    return 'este endpoint modifica un producto';
  }
  @Post()
  createProducts(@Body() products: Products) {
    return this.productsDbService.saveProduct({ ...products, id: uuid() });
  }
  @Delete()
  deleteProducts() {
    return 'Este endpoint borra un producto';
  }
}
