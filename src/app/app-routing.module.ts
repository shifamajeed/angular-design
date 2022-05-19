import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ViewMedicineComponent } from './view-medicine/view-medicine.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component:  HomeComponent },
  {path: 'addmed',component:   AddMedicineComponent},
  {path: 'viewmed',component:    ViewMedicineComponent},
  {path: 'update',component:   UpdateStockComponent},
  {path: 'pres',component:    PrescriptionComponent},
  {path:'log',component:LogoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
