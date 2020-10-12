import { Component, OnInit } from '@angular/core';
import { CustomAuthenticationService } from '../service/custom-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public customAuth : CustomAuthenticationService) {}

  ngOnInit(): void {
    this.customAuth.logout();
  }

}
