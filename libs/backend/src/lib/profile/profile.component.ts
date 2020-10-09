import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileResponse, ProfileService } from '@my-diet-admin/shared';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'my-diet-admin-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profiles: ProfileResponse[] = [];

  constructor(private profileService: ProfileService) {}

  active = true;
  ngOnInit(): void {
    this.profileService
      .getProfiles()
      .pipe(takeWhile((_) => this.active))
      .subscribe((profiles) => (this.profiles = profiles));
  }

  ngOnDestroy(): void {
    this.active = false;
  }
}
