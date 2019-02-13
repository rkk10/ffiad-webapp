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
import { EximServicsModule } from './pages/exim-services/exim-services.module';
import { ExportLicenseModule } from './pages/export-license/export-license.module';
import { PackhouseOnRentModule } from './pages/packhous-on-rent/packhouse-on-rent.module';
import { QualityCertificationModule } from './pages/quality-certification/quality-certification.module';
import { CustomsClearanceModule } from './pages/customs-clearance/customs-clearance.module';
import { PomoArilProcessModule } from './pomo-aril-process/pomo-aril-process.module';
// import { TestomonialsHolderComponent } from './pages/testomonials-holder/testomonials-holder.component';
// import { TestomonialCardComponent } from './pages/testomonial-card/testomonial-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    BrandStripComponent,
    SubscribeComponent,
    // TestomonialsHolderComponent,
    // TestomonialCardComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    EximServicsModule,
    ExportLicenseModule,
    PackhouseOnRentModule,
    QualityCertificationModule,
    CustomsClearanceModule,
    PomoArilProcessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
