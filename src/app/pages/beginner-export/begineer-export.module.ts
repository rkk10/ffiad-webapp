import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BegineerExportRoutingModule } from './begineer-export-routing.module';
import { BeginnerExportComponent } from './beginner-export/beginner-export.component';

@NgModule({
  declarations: [BeginnerExportComponent],
  imports: [
    CommonModule,
    BegineerExportRoutingModule
  ]
})
export class BegineerExportModule { }
