import { TestBed } from '@angular/core/testing';

import { MediaDetails } from './media-details';

describe('MediaDetails', () => {
  let service: MediaDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
