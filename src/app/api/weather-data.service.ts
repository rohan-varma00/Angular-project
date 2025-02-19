import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private apiKey = '';//use your own apikey

  constructor(private http: HttpClient) {}

  // Method to get weather data by city name
  getWeatherByCity(city: string): Observable<any> {
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('q', city);

    return this.http.get(this.apiUrl, { params });
  }
}
