import { Component, OnInit } from '@angular/core';
import { GbuyAuthService } from '../services/gbuy-auth.service';
//import { GbuyTokenLoadService } from '../services/gbuy-token-load.service';
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
  isLoggedIn = false;
  rolesList: string[] = [];
  errorMessageStr = '';
  loginFlag='';

  constructor(private gbuyAuthService: GbuyAuthService) { }

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
