import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MemberhipPageComponent } from './memberhip-page/memberhip-page.component';

@NgModule({
  declarations: [MemberhipPageComponent],
  imports: [
    CommonModule,
    MembershipRoutingModule
  ]
})
export class MembershipModule { }
