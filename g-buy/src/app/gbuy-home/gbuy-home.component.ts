import { Component, OnInit } from '@angular/core';
import { GbuyUsersService } from '../services/gbuy-users.service';
@Component({
  selector: 'app-gbuy-home',
  templateUrl: './gbuy-home.component.html',
  styleUrls: ['./gbuy-home.component.css']
})
export class GbuyHomeComponent implements OnInit {
  content?: string;
  constructor(private gbuyUsersService: GbuyUsersService) { }
  ngOnInit(): void {
    this.gbuyUsersService.getUserData().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
