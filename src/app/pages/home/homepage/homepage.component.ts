import { Component, OnInit } from '@angular/core';
import { HeaderComponent} from '../../../shared-components/header/header.component';
import { UpcomingEventComponent } from '../../../shared-components/upcoming-events/upcoming-event/upcoming-event.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
