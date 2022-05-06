import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GbuyLoginComponent } from './gbuy-login/gbuy-login.component';
import { GbuyHomeComponent } from './gbuy-home/gbuy-home.component';
import { GbuyProductsComponent } from './gbuy-products/gbuy-products.component';
import { GbuyOrderSummaryComponent } from './gbuy-order-summary/gbuy-order-summary.component';
const routes: Routes = [
  //{ path: 'home', component: GbuyHomeComponent },
  { path: 'login', component: GbuyLoginComponent },
  { path: 'products', component: GbuyProductsComponent },
  { path: 'summary', component: GbuyOrderSummaryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }