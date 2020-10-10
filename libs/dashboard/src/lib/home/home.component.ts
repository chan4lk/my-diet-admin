import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'md-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  public barChartLabels = [
    '10/03',
    '10/04',
    '10/05',
    '10/06',
    '10/07',
    '10/08',
    '10/09',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [3, 3, 3, 3, 2, 2, 1], label: 'Under Weight' },
    { data: [1, 1, 1, 1, 1, 2, 3], label: 'Healthy' },
    { data: [3, 3, 3, 2, 3, 2, 1], label: 'Over Weight' },
  ];
  constructor() {}

  ngOnInit(): void {}

  download() {
    const wrapper = document.getElementById('dashboardWrapper') as HTMLElement;
    html2canvas(wrapper).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', [
        wrapper.clientWidth,
        wrapper.clientHeight,
      ]);
      doc.addImage(
        imgData,
        'PNG',
        10,
        10,
        canvas.clientWidth,
        canvas.clientHeight
      );
      doc.save('dashboard.pdf');
    });
  }

  downloadCharts() {
    const canvases = document.getElementsByTagName('canvas');
    const doc = new jsPDF('p', 'mm', [1000, 1000]);

    for (let index = 0; index < canvases.length; index++) {
      const element = canvases[index];
      const imgData = element.toDataURL('image/png');
      doc.addImage(
        imgData,
        'PNG',
        10,
        10 + element.clientHeight,
        element.clientWidth,
        element.clientHeight
      );
    }
    doc.save('sample-file.pdf');
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
