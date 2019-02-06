import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneDayEventRoutingModule } from './one-day-event-routing.module';
import { OneDayEventComponent } from './one-day-event/one-day-event.component';
import { UpcomingEventComponent } from 'src/app/shared-components/upcoming-event/upcoming-event.component';


@NgModule({
  declarations: [OneDayEventComponent, UpcomingEventComponent],
  imports: [
    CommonModule,
    OneDayEventRoutingModule,
  ]
})
export class OneDayEventModule { }
