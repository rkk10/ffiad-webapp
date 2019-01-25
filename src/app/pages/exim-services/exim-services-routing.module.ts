import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EximServicesComponent } from './exim-services/exim-services.component';

const routes: Routes = [
  {
    path: '',
    component: EximServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EximServicesRoutingModule { }
