import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsClearanceComponent } from './customs-clearance.component';

describe('CustomsClearanceComponent', () => {
  let component: CustomsClearanceComponent;
  let fixture: ComponentFixture<CustomsClearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomsClearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
