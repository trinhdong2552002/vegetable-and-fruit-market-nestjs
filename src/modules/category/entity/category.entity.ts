import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true }) // Description can be null
  description: string;

  @Column({ nullable: true })
  imageUrl: string;
}
