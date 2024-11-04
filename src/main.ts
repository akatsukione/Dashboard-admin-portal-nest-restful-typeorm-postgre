import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS API with Postgres, TypeORM and Swagger')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  // Swagger UI
  SwaggerModule.setup('api', app, document);
  // Start the server
  await app.listen(3333);
}
bootstrap();
