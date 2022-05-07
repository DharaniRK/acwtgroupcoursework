import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GbuyTokenLoadService {
  loginFlag='';
  firstName='';
  userId='';
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
}
