import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gbuy-products',
  templateUrl: './gbuy-products.component.html',
  styleUrls: ['./gbuy-products.component.css']
})
export class GbuyProductsComponent implements OnInit {
  firstName = null
  lastName = null
  qty = 800
  price = 800
  amount = this.qty * this.price


  constructor() { }

  ngOnInit(): void {
   
  }

}



