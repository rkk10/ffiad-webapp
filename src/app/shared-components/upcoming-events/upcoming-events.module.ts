import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingEventsRoutingModule } from './upcoming-events-routing.module';
import { UpcomingEventComponent } from './upcoming-event/upcoming-event.component';
import { EventCardComponent } from '../event-cards/event-card/event-card.component';

@NgModule({
  declarations: [UpcomingEventComponent, EventCardComponent],
  imports: [
    CommonModule,
    UpcomingEventsRoutingModule
  ],
  exports: [UpcomingEventComponent, EventCardComponent]
})
export class UpcomingEventsModule { }
