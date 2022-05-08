import { Component, OnInit } from '@angular/core';
import { GbuyProductsService } from '../services/gbuy-products.service';
import { GbuyOrderSummaryService } from '../services/gbuy-order-summary.service';
import {gbuyProducts} from '../helper/gbuy-products';
import { GbuyTokenLoadService } from '../services/gbuy-token-load.service';
@Component({
  selector: 'app-gbuy-order-summary',
  templateUrl: './gbuy-order-summary.component.html',
  styleUrls: ['./gbuy-order-summary.component.css']
})
export class GbuyOrderSummaryComponent implements OnInit {

  totalPrice!: number;
  totalQuantity!: number;
  productsSummary: gbuyProducts[] = [];
  price!: number;
  orderId: any
  firstName:any
  loginFlg:any;
  constructor(private productsService:GbuyProductsService,private orderSummaryService: GbuyOrderSummaryService,
    private gbuyTokenLoadService: GbuyTokenLoadService) { }

  ngOnInit(): void {
    this.productsService.summaryList.forEach(product => {
      let index = -1;
      index = this.productsSummary.findIndex(
        p => p.gbuy_product_id === product.gbuy_product_id
      );
      if (index != -1) {
        this.productsSummary[index].gbuy_product_quanity += 1;
      } else if (index === -1) {
        this.productsSummary.push(product);
      }
      this.addproduct();
    });
    this.firstName=this.gbuyTokenLoadService.firstName
    this.loginFlg=Boolean(this.gbuyTokenLoadService.loginFlag);
  }
  deleteProduct(productId: any) {
    let productIndex = this.productsSummary.findIndex(item => item.gbuy_product_id === productId);
    this.productsSummary.splice(productIndex, 1);
    this.addproduct();
  }
  //goToConfirmation(navigate: string) {
  //  this.router.navigate([`${navigate}`]);
  //}
  addproduct(): void {
    this.totalQuantity = 0;
    this.price = 0;
    this.totalPrice = 0;
    if (this.productsSummary) {
      this.productsSummary.map(product => {
        this.totalQuantity += product.gbuy_product_quanity;
        this.price += product.gbuy_product_price;
        this.totalPrice += product.gbuy_product_price * product.gbuy_product_quanity;
      });
    }
  }
  orderProducts() {
    let productsList: gbuyProducts[] = [];
    productsList = this.productsSummary;
    productsList.forEach((productDetails)=>{
      productDetails. gbuy_product_details=this.gbuyTokenLoadService.userId
    });
    this.orderSummaryService.order(productsList).subscribe(
      data => {
        this.orderId=data
        alert("Your Order is placed and your orderId is : "+this.orderId)
      },
      err => {
        this.orderId="Invalid Order"
      }
    );
  }




  }