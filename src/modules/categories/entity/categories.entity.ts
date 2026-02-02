import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @ApiProperty({
    example: '1',
    description: 'The unique identifier of the category',
  })
  @PrimaryColumn()
  id: string;

  @ApiProperty({
    example: 'Vegetables',
    description: 'The name of the category',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'All kinds of vegetables',
    description: 'The description of the category',
  })
  @Column({ nullable: true }) // Description can be null
  description: string;
}
