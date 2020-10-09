import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FoodComponent } from './food/food.component';
import 'jspdf-autotable';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'profile', pathMatch: 'full', component: ProfileComponent },
      { path: 'food', pathMatch: 'full', component: FoodComponent },
    ]),
  ],
  declarations: [ProfileComponent, FoodComponent],
})
export class BackendModule {}
