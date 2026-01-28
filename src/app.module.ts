import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './modules/categories/categories.module';

// The AppModule is the root module of the application
@Module({
  imports: [
    // Other modules can be imported here
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '123456',
      database: 'vegetable_and_fruit_market_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CategoriesModule,
  ],
  // All the controllers and providers are registered here
  controllers: [AppController],
  // All the services are registered here
  providers: [AppService],
})
export class AppModule {}
