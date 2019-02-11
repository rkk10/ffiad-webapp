import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityCertificationComponent } from './quality-certification.component';

describe('QualityCertificationComponent', () => {
  let component: QualityCertificationComponent;
  let fixture: ComponentFixture<QualityCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
