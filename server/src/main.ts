import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorMiddleware } from './error/error.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorMiddleware());
  const port = process.env.PORT || 3001;
  await app.listen(port);
}
bootstrap();
