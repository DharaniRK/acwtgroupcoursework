import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { GbuyTokenLoadService } from '../services/gbuy-token-load.service';
import { Observable } from 'rxjs';
const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class GbuyAuthInterceptor implements HttpInterceptor {
  constructor(private gbuyToken: GbuyTokenLoadService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.gbuyToken.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
}
export const gbuyAuthInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: GbuyAuthInterceptor, multi: true }
];