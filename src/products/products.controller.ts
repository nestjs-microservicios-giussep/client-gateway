import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProduct() {
    return 'Crea un producto';
  }

  @Get()
  FindAllProducts() {
    return 'Esta función regresa todos los productos';
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
