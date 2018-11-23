import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';



//import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomerRoutes)
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
