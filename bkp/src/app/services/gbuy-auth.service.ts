import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GbuyAuthService {

  constructor(private http: HttpClient) { }
  login(username: any, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/login', {
      username,
      password
    }, httpOptions);
  }
}
