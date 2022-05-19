import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { LogoutComponent } from './logout/logout.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AddMedicineComponent,
    ViewMedicineComponent,
    UpdateStockComponent,
    PrescriptionComponent,
    LogoutComponent,
    
    
  ],






  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
