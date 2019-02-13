import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerExportComponent } from './beginner-export.component';

describe('BeginnerExportComponent', () => {
  let component: BeginnerExportComponent;
  let fixture: ComponentFixture<BeginnerExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginnerExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginnerExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
