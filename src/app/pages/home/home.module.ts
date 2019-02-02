import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { VisionMsgComponent } from './vision-msg/vision-msg.component';
import { SubscribeContainerComponent } from './subscribe-container/subscribe-container.component';
import { MissionTabComponent } from './mission-tab/mission-tab.component';
import { UpcomingEventComponent } from '../../shared-components/upcoming-events/upcoming-event/upcoming-event.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SliderComponent,
    WelcomeMsgComponent,
    VisionMsgComponent,
    SubscribeContainerComponent,
    MissionTabComponent
  ],

  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
