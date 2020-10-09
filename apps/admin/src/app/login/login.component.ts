import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, StoreService, UserService } from '@my-diet-admin/shared';

@Component({
  selector: 'my-diet-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private user: UserService,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.logout();
  }

  login(email, password) {
    this.auth.login(email, password).subscribe((token) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
