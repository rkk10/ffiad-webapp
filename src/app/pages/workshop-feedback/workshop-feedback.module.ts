import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopFeedbackRoutingModule } from './workshop-feedback-routing.module';
import { WorkshopFeedbackComponent } from './workshop-feedback/workshop-feedback.component';

@NgModule({
  declarations: [WorkshopFeedbackComponent],
  imports: [
    CommonModule,
    WorkshopFeedbackRoutingModule
  ]
})
export class WorkshopFeedbackModule { }
