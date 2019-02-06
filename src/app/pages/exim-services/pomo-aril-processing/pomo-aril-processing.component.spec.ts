import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomoArilProcessingComponent } from './pomo-aril-processing.component';

describe('PomoArilProcessingComponent', () => {
  let component: PomoArilProcessingComponent;
  let fixture: ComponentFixture<PomoArilProcessingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomoArilProcessingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomoArilProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
