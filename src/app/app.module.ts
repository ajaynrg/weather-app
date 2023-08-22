import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainUiComponent } from './components/main-ui/main-ui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AutoSizeInputModule} from 'ngx-autosize-input';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { MeasuresCardComponent } from './components/weather-card/measures-card/measures-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainUiComponent,
    WeatherCardComponent,
    HomeComponent,
    ForecastComponent,
    AlertsComponent,
    MeasuresCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AutoSizeInputModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
