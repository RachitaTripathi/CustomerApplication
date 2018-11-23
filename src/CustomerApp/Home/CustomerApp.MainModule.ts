import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';


//import { AppRoutingModule } from './app-routing.module';



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
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
