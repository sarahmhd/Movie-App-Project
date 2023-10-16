import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendatoinComponent } from './recommendatoin.component';

describe('RecommendatoinComponent', () => {
  let component: RecommendatoinComponent;
  let fixture: ComponentFixture<RecommendatoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendatoinComponent]
    });
    fixture = TestBed.createComponent(RecommendatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
