import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomsClearanceComponent } from './customs-clearance/customs-clearance.component';

const routes: Routes = [
  {
    path: '',
    component: CustomsClearanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomsClearanceRoutingModule { }
