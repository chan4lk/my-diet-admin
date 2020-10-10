import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReportService } from '@my-diet-admin/shared';
import { ChartDataSets } from 'chart.js';
import jsPDF from 'jspdf';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'md-health-category-chart',
  templateUrl: './health-category-chart.component.html',
  styleUrls: ['./health-category-chart.component.scss'],
})
export class HealthCategoryChartComponent implements OnInit {
  public dateCount = 14;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1,
          },
        },
      ],
    },
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: any = [];
  constructor(
    private reportService: ReportService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const chartData: any = [
      { data: [], label: 'Under Weight' },
      { data: [], label: 'Healthy' },
      { data: [], label: 'Over Weight' },
    ];

    const labels: string[] = [];
    const now = new Date();
    now.setDate(now.getDate() - 1);
    this.reportService.getHealthData(now, this.dateCount).subscribe((data) => {
      data.forEach((item) => {
        labels.push(
          this.datePipe.transform(new Date(item.date), 'MM/dd') as string
        );
        chartData[0].data.push(item.underWeightCount);
        chartData[1].data.push(item.healthyCount);
        chartData[2].data.push(item.overWeightCount);
      });

      this.barChartData = chartData;
      this.barChartLabels = labels;
    });
  }

  downloadChart(element: HTMLCanvasElement, title: string) {
    const doc = new jsPDF('p', 'mm', [
      element.clientWidth,
      element.clientHeight,
    ]);
    doc.setFontSize(80);
    doc.text(`Report Name: ${title}`, 30, 30);
    doc.setFontSize(30);
    doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 30, 60);
    const imgData = element.toDataURL('image/png');
    doc.addImage(
      imgData,
      'PNG',
      10,
      90,
      element.clientWidth,
      element.clientHeight
    );
    doc.save('sample-file.pdf');
  }
}
