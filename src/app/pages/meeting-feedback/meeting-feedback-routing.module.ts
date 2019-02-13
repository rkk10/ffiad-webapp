import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingFeedbackComponent } from './meeting-feedback/meeting-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: MeetingFeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingFeedbackRoutingModule { }
