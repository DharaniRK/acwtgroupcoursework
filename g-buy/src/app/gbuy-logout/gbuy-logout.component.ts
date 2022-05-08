import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gbuy-logout',
  templateUrl: './gbuy-logout.component.html',
  styleUrls: ['./gbuy-logout.component.css']
})
export class GbuyLogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.sessionStorage.clear();
  }

}
