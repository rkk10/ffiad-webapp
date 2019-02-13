import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentMembershipComponent } from './student-membership/student-membership.component';

const routes: Routes = [
 {
   path: '',
   component: StudentMembershipComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentMembershipRoutingModule { }
