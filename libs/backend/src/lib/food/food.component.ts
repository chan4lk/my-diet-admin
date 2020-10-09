import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodModel, FoodService } from '@my-diet-admin/shared';
import { takeWhile } from 'rxjs/operators';

import jsPDF from 'jspdf';

@Component({
  selector: 'my-diet-admin-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit, OnDestroy {
  foods: FoodModel[] = [];
  active = true;
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodService
      .getFoods()
      .pipe(takeWhile(() => this.active))
      .subscribe((foods) => (this.foods = foods));
  }

  ngOnDestroy(): void {
    this.active = false;
  }

  download() {
    const doc = new jsPDF();
    doc.text('Foods', 10, 10);
    (doc as any).autoTable({ html: '#foods' });
    doc.save('table.pdf');
  }
}
