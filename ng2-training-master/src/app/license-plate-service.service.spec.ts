import { TestBed, inject } from '@angular/core/testing';

import { LicensePlateServiceService } from './license-plate-service.service';

describe('LicensePlateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LicensePlateServiceService]
    });
  });

  it('should be created', inject([LicensePlateServiceService], (service: LicensePlateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
