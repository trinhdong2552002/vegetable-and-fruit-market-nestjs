import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  getAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  getOneCategory(id: string): Promise<Category | null> {
    return this.categoryRepository.findOneBy({ id });
  }

  async createCategory(data: CategoryDto): Promise<Category> {
    const newCategory = this.categoryRepository.create(data);
    return await this.categoryRepository.save(newCategory);
  }

  async updateCategory(id: string, data: CategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new Error('Category not found');
    }
    const updatedCategory = this.categoryRepository.merge(category, data);
    return await this.categoryRepository.save(updatedCategory);
  }

  async deleteCategory(id: string) {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new Error('Category not found');
    }
    await this.categoryRepository.delete(category);
  }
}
