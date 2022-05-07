import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GbuyAuthService } from '../services/gbuy-auth.service';
import { GbuyTokenLoadService } from '../services/gbuy-token-load.service';
@Component({
  selector: 'app-gbuy-login',
  templateUrl: './gbuy-login.component.html',
  styleUrls: ['./gbuy-login.component.css']
})
export class GbuyLoginComponent implements OnInit {
  form: any = {
    uname: null,
    pwd: null
  };
  isLoginFailed = false;
  isInvalidDetails = false;
  isLoggedIn = false;
  rolesList: string[] = [];
  errorMessageStr = '';
  loginFlag:any;
  firstName:any
  constructor(private gbuyAuthService: GbuyAuthService,private router: Router,private gbuyTokenLoadService: GbuyTokenLoadService) { }
  ngOnInit(): void {
  
  }
  onSubmit(): void {
    const { uname, pwd } = this.form;
    console.log(uname)
    this.gbuyAuthService.login(uname, pwd).subscribe(
      data => {
        this.loginFlag=data.status;
        this.gbuyTokenLoadService.firstName=data.firstName
        this.firstName=data.firstName
        this.gbuyTokenLoadService.userId=data.userId
        this.isLoggedIn = true;
        this.gbuyTokenLoadService.loginFlag=data.status;
        this.isLoginFailed = false;
        if(this.loginFlag==='True'){
          console.log(this.loginFlag)
          this.router.navigate([`products`]);
        }else{ 
          this.isLoggedIn = false;
          console.log(this.loginFlag)
          this.isInvalidDetails = true;
        }
      },
      err => {
        this.errorMessageStr = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
