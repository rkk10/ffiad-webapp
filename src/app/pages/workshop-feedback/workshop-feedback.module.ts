import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopFeedbackRoutingModule } from './workshop-feedback-routing.module';
import { WorkshopFeedbackComponent } from './workshop-feedback/workshop-feedback.component';
import { FeedbackCardComponent } from './feedback-card/feedback-card.component';

@NgModule({
  declarations: [WorkshopFeedbackComponent, FeedbackCardComponent],
  imports: [
    CommonModule,
    WorkshopFeedbackRoutingModule
  ]
})
export class WorkshopFeedbackModule { }
