import { Inject, Injectable } from '@angular/core';
import { ENV, Environment } from '@my-diet-admin/token';
import { ProfileResponse } from '../models/profile.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private api: ApiService,
    @Inject(ENV) private environment: Environment
  ) {}
  getProfiles() {
    return this.api.get<ProfileResponse[]>(`${this.environment.profile}`);
  }
  getProfile(userId: number) {
    return this.api.get<ProfileResponse>(
      `${this.environment.profile}/User/${userId}`
    );
  }

  updateProfile(id: number, profile: ProfileResponse) {
    return this.api.put<ProfileResponse>(
      `${this.environment.profile}/${id}`,
      profile
    );
  }

  createProfile(profile: ProfileResponse) {
    return this.api.post<ProfileResponse>(
      `${this.environment.profile}`,
      profile
    );
  }
}
