import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTabComponent } from './mission-tab.component';

describe('MissionTabComponent', () => {
  let component: MissionTabComponent;
  let fixture: ComponentFixture<MissionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
