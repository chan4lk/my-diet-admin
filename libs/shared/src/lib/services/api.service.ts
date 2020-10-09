import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV, Environment } from '@my-diet-admin/token';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  /**
   *
   */
  constructor(
    private http: HttpClient,
    @Inject(ENV) private environment: Environment
  ) {}

  get<T>(
    url: string,
    headers: { [key: string]: string } = { 'Content-Type': 'application/json' }
  ) {
    return this.http.get<T>(`${this.environment.baseUrl}/${url}`, { headers });
  }

  post<T>(
    url: string,
    body: any,
    headers: { [key: string]: string } = { 'Content-Type': 'application/json' }
  ) {
    return this.http.post<T>(`${this.environment.baseUrl}/${url}`, body, {
      headers,
    });
  }

  put<T>(
    url: string,
    body: any,
    headers: { [key: string]: string } = { 'Content-Type': 'application/json' }
  ) {
    return this.http.put<T>(`${this.environment.baseUrl}/${url}`, body, {
      headers,
    });
  }

  delete<T>(
    url: string,
    headers: { [key: string]: string } = { 'Content-Type': 'application/json' }
  ) {
    return this.http.delete<T>(`${this.environment.baseUrl}/${url}`, {
      headers,
    });
  }
}
