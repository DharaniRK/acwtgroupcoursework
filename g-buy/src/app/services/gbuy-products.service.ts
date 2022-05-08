import { Injectable,EventEmitter,Output } from '@angular/core';
import {gbuyProducts} from '../helper/gbuy-products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const GET_PRODUCTS_API = 'http://127.0.0.1:8002/getProducts';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GbuyProductsService {

  constructor(private http: HttpClient) { }
  summaryList:gbuyProducts[]= [];
  productList:gbuyProducts[]=[];
  getProducts() {
    return this.http.get<any>(GET_PRODUCTS_API);
  }


}
