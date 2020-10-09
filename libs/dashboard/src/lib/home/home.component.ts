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
  };
  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
  constructor() {}

  ngOnInit(): void {}

  download() {
    const wrapper = document.getElementById('dashboardWrapper') as HTMLElement;
    html2canvas(wrapper).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', [1000, 1000]);
      doc.addImage(
        imgData,
        'PNG',
        10,
        10,
        wrapper.clientWidth,
        wrapper.clientHeight
      );
      doc.save('sample-file.pdf');
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
}
