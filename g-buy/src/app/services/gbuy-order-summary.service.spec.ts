import { TestBed } from '@angular/core/testing';

import { GbuyOrderSummaryService } from './gbuy-order-summary.service';

describe('GbuyOrderSummaryService', () => {
  let service: GbuyOrderSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbuyOrderSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
