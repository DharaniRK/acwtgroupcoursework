import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private tokenStorageService: GbuyTokenLoadService,private router: Router) { 
  
  }
  ngOnInit(){
    this.isLoggedIn=Boolean(this.tokenStorageService.loginFlag)
    this.firstName=window.sessionStorage.getItem("firstName")
  }
  logout(navigate: string): void {
    this.tokenStorageService.signOut();
    this.router.navigate([`${navigate}`]);
  }
 
}
