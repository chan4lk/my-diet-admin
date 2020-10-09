import { DatePipe } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { ProgressList } from '../models/progress.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  constructor(
    private api: ApiService,
    private datePipe: DatePipe,
    @Inject(ENV) private environment: Environment
  ) {}

  update(userId: number, date: Date, weight: number) {
    return this.api.post(this.environment.progress, {
      userId,
      date: this.datePipe.transform(
        date,
        // tslint:disable-next-line: quotemark
        "yyyy'-'MM'-'dd'T'HH':'mm':'ss'"
      ),
      weight,
    });
  }

  getProgress(userId: number) {
    return this.api.get<ProgressList>(
      `${this.environment.progress}/User/${userId}?Order.Ascending=false&Order.Property=date&Page.Index=1&Page.Size=50`
    );
  }
}
