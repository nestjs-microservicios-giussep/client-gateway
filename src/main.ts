import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('MainGateway');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  await app.listen(env.port);
  logger.log(`Server corriendo en ${env.port}`);
}
bootstrap();
