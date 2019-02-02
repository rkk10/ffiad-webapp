import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { VisionMsgComponent } from './vision-msg/vision-msg.component';
import { SubscribeContainerComponent } from './subscribe-container/subscribe-container.component';
import { MissionTabComponent } from './mission-tab/mission-tab.component';
import { UpcomingEventComponent } from 'src/app/shared-components/upcoming-event/upcoming-event.component';
import { EventCardComponent } from 'src/app/shared-components/event-cards/event-card/event-card.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SliderComponent,
    WelcomeMsgComponent,
    VisionMsgComponent,
    SubscribeContainerComponent,
    MissionTabComponent,
    UpcomingEventComponent,
    EventCardComponent,
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
