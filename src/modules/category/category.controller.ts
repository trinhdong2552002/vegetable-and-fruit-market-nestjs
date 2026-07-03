import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoryService.getOneCategory(id);
  }

  @Post()
  async createCategory(@Body() data: CategoryDto) {
    return await this.categoryService.createCategory(data);
  }

  @Put(':id')
  async updateCategory(@Param(':id') id: string, @Body() data: CategoryDto) {
    return await this.categoryService.updateCategory(id, data);
  }

  @Delete(':id')
  async deleteCategory(@Param(':id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }
}
