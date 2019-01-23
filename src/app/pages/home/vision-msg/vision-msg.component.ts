import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-msg',
  templateUrl: './vision-msg.component.html',
  styleUrls: ['./vision-msg.component.css']
})
export class VisionMsgComponent implements OnInit {


  title = 'Our Vision';

  // tslint:disable-next-line:max-line-length
  visionText = 'Forum For Integrated Agriculture Development offer a variety of programs and services to help grow exports of value-added food and agricultural products. Whether your company is just getting started or is already exporting to several countries, we have multiple programs and services to assist you.';

  constructor() { }

  ngOnInit() {
  }

}
