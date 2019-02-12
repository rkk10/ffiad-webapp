import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMembershipRoutingModule } from './student-membership-routing.module';
import { StudentMembershipComponent } from './student-membership/student-membership.component';

@NgModule({
  declarations: [StudentMembershipComponent],
  imports: [
    CommonModule,
    StudentMembershipRoutingModule
  ]
})
export class StudentMembershipModule { }
