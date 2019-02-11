import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackhouseOnRentComponent } from './packhouse-on-rent/packhouse-on-rent.component';

const routes: Routes = [
  {
    path: '',
    component: PackhouseOnRentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackhouseOnRentRoutingModule { }
