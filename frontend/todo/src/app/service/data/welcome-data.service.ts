import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';


export class Hello{
  constructor(public message: string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) { }

  executeHelloWorld(){
    
    return  this.httpClient.get<Hello>('http://localhost:8080/hello');
  }

  executeHelloWorldParameter(name: string){
    console.log("aqui");
    console.log(`http://localhost:8080/hello-world/path-variable/${name}`);
    return this.httpClient.get<string>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
