import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { BMIDetail, HealthDetail } from '../models/report.models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(
    private api: ApiService,
    @Inject(ENV) private environment: Environment
  ) {}

  getBMIData() {
    return this.api.get<BMIDetail[]>(`${this.environment.report}/Bmi`);
  }

  getHealthData(days: number) {
    return this.api.get<HealthDetail[]>(
      `${this.environment.report}/Health/${days}`
    );
  }
}
