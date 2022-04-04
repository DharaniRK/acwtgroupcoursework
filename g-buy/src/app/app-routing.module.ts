import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GbuyLoginComponent } from './gbuy-login/gbuy-login.component';
import { GbuyHomeComponent } from './gbuy-home/gbuy-home.component';

const routes: Routes = [
  { path: 'home', component: GbuyLoginComponent },
  { path: 'login', component: GbuyHomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }