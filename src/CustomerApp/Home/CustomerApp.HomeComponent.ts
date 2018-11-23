import { Component } from '@angular/core';
import { ILogger } from '../Utility/CustomerApp.Logger';


@Component({
  
  templateUrl: './CustomerApp.HomeView.html'
})
export class HomeComponent {
  Logobj : ILogger = null;

  constructor(){
    this.Logobj.Log();
  }
  
}
