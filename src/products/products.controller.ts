import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { PRODUCT_SERVICE } from '../config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  FindAllProducts() {
    return this.productsClient.send({ cmd: 'find_all_product' }, {});
  }

  @Get(':id')
  FindProduct(@Param('id') id: string) {
    return `Esta función regresa el producto número ${id}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `Esta función elimina el producto número ${id}`;
  }

  @Patch(':id')
  patchProduct(@Param('id') id: string, @Body() body: any) {
    return `Esta función actualiza el producto número ${id}`;
  }
}
