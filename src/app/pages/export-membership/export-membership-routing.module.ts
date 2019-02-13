import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExportMembershipComponent } from './export-membership/export-membership.component';

const routes: Routes = [{
  path: '',
  component: ExportMembershipComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportMembershipRoutingModule { }
