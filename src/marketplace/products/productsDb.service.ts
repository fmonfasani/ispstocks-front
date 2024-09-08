/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsDbService {
  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {}
  saveProduct(products: Products) {
    return this.productRepository.save(products);
  }
}
