import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEventsComponent } from './post-events.component';

describe('PostEventsComponent', () => {
  let component: PostEventsComponent;
  let fixture: ComponentFixture<PostEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
