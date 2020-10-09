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

  username = 'Brahian'
  password = 'xd'
  errorMessage = 'Invalid Credentials'
  invalidLogin  = false
  constructor(private router: Router, private authentication: CustomAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.authentication.authenticate(this.username, this.password)){
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }
}
