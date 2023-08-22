import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUiComponent } from './components/main-ui/main-ui.component';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ForecastComponent } from './components/forecast/forecast.component';

const routes: Routes = [
  { path: '', component: MainUiComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'forecast', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
