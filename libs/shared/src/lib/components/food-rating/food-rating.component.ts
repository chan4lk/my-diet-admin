import { Component, OnInit } from '@angular/core';
import { Rating } from '../../models';
import jsPDF from 'jspdf';
import { FoodService, RatingService } from '../../services';
import { map, switchMap } from 'rxjs/operators';

export interface RatingWithName extends Rating {
  name?: string;
}
@Component({
  selector: 'my-diet-admin-food-rating',
  templateUrl: './food-rating.component.html',
  styleUrls: ['./food-rating.component.scss'],
})
export class FoodRatingComponent implements OnInit {
  foods: RatingWithName[] = [];
  constructor(
    private ratingService: RatingService,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.foodService
      .getFoods()
      .pipe(
        switchMap((foods) =>
          this.ratingService.getRating().pipe(
            map((rating) => {
              return rating.map((r) => ({
                ...r,
                name: foods.find((f) => f.id === r.foodId)?.name,
              }));
            })
          )
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
      head: [['Food Id', 'User Id', 'Rating', 'Date']],
      body: this.foods.map((p) => [p.foodId, p.userId, p.rating, p.date]),
      startY: 25,
    });
    doc.save('food-rating.pdf');
  }
}
