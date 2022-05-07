import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8000/login/';
@Injectable({
  providedIn: 'root'
})
export class GbuyUsersService {

  constructor(private http: HttpClient) { }
  getUserData(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

}
