import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  baseUrl: string = 'http://api.weatherapi.com/v1';
  API_KEY: string = 'e89c470c8a344dc7a52140858231808';

  constructor(private http: HttpClient) { }

  getDataByQuery(q:string){
    return this.http.get(this.baseUrl + '/current.json?key=' + this.API_KEY + '&q='+ q +'&aqi=no');
  }
}
