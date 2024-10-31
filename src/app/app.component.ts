import { Component } from '@angular/core';
import {WeatherDataService} from '../app/api/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="Weather-app";
  city: string = '';
  weatherData: any;
  temp:boolean=false;
  constructor(private WeatherDataService: WeatherDataService) {}
  getWeather() {
    this.WeatherDataService.getWeatherByCity(this.city).subscribe(
      (data) => {
        this.weatherData = data;
        this.temp=true;
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
