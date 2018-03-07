import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ContentPageComponent} from './content-page/content-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ 
     BrowserModule,
     HttpClientModule,
      FormsModule,
      ReactiveFormsModule ],
  declarations: [ AppComponent,
  ContentPageComponent,
  HomePageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
