import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerlistComponent} from './customerlist/customerlist.component';
import {CreatecustomerComponent} from './createcustomer/createcustomer.component';
import {HomeComponent} from './home/home.component';
import {UpdatecustomerComponent} from './updatecustomer/updatecustomer.component';
import {DeletecustomerComponent} from './deletecustomer/deletecustomer.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerlistComponent
  },
  {
    path: 'create',
    component: CreatecustomerComponent
  },
  {
    path: 'customer/update/:id',
    component: UpdatecustomerComponent
  },
  {
    path: 'customer/delete/:id',
    component: DeletecustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
