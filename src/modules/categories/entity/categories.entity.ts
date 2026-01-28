import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true }) // Description can be null
  description: string;
}
