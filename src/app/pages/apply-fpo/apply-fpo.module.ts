import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyFpoRoutingModule } from './apply-fpo-routing.module';
import { ApplyFpoComponent } from './apply-fpo/apply-fpo.component';

@NgModule({
  declarations: [ApplyFpoComponent],
  imports: [
    CommonModule,
    ApplyFpoRoutingModule
  ]
})
export class ApplyFpoModule { }
