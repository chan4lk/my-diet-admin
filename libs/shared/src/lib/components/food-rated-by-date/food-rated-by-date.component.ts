import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { switchMap, map } from 'rxjs/operators';
import { RatingWithName } from '../../models';
import { RatingService, FoodService } from '../../services';

@Component({
  selector: 'my-diet-admin-food-rated-by-date',
  templateUrl: './food-rated-by-date.component.html',
  styleUrls: ['./food-rated-by-date.component.scss'],
})
export class FoodRatedByDateComponent implements OnInit {
  foods: RatingWithName[] = [];
  filteredFood: RatingWithName[] = [];
  selectedDay = 6;
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
      .subscribe((foods) => {
        this.foods = foods;
        this.filteredFood = this.filterBydate();
      });
  }

  private filterBydate() {
    return this.foods.filter((f) => {
      return new Date(f.date).getDay() === this.selectedDay;
    });
  }

  change(e: { target: { value: string } }) {
    this.selectedDay = parseInt(e.target.value, 10);
    this.filteredFood = this.filterBydate();
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
