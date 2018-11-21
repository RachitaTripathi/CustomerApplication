import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent';
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';
import {MainRoutes} from './Routing/CustomerApp.MainRouting';


@NgModule({
  declarations: [
    CustomerComponent,
    MasterPageComponent,
    SupplierComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
