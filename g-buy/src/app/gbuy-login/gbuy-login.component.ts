import { Component, OnInit } from '@angular/core';
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
  isLoggedIn = false;
  rolesList: string[] = [];
  errorMessageStr = '';

  constructor(private gbuyAuthService: GbuyAuthService, private gbuyTokenLoadService: GbuyTokenLoadService) { }

  ngOnInit(): void {
    if (this.gbuyTokenLoadService.getToken()) {
      this.isLoggedIn = true;
      this.rolesList = this.gbuyTokenLoadService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { uname, pwd } = this.form;
    this.gbuyAuthService.login(uname, pwd).subscribe(
      data => {
        this.gbuyTokenLoadService.saveToken(data.accessToken);
        this.gbuyTokenLoadService.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.rolesList = this.gbuyTokenLoadService.getUser().roles;
        this.reloadPage();
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
