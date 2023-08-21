import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.css']
})
export class MainUiComponent implements AfterViewInit, OnInit{
  @ViewChild('query',{static:false}) query: ElementRef;
  weatherData: any;
  message: any;
  searchSubject = new Subject<string>();

  constructor(private weatherService: WeatherServiceService){}

  ngOnInit(): void {
      this.getData('India');

      this.searchSubject.pipe(
        debounceTime(1000),
        distinctUntilChanged()
      ).subscribe((res)=>{
        this.getData(res)
      });
  }

  ngAfterViewInit(){
    fromEvent(this.query.nativeElement,'keyup').subscribe((res: any) => {
      this.searchSubject.next(res.target.value);
    })
  }


  inputChange($event){
    console.log($event);
    this.searchSubject.next($event);
  }

  getData(e: any){
    this.weatherData = this.weatherService.getDataByQuery(e).subscribe((res)=>{
      this.weatherData = res;
      this.message = this.weatherData?.current?.condition?.text;
    }
    ,
    (err)=>{
      console.error(err.error);
      this.weatherData = null;
    });
  }
}
