import { Component, OnInit } from '@angular/core';
import { CustomAuthenticationService } from '../service/custom-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public customAut : CustomAuthenticationService) { 

  }

  ngOnInit(): void {
  }

}
