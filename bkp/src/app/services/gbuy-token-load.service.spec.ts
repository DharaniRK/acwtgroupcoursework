import { TestBed } from '@angular/core/testing';

import { GbuyTokenLoadService } from './gbuy-token-load.service';

describe('GbuyTokenLoadService', () => {
  let service: GbuyTokenLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbuyTokenLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
