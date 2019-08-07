import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { DeletecustomerComponent } from './deletecustomer/deletecustomer.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    HomeComponent,
    CreatecustomerComponent,
    UpdatecustomerComponent,
    DeletecustomerComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
