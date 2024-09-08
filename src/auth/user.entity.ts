import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user', schema: 'auth' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  createdAt: string;
}
