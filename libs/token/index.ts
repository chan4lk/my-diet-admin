import { InjectionToken } from '@angular/core';
export interface Environment {
  production: boolean;
  baseUrl: string;
  auth: string;
  users: string;
  diet: string;
  foods: string;
  progress: string;
  profile: string;
  report: string;
}
export const ENV: InjectionToken<Environment> = new InjectionToken<Environment>(
  'env'
);
