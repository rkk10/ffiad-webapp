import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeginnerExportComponent } from './beginner-export/beginner-export.component';

const routes: Routes = [
  {
    path: '',
    component: BeginnerExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BegineerExportRoutingModule { }
