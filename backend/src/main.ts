import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { swaggerSetup } from './common/api-docs';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Messages } from './common/messages';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new IoAdapter(app));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  swaggerSetup(app);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

  Logger.log(`${Messages.default.logs.APP_RUNNING}${process.env.PORT ?? 3000}`);
  Logger.log(Messages.default.logs.SOCKET_IO_READY);
}

bootstrap();
