/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

//import { DocumentBuilder } from '@nestjs/swagger';

import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //app.setGlobalPrefix('nestjs');

  // await app.listen(3000);
  //await app.listen(3000);git
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, createDocument(app));
  // app.setGlobalPrefix('nestjs');
  app.enableCors();
  // const cors=require("cors");

  await app.listen(3001);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.useGlobalPipes(new ValidationPipe());
  SwaggerModule.setup('api', app, document);
  //await app.listen(3003);
}

bootstrap();
