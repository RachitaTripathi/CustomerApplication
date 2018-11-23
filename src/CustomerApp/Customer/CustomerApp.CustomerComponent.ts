import { Component } from '@angular/core';
import { Customer } from './CustomerApp.CustomerModel';
import { ILogger } from '../Utility/CustomerApp.Logger';

@Component({
  
  templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
  title = 'CustomerApplication';
  CustomerModel: Customer = new Customer();
  CustomerModels: Array<Customer> = new Array<Customer>();
  Logobj : ILogger = null;

  constructor(){
    this.Logobj.Log();
  }

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(typeofvalidator:string , controlname:string): boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofvalidator);
  }
}
