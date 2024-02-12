import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeather(lat: string, lon: string): Promise<any> {
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Ensure you have this set in your .env file
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    return this.httpService.get(url).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Error when calling OpenWeatherMap:', error);
        return throwError(() => new Error('Failed to get weather data'));
      })
    ).toPromise();
  }
}
