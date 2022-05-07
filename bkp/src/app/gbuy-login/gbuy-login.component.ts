import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GbuyAuthService } from '../services/gbuy-auth.service';

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
  loginFlag='';

  constructor(private gbuyAuthService: GbuyAuthService,private router: Router) { }
  ngOnInit(): void {
  
  }
  onSubmit(): void {
    const { uname, pwd } = this.form;
    console.log(uname)
    this.gbuyAuthService.login(uname, pwd).subscribe(
      data => {
        this.loginFlag=data;
        this.isLoggedIn = true;
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
