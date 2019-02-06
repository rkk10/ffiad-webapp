import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
