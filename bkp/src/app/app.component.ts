import { Component } from '@angular/core';
import { GbuyTokenLoadService } from './services/gbuy-token-load.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'g-buy';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  uname?: string;
  constructor(private tokenStorageService: GbuyTokenLoadService) { }
  ngOnInit(): void {
    
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
