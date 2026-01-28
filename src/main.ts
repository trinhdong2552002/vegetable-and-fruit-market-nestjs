import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// The bootstrap function initializes and starts the NestJS application.
async function initializeApplication() {
  // The application is created using the AppModule as the root module.
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
initializeApplication();
