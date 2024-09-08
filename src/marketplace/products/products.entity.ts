import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products', schema: 'marketplace' })
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  stock: number;
}
