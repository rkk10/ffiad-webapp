import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { AsideComponent } from './shared-components/aside/aside.component';
import { HomeModule} from './pages/home/home.module';
import { BrandStripComponent } from './shared-components/brand-strip/brand-strip.component';
import { SubscribeComponent } from './shared-components/subscribe/subscribe.component';
import { UpcomingEventsModule } from './shared-components/upcoming-events/upcoming-events.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    BrandStripComponent,
    SubscribeComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UpcomingEventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
