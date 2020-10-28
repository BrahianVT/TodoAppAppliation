import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';


export class Hello{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorld(){
    return  this.httpClient.get<Hello>(`${API_URL}/hello`);
  }


  executeHelloWorldParameter(name: string){
    return this.httpClient.get<string>(`${API_URL}/hello-world/path-variable/${name}`);
  }
}
