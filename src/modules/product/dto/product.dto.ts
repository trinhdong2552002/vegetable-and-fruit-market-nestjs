import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  image: string;

  @IsNumber()
  stock: number;

  @IsString()
  unit: string;

  @IsNumber()
  weight: number;

  @IsNumber()
  rating: number;

  @IsString()
  imageUrl: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  categoryId: string;
}
