import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDayEventComponent } from './one-day-event.component';

describe('OneDayEventComponent', () => {
  let component: OneDayEventComponent;
  let fixture: ComponentFixture<OneDayEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDayEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDayEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
