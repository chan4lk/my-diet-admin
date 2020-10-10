import { Component, OnInit } from '@angular/core';
import { Rating } from '../../models';
import jsPDF from 'jspdf';
import { RatingService } from '../../services';
@Component({
  selector: 'my-diet-admin-food-rating',
  templateUrl: './food-rating.component.html',
  styleUrls: ['./food-rating.component.scss'],
})
export class FoodRatingComponent implements OnInit {
  foods: Rating[] = [];
  constructor(private ratingService: RatingService) {}

  ngOnInit(): void {
    this.ratingService.getRating().subscribe((foods) => (this.foods = foods));
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
