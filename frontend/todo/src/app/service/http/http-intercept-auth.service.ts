import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptAuthService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user='user'
    let pass='password'
    let authHeaderString = 'Basic ' + window.btoa(user +':'+ pass);
    req = req.clone({
      setHeaders: {
        Authorization : authHeaderString
      }
    });

    return next.handle(req);

  }
}
