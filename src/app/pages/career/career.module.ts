import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareerPageComponent } from './career-page/career-page.component';

@NgModule({
  declarations: [CareerPageComponent],
  imports: [
    CommonModule,
    CareerRoutingModule
  ]
})
export class CareerModule { }
