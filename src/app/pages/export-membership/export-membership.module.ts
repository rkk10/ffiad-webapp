import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportMembershipRoutingModule } from './export-membership-routing.module';
import { ExportMembershipComponent } from './export-membership/export-membership.component';

@NgModule({
  declarations: [ExportMembershipComponent],
  imports: [
    CommonModule,
    ExportMembershipRoutingModule
  ]
})
export class ExportMembershipModule { }
