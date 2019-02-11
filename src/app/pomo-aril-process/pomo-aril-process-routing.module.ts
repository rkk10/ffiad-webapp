import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PomoArilProcessComponent } from './pomo-aril-process/pomo-aril-process.component';

const routes: Routes = [
  {
    path: '',
    component: PomoArilProcessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PomoArilProcessRoutingModule { }
