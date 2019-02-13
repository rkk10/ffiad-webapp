import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingFeedbackComponent } from './meeting-feedback.component';

describe('MeetingFeedbackComponent', () => {
  let component: MeetingFeedbackComponent;
  let fixture: ComponentFixture<MeetingFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
