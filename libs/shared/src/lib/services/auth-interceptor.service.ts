import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { ENV, Environment } from '@my-diet-admin/token';
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private storage: StorageService,
    private router: Router,
    @Inject(ENV) private environment: Environment
  ) {}
  getToken() {
    return this.storage.getItem<{ token: string }>('__token');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (
      !request.url.startsWith(
        `${this.environment.baseUrl}/${this.environment.auth}`
      ) &&
      request.url !== `${this.environment.baseUrl}/${this.environment.users}`
    ) {
      const token = this.getToken();

      if (!token) {
        this.router.navigate(['/login']);
      } else {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token.token}`,
          },
        });
      }
    }

    return next.handle(request);
  }
}
