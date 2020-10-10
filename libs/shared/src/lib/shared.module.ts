import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRatedByDateComponent } from './components/food-rated-by-date/food-rated-by-date.component';
import { FoodRatingComponent } from './components/food-rating/food-rating.component';
import { TopRatedFoodComponent } from './components/top-rated-food/top-rated-food.component';
import { LeastRatedFoodComponent } from './components/least-rated-food/least-rated-food.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FoodRatedByDateComponent,
    FoodRatingComponent,
    TopRatedFoodComponent,
    LeastRatedFoodComponent,
  ],
  exports: [
    FoodRatedByDateComponent,
    FoodRatingComponent,
    TopRatedFoodComponent,
    LeastRatedFoodComponent,
  ],
})
export class SharedModule {}
