import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchEventResultComponent } from './search-event-result.component';

describe('SearchEventResultComponent', () => {
  let component: SearchEventResultComponent;
  let fixture: ComponentFixture<SearchEventResultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEventResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEventResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
