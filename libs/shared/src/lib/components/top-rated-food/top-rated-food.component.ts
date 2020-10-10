import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { switchMap, map } from 'rxjs/operators';
import { FoodRating, RatingWithName } from '../../models';
import { RatingService, FoodService, ReportService } from '../../services';

@Component({
  selector: 'my-diet-admin-top-rated-food',
  templateUrl: './top-rated-food.component.html',
  styleUrls: ['./top-rated-food.component.scss'],
})
export class TopRatedFoodComponent implements OnInit {
  foods: FoodRating[] = [];
  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportService
      .getRating()
      .pipe(
        map((foods) =>
          foods
            .filter((r) => r.rating !== 0)
            .sort((a, b) => b.rating - a.rating)
        )
      )
      .subscribe((foods) => (this.foods = foods));
  }

  downloadChart(title: string) {
    const doc = new jsPDF('p', 'mm');
    doc.setFontSize(30);
    doc.text(`Report Name: ${title}`, 10, 10);
    doc.setFontSize(20);
    doc.text(`Report Date: ${new Date().toLocaleDateString()}`, 10, 20);
    (doc as any).autoTable({
      head: [['Food Id', 'Name', 'Rating']],
      body: this.foods.map((p) => [p.foodId, p.food.name, p.rating]),
      startY: 25,
    });
    doc.save('food-rating.pdf');
  }
}
