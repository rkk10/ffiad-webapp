import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() isOpen: Boolean = true;

  isEventOpen: Boolean = true;
  isWoshopOpen: Boolean = true;
  // isPuneSeminarOpen: Boolean = false;
  // isApplyOpen: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
