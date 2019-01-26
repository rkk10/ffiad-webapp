import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberhipPageComponent } from './memberhip-page.component';

describe('MemberhipPageComponent', () => {
  let component: MemberhipPageComponent;
  let fixture: ComponentFixture<MemberhipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberhipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberhipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
