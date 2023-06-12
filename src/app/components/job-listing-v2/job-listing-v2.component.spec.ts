import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListingV2Component } from './job-listing-v2.component';

describe('JobListingV2Component', () => {
  let component: JobListingV2Component;
  let fixture: ComponentFixture<JobListingV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobListingV2Component]
    });
    fixture = TestBed.createComponent(JobListingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
