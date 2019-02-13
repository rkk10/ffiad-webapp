import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopFeedbackComponent } from './workshop-feedback.component';

describe('WorkshopFeedbackComponent', () => {
  let component: WorkshopFeedbackComponent;
  let fixture: ComponentFixture<WorkshopFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
