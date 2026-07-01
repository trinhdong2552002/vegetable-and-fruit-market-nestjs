import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getOneProduct(id: string): Promise<Product | null> {
    return await this.productRepository.findOneBy({ id });
  }

  async createProduct(data: ProductDto): Promise<Product> {
    const newProduct = this.productRepository.create(data);
    return await this.productRepository.save(newProduct);
  }

  async updateProduct(id: string, data: ProductDto): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new Error('Product not found');
    }
    const updatedProduct = this.productRepository.merge(product, data);
    return await this.productRepository.save(updatedProduct);
  }

  async deleteProduct(id: string) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new Error('Product not found');
    }
    await this.productRepository.delete(product);
  }
}
