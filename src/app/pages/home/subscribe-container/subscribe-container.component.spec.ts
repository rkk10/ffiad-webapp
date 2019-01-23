import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeContainerComponent } from './subscribe-container.component';

describe('SubscribeContainerComponent', () => {
  let component: SubscribeContainerComponent;
  let fixture: ComponentFixture<SubscribeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
