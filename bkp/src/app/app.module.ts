import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GbuyLoginComponent } from './gbuy-login/gbuy-login.component';
import { FormsModule } from '@angular/forms';
import { GbuyProductsComponent } from './gbuy-products/gbuy-products.component';
import { GbuyOrderSummaryComponent } from './gbuy-order-summary/gbuy-order-summary.component';
import { GbuyProductsService } from './services/gbuy-products.service';
import { GbuyOrderConfirmationComponent } from './gbuy-order-confirmation/gbuy-order-confirmation.component';

@NgModule({
  declarations: [
    GbuyLoginComponent,
    AppComponent,
    GbuyProductsComponent,
    GbuyOrderSummaryComponent,
    GbuyOrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GbuyProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }