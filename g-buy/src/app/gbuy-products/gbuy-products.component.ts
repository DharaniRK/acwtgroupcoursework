import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GbuyProductsService } from '../services/gbuy-products.service';
import {gbuyProducts} from '../helper/gbuy-products';
import { GbuyTokenLoadService } from '../services/gbuy-token-load.service';
@Component({
  selector: 'app-gbuy-products',
  templateUrl: './gbuy-products.component.html',
  styleUrls: ['./gbuy-products.component.css']
})
export class GbuyProductsComponent implements OnInit {

  products:gbuyProducts[]= [];
  constructor(private productsService:GbuyProductsService,private router: Router,private gbuyTokenLoadService: GbuyTokenLoadService) { }
  firstName:any
  loginFlg:any;
  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.firstName=this.gbuyTokenLoadService.firstName
    this.loginFlg=Boolean(this.gbuyTokenLoadService.loginFlag);
  }
  addToCart(product:gbuyProducts): void {
    this.productsService.summaryList.push(product)
    console.log(product.gbuy_product_name)
    alert(product.gbuy_product_name+" Added in the Cart")

  }
  view(product:gbuyProducts){
    alert(product.gbuy_product_details)
  }
  goToSummary(navigate:string){
    this.router.navigate([`${navigate}`]);
  }

}
