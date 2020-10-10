import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
@Component({
  selector: 'my-diet-admin-bmireport',
  templateUrl: './bmireport.component.html',
  styleUrls: ['./bmireport.component.scss'],
})
export class BMIReportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  download() {
    const wrapper = document.getElementById('dashboardWrapper') as HTMLElement;
    html2canvas(wrapper).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', [
        wrapper.clientHeight / 2,
        wrapper.clientWidth / 2,
      ]);
      doc.addImage(
        imgData,
        'PNG',
        10,
        10,
        canvas.clientHeight,
        canvas.clientWidth
      );
      doc.save('reports.pdf');
    });
  }
}
