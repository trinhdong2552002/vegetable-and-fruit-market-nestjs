import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class Category {
  @ApiProperty({
    example: '1d23f456-7890-1234-5678-90abcdef1234',
    description: 'The unique identifier of the category',
  })
  @PrimaryGeneratedColumn('uuid')
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
