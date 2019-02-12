import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FpoCornerRoutingModule } from './fpo-corner-routing.module';
import { FpoCornerComponent } from './fpo-corner/fpo-corner.component';

@NgModule({
  declarations: [FpoCornerComponent],
  imports: [
    CommonModule,
    FpoCornerRoutingModule
  ]
})
export class FpoCornerModule { }
