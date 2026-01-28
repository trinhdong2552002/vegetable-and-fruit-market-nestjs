import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: string): Promise<Category | null> {
    return this.categoryRepository.findOneBy({ id });
  }

  create(category: Category): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  update(id: string, categoryData: Partial<Category>) {
    return this.categoryRepository.update(id, categoryData);
  }

  delete(id: string) {
    return this.categoryRepository.delete(id);
  }
}
