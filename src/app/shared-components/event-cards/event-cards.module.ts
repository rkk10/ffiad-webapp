import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventCardsRoutingModule } from './event-cards-routing.module';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [EventCardComponent],
  imports: [
    CommonModule,
    EventCardsRoutingModule
  ]
})
export class EventCardsModule { }
