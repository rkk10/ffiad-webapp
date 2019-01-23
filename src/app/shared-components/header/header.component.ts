import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen: Boolean = true;

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onMenuToggle: EventEmitter<Boolean> = new EventEmitter();
  constructor() {

   }

  ngOnInit() {
  }
  // tslint:disable-next-line:one-line
  toggleMenu(){
    this.isOpen = !this.isOpen;
    // console.log('opend');
    this.onMenuToggle.emit(this.isOpen);
  }

}
