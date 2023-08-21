import { SpinnerService } from './../../services/spinner.service';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit, OnChanges{
  @Input() weatherData: any;
  condition: any;
  temp: any;
  wind: any;
  humidity: any;
  pressure: any;
  isFchecked: any;
  visibility: any = false;

  constructor(public spinnerService :SpinnerService){}

  ngOnInit(){
    
  }

  ngOnChanges(){
    this.temp = this.weatherData?.current?.temp_c + ' ºC';
    this.wind = this.weatherData?.current?.wind_kph;
    this.humidity = this.weatherData?.current?.humidity;
    this.pressure = this.weatherData?.current?.pressure_mb;
    this.visibility = this.spinnerService.visibility.value;
    console.log('visibility = ', this.visibility);
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
