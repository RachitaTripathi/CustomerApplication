import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';


//import { AppRoutingModule } from './app-routing.module';


var providerscoll:any = [];
providerscoll.push({ provide: "1", useClass: DbLogger});
providerscoll.push({ provide: "2", useClass: ConsoleLogger});
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger});

@NgModule({
  declarations: [    
    HomeComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
    //AppRoutingModule
  ],
  providers: [providerscoll],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
