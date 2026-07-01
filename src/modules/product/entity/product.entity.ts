import { Category } from 'src/modules/category/entity/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column()
  categoryId: string;

  @ManyToOne(() => Category, (category) => category.id)
  @JoinColumn({ name: 'categoryId' })
  category: Category;
}
