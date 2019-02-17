import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() isOpen: Boolean = true;

  isEventOpen: Boolean = true;
  isWorkshopOpen: Boolean = true;
  isGlobalOpen: Boolean = true;
  isProductOpen: Boolean = true;
  isMeetOpen: Boolean = true;
  isServiceOpen: Boolean = true;
  isProduceOpen: Boolean = true;
  isTesoOpen: Boolean = true;
  isMemberOpen: Boolean = true;
  isCornerOpen: Boolean = true;

  isOpenProduceResidue: Boolean = true;
  isTestimonials: Boolean = true;
  isMembershipOpen: Boolean = true;
  isFpoOpen: Boolean = true;


  constructor( private router: Router ) {
    router.events.subscribe((val) => {
      if ( val instanceof NavigationEnd ) {
        this.toggleMenu();
      }
    });
  }


  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
