import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GbuyProductsService } from '../services/gbuy-products.service';
import {gbuyProducts} from '../helper/gbuy-products';
@Component({
  selector: 'app-gbuy-products',
  templateUrl: './gbuy-products.component.html',
  styleUrls: ['./gbuy-products.component.css']
})
export class GbuyProductsComponent implements OnInit {

  products:gbuyProducts[]= [];
  constructor(private productsService:GbuyProductsService,private router: Router) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  addToCart(product:gbuyProducts): void {
    this.productsService.summaryList.push(product)
  }
  view(product:gbuyProducts){
    alert(product.gbuy_product_details)
  }
  goToSummary(navigate:string){
    this.router.navigate([`${navigate}`]);
  }

}
