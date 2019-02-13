import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmConsultancyComponent } from './farm-consultancy/farm-consultancy.component';

const routes: Routes = [
  {
    path: '',
    component: FarmConsultancyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmConsultancyRoutingModule { }
