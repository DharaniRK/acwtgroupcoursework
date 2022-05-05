import { TestBed } from '@angular/core/testing';

import { GbuyProductsService } from './gbuy-products.service';

describe('GbuyProductsService', () => {
  let service: GbuyProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbuyProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
