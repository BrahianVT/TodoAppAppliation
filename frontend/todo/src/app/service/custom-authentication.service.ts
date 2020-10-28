import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
@Injectable({
  providedIn: 'root'
})
export class CustomAuthenticationService {

  constructor(private http: HttpClient) { }

  consumeAuthService(username, password){
    let authenticationHeader = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: authenticationHeader
    });
    return this.http.get<AuthenticationBean>(`${API_URL}/basicAuth`, { headers}).pipe(
      map(
        data => { 
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', authenticationHeader); 
          return data; 
        }
      )
    );
  }

  consumeJWTAuthService(username, password){
    
    return this.http.post<any>(`${API_URL}/authenticate`, { username, password}).pipe(
      map(
        data => { 
          sessionStorage.setItem('authenticateUser', username);
          sessionStorage.setItem('token', `Bearer ${data.token}`); 
          return data; 
        }
      )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }

  isUserLoggegIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return user !== null;
  }

  logout(){
    sessionStorage.removeItem('authenticateUser');
    sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean {
  constructor(public message: string){}
}