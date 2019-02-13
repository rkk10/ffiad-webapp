import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmConsultancyComponent } from './farm-consultancy.component';

describe('FarmConsultancyComponent', () => {
  let component: FarmConsultancyComponent;
  let fixture: ComponentFixture<FarmConsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
