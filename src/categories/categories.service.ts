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

    // Link a category to a product
    async linkCategoryToProduct(id: number, productId: number): Promise<Category> {
        await this.repo.createQueryBuilder()
            .relation(Category, 'products')
            .of(id)
            .add(productId);
        return this.repo.findOne(id, { relations: ['products'] });
    }

    // Get Products
    async getProducts(id: number): Promise<Product[]> {
        var category =  await this.repo.findOne(id, {
            relations: ['products']
        });
        return category.products;
    }
}
