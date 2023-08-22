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
  measuresArray: any;

  constructor(public spinnerService :SpinnerService){}

  ngOnInit(){
    
  }

  ngOnChanges(){
    this.isFchecked ? this.loadinFarhnheit() : this.loadinCelsius();
    this.wind = this.weatherData?.current?.wind_kph;
    this.humidity = this.weatherData?.current?.humidity;
    this.measuresArray = [
      {measurement: 'Pressure',measureValue: this.weatherData?.current?.pressure_mb + ' PS', imgUrl: 'https://icon-library.com/images/pressure-icon-png/pressure-icon-png-13.jpg'},
      {measurement: 'Humidity',measureValue: this.weatherData?.current?.humidity +' %', imgUrl:'https://cdn-icons-png.flaticon.com/512/3262/3262966.png'},
      {measurement: 'Wind',measureValue: this.weatherData?.current?.wind_kph + ' km/h', imgUrl:'https://cdn-icons-png.flaticon.com/512/6393/6393556.png'},
      {measurement: 'UV rays',measureValue: this.weatherData?.current?.uv, imgUrl:'https://cdn-icons-png.flaticon.com/512/5578/5578463.png'},
      {measurement: 'Cloud',measureValue: this.weatherData?.current?.cloud + ' %', imgUrl:'https://cdn-icons-png.flaticon.com/512/4834/4834559.png'},
    ]
    this.visibility = this.spinnerService.visibility.value;
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
