import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomAuthenticationService } from '../custom-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptAuthService implements HttpInterceptor{

  constructor(private authService: CustomAuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authHeaderString = this.authService.getAuthenticatedToken();
    let username = this.authService.getAuthenticatedUser();

    if(authHeaderString && username){
        req = req.clone({
          setHeaders: {
            Authorization : authHeaderString
          }
        });
    }


    return next.handle(req);

  }
}
