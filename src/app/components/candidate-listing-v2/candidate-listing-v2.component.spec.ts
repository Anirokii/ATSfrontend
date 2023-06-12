import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateListingV2Component } from './candidate-listing-v2.component';

describe('CandidateListingV2Component', () => {
  let component: CandidateListingV2Component;
  let fixture: ComponentFixture<CandidateListingV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateListingV2Component]
    });
    fixture = TestBed.createComponent(CandidateListingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
