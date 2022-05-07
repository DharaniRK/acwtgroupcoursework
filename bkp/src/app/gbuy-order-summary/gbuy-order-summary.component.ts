import { Component, OnInit } from '@angular/core';
import { GbuyProductsService } from '../services/gbuy-products.service';
import { gbuyProducts } from '../helper/gbuy-products';
import { Router } from '@angular/router';

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

  constructor(private productsService: GbuyProductsService, private router: Router) { }

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
  }
  deleteProduct(productId: any) {
    let productIndex = this.productsSummary.findIndex(item => item.gbuy_product_id === productId);
    this.productsSummary.splice(productIndex, 1);
    this.addproduct();
  }
  goToConfirmation(navigate: string) {
    this.router.navigate([`${navigate}`]);
  }
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
  }