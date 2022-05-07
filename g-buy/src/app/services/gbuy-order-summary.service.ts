import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const ORDER_API = 'http://localhost:8001';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class GbuyOrderSummaryService {

  constructor(private http: HttpClient) { }
  orderIdDetails:any;
  order(productsSummary: any): Observable<any> {
    console.log("productsSummary : "+productsSummary)
    return this.http.post(ORDER_API + '/orderSummary', {
      productsSummary
    }, httpOptions);
  }
  
}
