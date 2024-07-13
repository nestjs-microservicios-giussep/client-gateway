import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';
import { Transform } from 'class-transformer';

export class StatusDto {
  @IsOptional()
  @IsEnum(OrderStatus, {
    message: `Los estatus validos son: ${OrderStatusList}`,
  })
  @Transform(({ value }) => value.toUpperCase())
  status?: string;
}
