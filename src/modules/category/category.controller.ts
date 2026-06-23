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

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    // We use 'any' for now, but usually we use a DTO (Data Transfer Object)
    return this.categoryService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    await this.categoryService.update(id, body);
    return this.categoryService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
