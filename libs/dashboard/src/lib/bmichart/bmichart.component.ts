import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

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
  public chartLabels = [
    '10/03',
    '10/04',
    '10/05',
    '10/06',
    '10/07',
    '10/08',
    '10/09',
  ];
  public cahrtType = 'scatter';
  public chartLegend = true;
  private data = [
    {
      weight: 70,
      height: 170,
      bmiValue: 24.2214532871972,
      userId: 1,
    },
    {
      weight: 75,
      height: 160,
      bmiValue: 29.296875,
      userId: 2,
    },
    {
      weight: 81,
      height: 180,
      bmiValue: 25,
      userId: 3,
    },
    {
      weight: 58,
      height: 140,
      bmiValue: 29.5918367346939,
      userId: 4,
    },
    {
      weight: 48,
      height: 135,
      bmiValue: 26.3374485596708,
      userId: 5,
    },
    {
      weight: 42,
      height: 160,
      bmiValue: 16.40625,
      userId: 6,
    },
    {
      weight: 68,
      height: 144,
      bmiValue: 32.7932098765432,
      userId: 7,
    },
    {
      weight: 68,
      height: 162,
      bmiValue: 25.9106843468983,
      userId: 8,
    },
    {
      weight: 46,
      height: 164,
      bmiValue: 17.1029149315883,
      userId: 9,
    },
    {
      weight: 75,
      height: 177,
      bmiValue: 23.9394809920521,
      userId: 10,
    },
    {
      weight: 75,
      height: 177,
      bmiValue: 23.9394809920521,
      userId: 18,
    },
    {
      weight: 45,
      height: 125,
      bmiValue: 28.8,
      userId: 21,
    },
  ];
  public chartData = [
    {
      label: 'BMI vs Weight',
      data: this.data.map((d) => ({
        x: d.weight,
        y: d.bmiValue,
      })),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

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
