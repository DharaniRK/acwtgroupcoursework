import { TestBed } from '@angular/core/testing';

import { GbuyUsersService } from './gbuy-users.service';

describe('GbuyUsersService', () => {
  let service: GbuyUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbuyUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
