import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsRepository {
  private products = [
    {
      id: 1,
      title: 'Fibra Optica 4 pelos',
      description: 'ADSS 80 ',
      Price: 15,
      Stock: 20,
    },
    {
      id: 2,
      title: 'Fibra Optica 6 pelos',
      description: 'ADSS 80 ',
      Price: 15,
      Stock: 20,
    },
    {
      id: 3,
      title: 'Fibra Optica 8 pelos',
      description: 'ADSS 80 ',
      Price: 15,
      Stock: 20,
    },
  ];
  async getAllProducts() {
    return this.products;
  }
}
