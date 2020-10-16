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
  welcomeMessageFromService : string;
  constructor(private route: ActivatedRoute, private welcomeDataService : WelcomeDataService) {

   }

  ngOnInit(): void {
    this.message += this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloWorld());
    this.welcomeDataService.executeHelloWorld().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleErrorResponse(error) {
    console.log(error.error);
    this.welcomeMessageFromService = error.error.message;
  }

  handleSuccessfulResponse(response){
    console.log(response);
    this.welcomeMessageFromService = response.message;
  }
}
