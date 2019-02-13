import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportMembershipComponent } from './export-membership.component';

describe('ExportMembershipComponent', () => {
  let component: ExportMembershipComponent;
  let fixture: ComponentFixture<ExportMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
