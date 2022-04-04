import { TestBed } from '@angular/core/testing';

import { GbuyAuthService } from './gbuy-auth.service';

describe('GbuyAuthService', () => {
  let service: GbuyAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbuyAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
