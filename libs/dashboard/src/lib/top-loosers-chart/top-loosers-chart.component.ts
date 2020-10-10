import { Component, OnInit } from '@angular/core';
import { ReportService, TopUser } from '@my-diet-admin/shared';
import jsPDF from 'jspdf';

@Component({
  selector: 'md-top-loosers-chart',
  templateUrl: './top-loosers-chart.component.html',
  styleUrls: ['./top-loosers-chart.component.scss'],
})
export class TopLoosersChartComponent implements OnInit {
  constructor(private reportService: ReportService) {}
  topUsers: TopUser[] = [];
  ngOnInit(): void {
    const now = new Date();
    now.setDate(now.getDate() - 1);
    this.reportService
      .getTopLoosers(now, 10)
      .subscribe((users) => (this.topUsers = users));
  }

  downloadChart(title: string) {
    const doc = new jsPDF('p', 'mm');
    doc.setFontSize(30);
    doc.text(`Report Name: ${title}`, 10, 10);
    doc.setFontSize(20);
    doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 10, 20);
    (doc as any).autoTable({
      head: [['Full Name', 'Weight', 'Weight Change', 'Change Percentage']],
      body: this.topUsers.map((p) => [
        p.fullName,
        p.weight,
        p.change,
        p.percentage,
      ]),
      startY: 25,
    });
    doc.save('top-loosers.pdf');
  }
}
