import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Crud({
    model: {
        type: Product
    }
})
@Controller('products')
export class ProductsController implements CrudController<Product> {
    constructor(public service: ProductsService) { }

    // Get all products
    @Get()
    async getAllProducts(): Promise<Product[]> {
        return await this.service.getAllProducts();
    }

    // Get one product
    @Get(':id')
    async getOneProduct(@Param('id') id: number): Promise<Product> {
        return await this.service.getOneProduct(id);
    }
}

    
