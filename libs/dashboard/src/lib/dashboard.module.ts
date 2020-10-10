import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { BMIChartComponent } from './bmichart/bmichart.component';
import { HealthCategoryChartComponent } from './health-category-chart/health-category-chart.component';
import { TopGainersChartComponent } from './top-gainers-chart/top-gainers-chart.component';
import { TopLoosersChartComponent } from './top-loosers-chart/top-loosers-chart.component';
import { MaintainersChartComponent } from './maintainers-chart/maintainers-chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomeComponent },
    ]),
  ],
  providers: [DatePipe],
  declarations: [
    HomeComponent,
    BMIChartComponent,
    HealthCategoryChartComponent,
    TopGainersChartComponent,
    TopLoosersChartComponent,
    MaintainersChartComponent,
  ],
})
export class DashboardModule {}
