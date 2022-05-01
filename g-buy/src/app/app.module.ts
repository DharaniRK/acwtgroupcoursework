import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GbuyLoginComponent } from './gbuy-login/gbuy-login.component';
import { GbuyHomeComponent } from './gbuy-home/gbuy-home.component';
import { FormsModule } from '@angular/forms';
import { GbuyProductsComponent } from './gbuy-products/gbuy-products.component';


@NgModule({
  declarations: [
    GbuyLoginComponent,
    GbuyHomeComponent,
    AppComponent,
    GbuyProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
