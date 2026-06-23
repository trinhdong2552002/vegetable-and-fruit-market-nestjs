import { IsEmpty, IsString } from 'class-validator';

export class CategoryDto {
  id: string;

  @IsEmpty()
  @IsString({
    message: 'Name must be a string',
  })
  name: string;

  @IsString({
    message: 'Description must be a string',
  })
  description?: string;
}
