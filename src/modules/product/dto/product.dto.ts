import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

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
