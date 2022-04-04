import { Injectable } from '@angular/core';
const GBUY_TOKEN = 'auth-token';
const GBUY_USER = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class GbuyTokenLoadService {

  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(GBUY_TOKEN);
    window.sessionStorage.setItem(GBUY_TOKEN, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(GBUY_TOKEN);
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(GBUY_USER);
    window.sessionStorage.setItem(GBUY_USER, JSON.stringify(user));
  }
  public getUser(): any {
    const user = window.sessionStorage.getItem(GBUY_USER);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

}
