import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionMiddleware } from './http-exception.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionMiddleware());
  await app.listen(3000);
}
bootstrap();
