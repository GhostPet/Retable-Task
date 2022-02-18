import { Controller, Get, Param, Post } from '@nestjs/common';
import { Crud, CrudController, CrudRequest } from '@nestjsx/crud';
import { Category } from './categories.entity';
import { CategoriesService } from './categories.service';
import { Product } from '../products/products.entity';

@Crud({
    model: {
        type: Category
    }
})
@Controller('categories')
export class CategoriesController implements CrudController<Category> {
    constructor(public service: CategoriesService) { }

    //link a category to a product
    @Post('link/:id/:productId')
    async linkCategoryToProduct(@Param('id') id: number, @Param('productId') productId: number): Promise<Category> {
        return await this.service.linkCategoryToProduct(id, productId);
    }

    // Get products inside category
    @Get(':id/products')
    async getProducts(@Param('id') id: number): Promise<Product[]> {
        return await this.service.getProducts(id);
    }
}
