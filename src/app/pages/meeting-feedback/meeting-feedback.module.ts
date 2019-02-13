import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingFeedbackRoutingModule } from './meeting-feedback-routing.module';
import { MeetingFeedbackComponent } from './meeting-feedback/meeting-feedback.component';

@NgModule({
  declarations: [MeetingFeedbackComponent],
  imports: [
    CommonModule,
    MeetingFeedbackRoutingModule
  ]
})
export class MeetingFeedbackModule { }
