import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialCardComponent } from './testomonial-card.component';

describe('TestomonialCardComponent', () => {
  let component: TestomonialCardComponent;
  let fixture: ComponentFixture<TestomonialCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestomonialCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomonialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
