import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EximServicesRoutingModule } from './exim-services-routing.module';
import { EximServicesComponent } from './exim-services/exim-services.component';

@NgModule({
  declarations: [
      EximServicesComponent,
  ],
  imports: [
    CommonModule,
    EximServicesRoutingModule
  ]
})

export class EximServicsModule { }
