import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyFpoComponent } from './apply-fpo.component';

describe('ApplyFpoComponent', () => {
  let component: ApplyFpoComponent;
  let fixture: ComponentFixture<ApplyFpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyFpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyFpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
