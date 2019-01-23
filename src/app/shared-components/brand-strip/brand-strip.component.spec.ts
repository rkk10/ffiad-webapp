import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStripComponent } from './brand-strip.component';

describe('BrandStripComponent', () => {
  let component: BrandStripComponent;
  let fixture: ComponentFixture<BrandStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
