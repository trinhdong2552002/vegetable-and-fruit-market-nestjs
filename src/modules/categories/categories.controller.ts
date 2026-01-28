import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // GET localhost:3000/categories
  @Get()
  getAll() {
    return this.categoriesService.findAll();
  }

  // GET localhost:3000/categories/1
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  // POST localhost:3000/categories
  @Post()
  create(@Body() body: any) {
    // We use 'any' for now, but usually we use a DTO (Data Transfer Object)
    return this.categoriesService.create(body);
  }

  // PUT localhost:3000/categories/1
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return await this.categoriesService.update(id, body);
  }

  // DELETE localhost:3000/categories/1
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.categoriesService.delete(id);
  }
}
