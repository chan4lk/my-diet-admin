import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { ReportService } from '@my-diet-admin/shared';
import { ChartData, ChartDataSets } from 'chart.js';
@Component({
  selector: 'md-bmichart',
  templateUrl: './bmichart.component.html',
  styleUrls: ['./bmichart.component.scss'],
})
export class BMIChartComponent implements OnInit {
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          type: 'linear',
          position: 'bottom',
        },
      ],
    },
  };

  public cahrtType = 'scatter';
  public chartLegend = true;
  public chartData: any = [];
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService.getBMIData().subscribe((data) => {
      this.chartData = [
        {
          label: 'BMI vs Weight',
          data: data.map((d) => ({
            x: d.weight,
            y: d.bmiValue,
          })),
        },
      ];
    });
  }

  downloadChart(element: HTMLCanvasElement, title: string) {
    const doc = new jsPDF('p', 'mm', [1000, 1000]);
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
