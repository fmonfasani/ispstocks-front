/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    private productsRepository: ProductsRepository,
    @Inject('ACCESS_TOKEN') private accessToken: string,
  ) {}
  getAllProducts() {
    return this.accessToken === 'Esta es mi clave'
      ? this.productsRepository.getAllProducts()
      : 'No tienes acceso';
  }
}
