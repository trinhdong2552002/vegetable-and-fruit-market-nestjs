import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  unit: string;

  @Column()
  weight: number;

  @Column()
  rating: number;

  @Column()
  imageUrl: string;

  @Column()
  isActive: boolean;

  //   @Column()
  //   categoryId: string;
}
