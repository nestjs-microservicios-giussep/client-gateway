import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TransportModule } from '../transport/transport.module';

@Module({
  imports: [TransportModule],
  controllers: [AuthController],
})
export class AuthModule {}
