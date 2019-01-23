import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionMsgComponent } from './vision-msg.component';

describe('VisionMsgComponent', () => {
  let component: VisionMsgComponent;
  let fixture: ComponentFixture<VisionMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisionMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
