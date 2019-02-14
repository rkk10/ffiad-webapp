import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingFeedbackCardComponent } from './meeting-feedback-card.component';

describe('MeetingFeedbackCardComponent', () => {
  let component: MeetingFeedbackCardComponent;
  let fixture: ComponentFixture<MeetingFeedbackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingFeedbackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingFeedbackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
