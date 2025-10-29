import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //ensures no extra properties  are carried to the controller
      forbidNonWhitelisted: true, //Throws an error for xtra properties not in the DTO
      transform: true, //Simply Means whatever dto we are using for the validationpipe data being assigned is an instance of the specified DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
