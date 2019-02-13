import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmServicesRoutingModule } from './farm-services-routing.module';
import { FarmServicesComponent } from './farm-services/farm-services.component';

@NgModule({
  declarations: [FarmServicesComponent],
  imports: [
    CommonModule,
    FarmServicesRoutingModule
  ]
})
export class FarmServicesModule { }
