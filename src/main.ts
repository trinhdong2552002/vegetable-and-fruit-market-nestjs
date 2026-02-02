import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// The bootstrap function initializes and starts the NestJS application.
async function initializeApplication() {
  // The application is created using the AppModule as the root module.
  const app = await NestFactory.create(AppModule);

  // Swagger configuration for API documentation
  const configSwagger = new DocumentBuilder()
    .setTitle('Vegetable and Fruit Market API')
    .setDescription('The Vegetable and Fruit Market API.')
    .setVersion('1.0')
    .build();

  // Create Swagger document
  const documentFactory = () =>
    SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('api', app, documentFactory());

  // The application listens on the specified port (default is 3000).
  await app.listen(process.env.PORT ?? 3000);
}
initializeApplication();
