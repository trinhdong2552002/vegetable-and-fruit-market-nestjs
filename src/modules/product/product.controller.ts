import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  async getOneProduct(@Param('id') id: string) {
    return await this.productService.getOneProduct(id);
  }

  @Post()
  async createProduct(@Body() data: ProductDto) {
    return await this.productService.createProduct(data);
  }

  @Put(':id')
  async updateProduct(@Param(':id') id: string, @Body() data: ProductDto) {
    return await this.productService.updateProduct(id, data);
  }

  @Delete(':id')
  async deleteProduct(@Param(':id') id: string) {
    return await this.productService.deleteProduct(id);
  }
}
