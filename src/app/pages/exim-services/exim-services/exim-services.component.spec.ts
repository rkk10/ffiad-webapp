import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EximServicesComponent } from './exim-services.component';

describe('EximServicesComponent', () => {
  let component: EximServicesComponent;
  let fixture: ComponentFixture<EximServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EximServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EximServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
