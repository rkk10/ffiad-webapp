import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomsClearanceRoutingModule } from './customs-clearance-routing.module';
import { CustomsClearanceComponent } from './customs-clearance/customs-clearance.component';

@NgModule({
  declarations: [CustomsClearanceComponent],
  imports: [
    CommonModule,
    CustomsClearanceRoutingModule
  ]
})
export class CustomsClearanceModule { }
