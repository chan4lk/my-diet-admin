import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReportService, TopUser } from '@my-diet-admin/shared';
import jsPDF from 'jspdf';
@Component({
  selector: 'md-top-gainers-chart',
  templateUrl: './top-gainers-chart.component.html',
  styleUrls: ['./top-gainers-chart.component.scss'],
  providers: [DatePipe],
})
export class TopGainersChartComponent implements OnInit {
  constructor(private reportService: ReportService) {}
  topUsers: TopUser[] = [];
  ngOnInit(): void {
    const now = new Date();
    now.setDate(now.getDate() - 1);
    this.reportService
      .getTopGainers(now, 10)
      .subscribe((users) => (this.topUsers = users));
  }

  downloadChart(title: string) {
    const doc = new jsPDF('p', 'mm');
    doc.setFontSize(15);
    doc.text(`Report Name: ${title}`, 10, 10);
    doc.setFontSize(10);
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
    doc.save('top-gainers.pdf');
  }
}
