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
  }
  // { path: 'home',
  //   loadChildren: './pages/home/home.module#HomeModule'
  // }

  // {path: '**', redirectTo: 'homepage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
