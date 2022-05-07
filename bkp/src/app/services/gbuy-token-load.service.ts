import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GbuyTokenLoadService {

  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
}
