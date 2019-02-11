import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomoArilProcessComponent } from './pomo-aril-process.component';

describe('PomoArilProcessComponent', () => {
  let component: PomoArilProcessComponent;
  let fixture: ComponentFixture<PomoArilProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomoArilProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomoArilProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
