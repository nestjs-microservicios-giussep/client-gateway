import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { TransportModule } from 'src/transport/transport.module';

@Module({
  imports: [TransportModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
