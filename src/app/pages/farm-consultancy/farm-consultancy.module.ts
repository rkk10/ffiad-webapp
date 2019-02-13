import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmConsultancyRoutingModule } from './farm-consultancy-routing.module';
import { FarmConsultancyComponent } from './farm-consultancy/farm-consultancy.component';

@NgModule({
  declarations: [FarmConsultancyComponent],
  imports: [
    CommonModule,
    FarmConsultancyRoutingModule
  ]
})
export class FarmConsultancyModule { }
