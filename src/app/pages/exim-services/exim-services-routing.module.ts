import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EximServicesComponent } from './exim-services/exim-services.component';
import { ExportLicenseComponent } from './export-license/export-license.component';

const routes: Routes = [
  {
    path: '',
    component: EximServicesComponent
  },
  {
    path: 'export-license',
    component: ExportLicenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EximServicesRoutingModule { }
