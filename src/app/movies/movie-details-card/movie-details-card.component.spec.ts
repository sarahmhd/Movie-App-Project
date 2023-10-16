import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsCardComponent } from './movie-details-card.component';

describe('MovieDetailsCardComponent', () => {
  let component: MovieDetailsCardComponent;
  let fixture: ComponentFixture<MovieDetailsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsCardComponent]
    });
    fixture = TestBed.createComponent(MovieDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
