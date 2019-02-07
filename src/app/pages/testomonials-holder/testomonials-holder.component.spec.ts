import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestomonialsHolderComponent } from './testomonials-holder.component';

describe('TestomonialsHolderComponent', () => {
  let component: TestomonialsHolderComponent;
  let fixture: ComponentFixture<TestomonialsHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestomonialsHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestomonialsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
