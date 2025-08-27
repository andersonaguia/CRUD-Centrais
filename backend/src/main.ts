import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './common/api-docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    }),
  );

  swaggerSetup(app);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
