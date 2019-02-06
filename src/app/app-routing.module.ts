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
    loadChildren: './pages/exim-services/exim-services.module#EximServicesModule'
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
    loadChildren: './pages/exim-services/exim-services.module#EximServicesModule'
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
