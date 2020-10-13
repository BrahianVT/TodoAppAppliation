import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome '; 
  constructor(private route: ActivatedRoute, private welcomeDataService : WelcomeDataService) {

   }

  ngOnInit(): void {
    this.message += this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloWorld();
  }

}
