import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualityCertificationComponent } from './quality-certification/quality-certification.component';
const routes: Routes = [
  {
    path: '',
    component: QualityCertificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityCertificationRoutingModule { }
