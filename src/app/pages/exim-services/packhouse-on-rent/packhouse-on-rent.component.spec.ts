import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackhouseOnRentComponent } from './packhouse-on-rent.component';

describe('PackhouseOnRentComponent', () => {
  let component: PackhouseOnRentComponent;
  let fixture: ComponentFixture<PackhouseOnRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackhouseOnRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackhouseOnRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
