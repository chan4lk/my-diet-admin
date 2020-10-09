import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BMIReportComponent } from './bmireport/bmireport.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'bmi', pathMatch: 'full', component: BMIReportComponent },
      {
        path: 'progress',
        pathMatch: 'full',
        component: ProgressReportComponent,
      },
    ]),
  ],
  declarations: [BMIReportComponent, ProgressReportComponent],
})
export class ReportsModule {}
