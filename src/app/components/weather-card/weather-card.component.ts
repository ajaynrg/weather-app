import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent{
  @Input() weatherData: any;
  condition: any;
  temp: any;
  wind: any;
  humidity: any;
  pressure: any;
  isFchecked: any;

  ngOnChanges(){
    this.temp = this.weatherData?.current?.temp_c + ' ºC';
    this.wind = this.weatherData?.current?.wind_kph;
    this.humidity = this.weatherData?.current?.humidity;
    this.pressure = this.weatherData?.current?.pressure_mb;
  }

  unitSwitch(){
    if(this.isFchecked){
      this.loadinFarhnheit();
    }else{
      this.loadinCelsius();
    }
  }

  loadinCelsius(){
    this.temp = this.weatherData?.current?.temp_c + ' ºC';
  }
  loadinFarhnheit(){
    this.temp = this.weatherData?.current?.temp_f + ' ºF';
  }
}
