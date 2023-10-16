import { TestBed } from '@angular/core/testing';

import { AddToFavService } from './add-to-fav.service';

describe('AddToFavService', () => {
  let service: AddToFavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToFavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
