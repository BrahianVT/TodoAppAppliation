import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAuthenticationService } from '../service/custom-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username
  password
  errorMessage = 'Invalid Credentials'
  invalidLogin  = false
  constructor(private router: Router, private authentication: CustomAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.authentication.consumeJWTAuthService(this.username, this.password).subscribe(
      data =>{
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    );
  }
}
