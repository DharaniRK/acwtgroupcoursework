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
import { GbuyTokenLoadService } from './services/gbuy-token-load.service';
import { GbuyLogoutComponent } from './gbuy-logout/gbuy-logout.component';
@NgModule({
  declarations: [
    GbuyLoginComponent,
    AppComponent,
    GbuyProductsComponent,
    GbuyOrderSummaryComponent,
    GbuyLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GbuyProductsService,GbuyTokenLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
