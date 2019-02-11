import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackhouseOnRentRoutingModule } from './packhouse-on-rent-routing.module';
import { PackhouseOnRentComponent } from './packhouse-on-rent/packhouse-on-rent.component';

@NgModule({
  declarations: [PackhouseOnRentComponent],
  imports: [
    CommonModule,
    PackhouseOnRentRoutingModule
  ]
})
export class PackhouseOnRentModule { }
