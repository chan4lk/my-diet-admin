import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { Rating } from '../models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor(
    private api: ApiService,
    @Inject(ENV) private environment: Environment
  ) {}

  getRating() {
    return this.api.get<Rating[]>(`${this.environment.rating}`);
  }
}
