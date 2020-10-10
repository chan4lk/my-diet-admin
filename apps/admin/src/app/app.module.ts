import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor, LoadingInterceptor } from '@my-diet-admin/shared';
import { ENV } from '@my-diet-admin/token';
import { environment } from '../environments/environment';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import 'jspdf-autotable';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: ENV,
      useValue: environment,
    },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
