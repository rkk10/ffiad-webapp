import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportLicenseComponent } from './export-license.component';

describe('ExportLicenseComponent', () => {
  let component: ExportLicenseComponent;
  let fixture: ComponentFixture<ExportLicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportLicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
