import { Component, OnInit } from '@angular/core';
import Ifeedback from './feedback.interface';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.css']
})
export class FeedbackCardComponent implements OnInit {

  // feedback_title: String = 'Good Exprience';
  // // tslint:disable-next-line:max-line-length
  // card_name: String = 'Jone Deo';
  // designation: String = 'Farmer';
  // feedback_msg: String = 'lorem impsom'

  feedback_cards: Ifeedback[] = [
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },
    {
      feedback_title: 'Good Expreience',
      // tslint:disable-next-line:max-line-length
      feedback_msg: 'Pri quas audiam virtute ut, case utamur fuisset eam ut, iisque accommodare an eam. Reque blandit qui eu, cu vix nonumy volumus. Legendos intellegam id usu, vide oporteat vix eu, id illud principes has. Nam tempor utamur gubergren no.',
      card_name: 'John Deo',
      designation: 'Farmer'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
