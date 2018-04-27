import { TestBed, inject } from '@angular/core/testing';

import { CurrencySwicherService } from './currency-swicher.service';

describe('CurrencySwicherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencySwicherService]
    });
  });

  it('should be created', inject([CurrencySwicherService], (service: CurrencySwicherService) => {
    expect(service).toBeTruthy();
  }));
});
