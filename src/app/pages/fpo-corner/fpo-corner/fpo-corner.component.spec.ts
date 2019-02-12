import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpoCornerComponent } from './fpo-corner.component';

describe('FpoCornerComponent', () => {
  let component: FpoCornerComponent;
  let fixture: ComponentFixture<FpoCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpoCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpoCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
