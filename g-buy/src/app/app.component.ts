import { Component } from '@angular/core';
import { GbuyTokenLoadService } from './services/gbuy-token-load.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'g-buy';
  firstName:any;
  isLoggedIn = false;
  constructor(private tokenStorageService: GbuyTokenLoadService) { 
  
  }
  ngOnInit(){
    this.isLoggedIn=Boolean(this.tokenStorageService.loginFlag)
    this.firstName=window.sessionStorage.getItem("firstName")
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
