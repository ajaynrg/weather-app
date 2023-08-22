import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  baseUrl: string = 'http://api.weatherapi.com/v1';
  API_KEY: string = 'e89c470c8a344dc7a52140858231808';
  // current: any;
  // forecastAndAlerts: any;
  // result: any;

  constructor(private http: HttpClient) { }

  getDataByQuery(q: string){
    return this.http.get(this.baseUrl + '/current.json?key=' + this.API_KEY + '&q='+ q +'&aqi=yes');
  }

  getForecastAndAlerts(q: string){
    return this.http.get(this.baseUrl + '/forecast.json?key=' + this.API_KEY + '&q='+ q +'&days=3&aqi=no&alerts=yes');;
  }
}
