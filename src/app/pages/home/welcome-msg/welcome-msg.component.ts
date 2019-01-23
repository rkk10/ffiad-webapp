import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  welcomeText = 'Forum For Integrated Agriculture Development offer a variety of programs and services to help grow exports of value-added food and agricultural products. Whether your company is just getting started or is already exporting to several countries, we have multiple programs and services to assist you.';
  constructor() { }

  ngOnInit() {
  }

}
