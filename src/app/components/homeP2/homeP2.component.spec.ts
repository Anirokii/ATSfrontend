import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeP2Component } from './homeP2.component';

describe('TestComponent', () => {
  let component: HomeP2Component;
  let fixture: ComponentFixture<HomeP2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeP2Component]
    });
    fixture = TestBed.createComponent(HomeP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
