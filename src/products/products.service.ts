import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService extends TypeOrmCrudService<Product> {
    constructor(@InjectRepository(Product) repo) {
        super(repo);
    }

    // Get all with Category
    async getAllProducts(): Promise<Product[]> {
        return await this.repo.find({
            relations: ['category']
        });
    }

    // Get with Category
    async getOneProduct(id: number): Promise<Product> {
        return await this.repo.findOne(id, {
            relations: ['categories']
        });
    }
}
