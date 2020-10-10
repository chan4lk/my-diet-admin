import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptor implements HttpInterceptor {
  constructor() {}
  count = 0;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // convert promise to observable using 'from' operator
    return from(this.handle(req, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    const overlay = document.getElementsByClassName('loading-overlay')[0];
    if (!overlay.classList.contains('is-active')) {
      overlay.classList.toggle('is-active');
    }
    this.count++;
    return next
      .handle(req)
      .pipe(
        finalize(async () => {
          this.count--;
          if (this.count === 0) {
            if (overlay.classList.contains('is-active')) {
              overlay.classList.toggle('is-active');
            }
          }

          await Promise.resolve(true);
        })
      )
      .toPromise();
  }
}
