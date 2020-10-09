import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodModel, FoodService } from '@my-diet-admin/shared';
import { takeWhile } from 'rxjs/operators';
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
}
