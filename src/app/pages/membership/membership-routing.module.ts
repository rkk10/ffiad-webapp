import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberhipPageComponent } from './memberhip-page/memberhip-page.component';

const routes: Routes = [
  {
    path: '',
    component: MemberhipPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
