import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EximServicesRoutingModule } from './exim-services-routing.module';
import { EximServicesComponent } from './exim-services/exim-services.component';
import { ExportLicenseComponent } from './export-license/export-license.component';
import { PackhouseOnRentComponent } from './packhouse-on-rent/packhouse-on-rent.component';
import { QualityCertificationComponent } from './quality-certification/quality-certification.component';
import { CustomsClearanceComponent } from './customs-clearance/customs-clearance.component';
import { PomoArilProcessingComponent } from './pomo-aril-processing/pomo-aril-processing.component';

@NgModule({
  declarations: [
      EximServicesComponent,
      ExportLicenseComponent,
      PackhouseOnRentComponent,
      QualityCertificationComponent,
      CustomsClearanceComponent,
  ],
  imports: [
    CommonModule,
    EximServicsModule
  ]
})

export class EximServicsModule { }
