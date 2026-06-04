import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorySection } from './story-section';

describe('StorySection', () => {
  let component: StorySection;
  let fixture: ComponentFixture<StorySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorySection],
    }).compileComponents();

    fixture = TestBed.createComponent(StorySection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
