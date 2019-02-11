import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportLicenseComponent } from './export-license/export-license.component';

const routes: Routes = [
  {
    path: '',
    component: ExportLicenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportLicenseRoutingModule { }
