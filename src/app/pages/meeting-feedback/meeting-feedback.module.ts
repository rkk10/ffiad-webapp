import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingFeedbackRoutingModule } from './meeting-feedback-routing.module';
import { MeetingFeedbackComponent } from './meeting-feedback/meeting-feedback.component';
import { MeetingFeedbackCardComponent } from './meeting-feedback-card/meeting-feedback-card.component';

@NgModule({
  declarations: [MeetingFeedbackComponent, MeetingFeedbackCardComponent],
  imports: [
    CommonModule,
    MeetingFeedbackRoutingModule
  ]
})
export class MeetingFeedbackModule { }
