import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-tab',
  templateUrl: './mission-tab.component.html',
  styleUrls: ['./mission-tab.component.css']
})
export class MissionTabComponent implements OnInit {

  title = 'Our Mission';

  // tslint:disable-next-line:max-line-length
  missionText = 'Forum For Integrated Agriculture Development offer a variety of programs and services to help grow exports of value-added food and agricultural products. Whether your company is just getting started or is already exporting to several countries, we have multiple programs and services to assist you.';


  constructor() { }

  ngOnInit() {
  }

}
