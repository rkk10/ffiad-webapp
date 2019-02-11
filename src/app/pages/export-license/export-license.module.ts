import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportLicenseRoutingModule } from './export-license-routing.module';
import { ExportLicenseComponent } from './export-license/export-license.component';

@NgModule({
  declarations: [ExportLicenseComponent],
  imports: [
    CommonModule,
    ExportLicenseRoutingModule
  ]
})
export class ExportLicenseModule { }
