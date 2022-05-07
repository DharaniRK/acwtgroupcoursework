import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GbuyLoginComponent } from './gbuy-login/gbuy-login.component';
import { GbuyProductsComponent } from './gbuy-products/gbuy-products.component';
import { GbuyOrderSummaryComponent } from './gbuy-order-summary/gbuy-order-summary.component';
import { GbuyOrderConfirmationComponent } from './gbuy-order-confirmation/gbuy-order-confirmation.component';

const routes: Routes = [
  { path: 'login', component: GbuyLoginComponent },
  { path: 'products', component: GbuyProductsComponent },
  { path: 'summary', component: GbuyOrderSummaryComponent },
  { path: 'confirmation', component: GbuyOrderConfirmationComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
