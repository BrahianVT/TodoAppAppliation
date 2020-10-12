import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthenticationService {

  constructor() { }

  authenticate(username :string, password :string){
    console.log('before' + this.isUserLoggegIn());
    if(username === 'Brahian' && password === 'xd'){
      sessionStorage.setItem('authenticateUser', username);
      console.log('After ' + this.isUserLoggegIn());
      return true;
    } else return false;
  }

  isUserLoggegIn(){
    let user = sessionStorage.getItem('authenticateUser');
    return user !== null;
  }
}
