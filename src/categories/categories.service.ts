import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Category } from './categories.entity';
import { Product } from '../products/products.entity';

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Category> {
    constructor(@InjectRepository(Category) repo) {
        super(repo);
    }

    // Get Products
    async getProducts(id: number): Promise<Product[]> {
        var category =  await this.repo.findOne(id, {
            relations: ['products']
        });
        return category.products;
    }
}
