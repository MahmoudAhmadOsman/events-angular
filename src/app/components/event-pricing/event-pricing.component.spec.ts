import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPricingComponent } from './event-pricing.component';

describe('EventPricingComponent', () => {
  let component: EventPricingComponent;
  let fixture: ComponentFixture<EventPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
