import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityCertificationRoutingModule } from './quality-certification-routing.module';
import { QualityCertificationComponent } from './quality-certification/quality-certification.component';

@NgModule({
  declarations: [QualityCertificationComponent],
  imports: [
    CommonModule,
    QualityCertificationRoutingModule
  ]
})
export class QualityCertificationModule { }
