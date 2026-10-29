import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  // No need to find category id because the class-validator will auto it
  // id: string;

  @IsNotEmpty({ message: 'Name cannot be empty.' })
  @IsString({
    message: 'Name must be a string',
  })
  name: string;

  @IsString({
    message: 'Description must be a string',
  })
  description: string;

  @IsNotEmpty({ message: 'ImageUrl cannot be empty.' })
  @IsString({
    message: 'ImageUrl must be a string',
  })
  imageUrl: string;
}
