import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherService } from './weather/weather.service';
import { HttpModule } from '@nestjs/axios';
import { WeatherController } from './weather/weather.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
  ],
  providers: [WeatherService],
  controllers: [WeatherController],
})
export class AppModule {}
