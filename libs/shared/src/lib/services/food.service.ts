import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { FoodModel } from '../models/food.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(
    private api: ApiService,
    @Inject(ENV) private environment: Environment
  ) {}

  getFoods() {
    return this.api.get<FoodModel[]>(this.environment.foods);
  }
}
