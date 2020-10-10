import { DatePipe } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { BMIDetail, HealthDetail, TopUser } from '../models/report.models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(
    private api: ApiService,
    private datePipe: DatePipe,
    @Inject(ENV) private environment: Environment
  ) {}

  getBMIData() {
    return this.api.get<BMIDetail[]>(`${this.environment.report}/Bmi`);
  }

  getHealthData(date: Date, days: number) {
    return this.api.get<HealthDetail[]>(
      `${this.environment.report}/Health/${days}/${this.datePipe.transform(
        date,
        "yyyy'-'MM'-'dd'"
      )}`
    );
  }

  getTopGainers(date: Date, count: number) {
    return this.api.get<TopUser[]>(
      `${this.environment.report}/TopGainers/${this.datePipe.transform(
        date,
        "yyyy'-'MM'-'dd'"
      )}/${count}`
    );
  }

  getTopLoosers(date: Date, count: number) {
    return this.api.get<TopUser[]>(
      `${this.environment.report}/TopLoosers/${this.datePipe.transform(
        date,
        "yyyy'-'MM'-'dd'"
      )}/${count}`
    );
  }
}
