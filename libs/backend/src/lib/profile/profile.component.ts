import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProfileResponse, ProfileService } from '@my-diet-admin/shared';
import { takeWhile } from 'rxjs/operators';
import jsPDF from 'jspdf';
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

  download() {
    const doc = new jsPDF();
    doc.text('Profiles', 10, 10);
    (doc as any).autoTable({
      head: [['Id', 'Age', 'Height', 'Weight']],
      body: this.profiles.map((p) => [p.id, p.age, p.height, p.weight]),
    });
    doc.save('table.pdf');
  }
}
