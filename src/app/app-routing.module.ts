import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { ContactPageComponent } from './pages/contact/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent
    // loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'homepage',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadChildren: './pages/contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path: 'exim-services',
    pathMatch: 'full',
    loadChildren: './pages/exim-services/exim-services.module#EximServicsModule'
  },
  {
    path: 'career',
    pathMatch: 'full',
    loadChildren: './pages/career/career.module#CareerModule'

  },
  {
    path: 'membership',
    pathMatch: 'full',
    loadChildren: './pages/membership/membership.module#MembershipModule'
  },
  {
    path: 'events',
    pathMatch: 'full',
    loadChildren: './pages/events/events.module#EventsModule'
  },
  {
    path: 'export-license',
    pathMatch: 'full',
    loadChildren: './pages/export-license/export-license.module#ExportLicenseModule'
  },
  {
    path: 'packhouse-on-rent',
    pathMatch: 'full',
    loadChildren: './pages/packhous-on-rent/packhouse-on-rent.module#PackhouseOnRentModule'
  },
  {
    path: 'quality-certification',
    pathMatch: 'full',
    loadChildren: './pages/quality-certification/quality-certification.module#QualityCertificationModule'
  },
  {
    path: 'customs-clearance',
    pathMatch: 'full',
    loadChildren: './pages/customs-clearance/customs-clearance.module#CustomsClearanceModule'
  },
  {
    path: 'pomo-aril-process',
    pathMatch: 'full',
    loadChildren: './pomo-aril-process/pomo-aril-process.module#PomoArilProcessModule'
  },
  {
    path: 'apply-fpo',
    pathMatch: 'full',
    loadChildren: './pages/apply-fpo/apply-fpo.module#ApplyFpoModule'
  },
  {
    path: 'fpo-corner',
    pathMatch: 'full',
    loadChildren: './pages/fpo-corner/fpo-corner.module#FpoCornerModule'
  },
  {
    path: 'export-membership',
    pathMatch: 'full',
    loadChildren: './pages/export-membership/export-membership.module#ExportMembershipModule'
  },
  {
    path: 'beginner-export',
    pathMatch: 'full',
    loadChildren: './pages/beginner-export/begineer-export.module#BegineerExportModule'
  },
  {
    path: 'student-membership',
    pathMatch: 'full',
    loadChildren: './pages/student-membership/student-membership.module#StudentMembershipModule'
  },
  {
    path: 'workshop-feedback',
    pathMatch: 'full',
    loadChildren: './pages/workshop-feedback/workshop-feedback.module#WorkshopFeedbackModule'
  },
  {
    path: 'meeting-feedback',
    pathMatch: 'full',
    loadChildren: './pages/meeting-feedback/meeting-feedback.module#MeetingFeedbackModule'
  },
  {
    path: 'farm-services',
    pathMatch: 'full',
    loadChildren: './pages/farm-services/farm-services.module#FarmServicesModule'
  },
  {
    path: 'farm-consultancy',
    pathMatch: 'full',
    loadChildren: './pages/farm-consultancy/farm-consultancy.module#FarmConsultancyModule'
  }
  // { path: 'home',
  //   loadChildren: './pages/home/home.module#HomeModule'
  // }

  // {path: '**', redirectTo: 'homepage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
