import { Component, OnInit } from '@angular/core';
import { IEvent } from './event.interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  upcomingEvent: IEvent[] = [
    {
      title : 'How to start Business',
      date : '20 jan 2019',
      location: 'pune',
      time : '10 am to 5 pm',
      price : '7500',
      imgUrl : 'pune_event.jpg',
      isEventActive: true
    },
    {
      title : 'How to start Business',
      date : '20 jan 2019',
      location: 'pune',
      time : '10 am to 5 pm',
      price : '7500',
      imgUrl : 'pune_event',
      isEventActive: true
    },
    {
      title : 'How to start Business',
      date : '20 jan 2019',
      location: 'pune',
      time : '10 am to 5 pm',
      price : '7500',
      imgUrl : 'pune_event.jpg',
      isEventActive: false
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
