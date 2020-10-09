import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthenticationService {

  constructor() { }

  authenticate(username :String, password :String){
    if(username === 'Brahian' && password === 'xd'){
      return true;
    } else return false;
  }
}
