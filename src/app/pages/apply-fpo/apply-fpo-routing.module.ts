import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyFpoComponent } from './apply-fpo/apply-fpo.component';

const routes: Routes = [
  {
    path: '',
    component: ApplyFpoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyFpoRoutingModule { }
