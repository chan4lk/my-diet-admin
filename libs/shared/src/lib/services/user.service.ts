import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { UserDetailsResponse } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   *
   */
  constructor(
    private api: ApiService,
    @Inject(ENV) private environment: Environment
  ) {}

  getByEmail(email: string) {
    return this.api.get<UserDetailsResponse>(
      `${this.environment.users}/ByEmail/${email}`
    );
  }
}
