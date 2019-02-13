import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmServicesComponent } from './farm-services/farm-services.component';

const routes: Routes = [
  {
    path: '',
    component: FarmServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmServicesRoutingModule { }
