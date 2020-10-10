import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BMIReportComponent } from './bmireport/bmireport.component';
import { ProgressReportComponent } from './progress-report/progress-report.component';
import { SharedModule } from '@my-diet-admin/shared';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'bmi', pathMatch: 'full', component: BMIReportComponent },
      {
        path: 'progress',
        pathMatch: 'full',
        component: ProgressReportComponent,
      },
    ]),
  ],
  providers: [DatePipe],
  declarations: [BMIReportComponent, ProgressReportComponent],
})
export class ReportsModule {}
