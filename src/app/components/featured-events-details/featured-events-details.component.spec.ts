import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeaturedEventsDetailsComponent } from './featured-events-details.component';

describe('FeaturedEventsDetailsComponent', () => {
  let component: FeaturedEventsDetailsComponent;
  let fixture: ComponentFixture<FeaturedEventsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedEventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
