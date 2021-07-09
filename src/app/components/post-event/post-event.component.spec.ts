import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostEventComponent } from './post-event.component';

describe('PostEventComponent', () => {
  let component: PostEventComponent;
  let fixture: ComponentFixture<PostEventComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
