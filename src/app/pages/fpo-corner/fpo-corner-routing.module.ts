import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FpoCornerComponent } from './fpo-corner/fpo-corner.component';

const routes: Routes = [
  {
    path: '',
    component: FpoCornerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FpoCornerRoutingModule { }
