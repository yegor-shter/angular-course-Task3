import { TestBed, inject } from '@angular/core/testing';

import { StatusCodesService } from './status-codes.service';

describe('StatusCodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusCodesService]
    });
  });

  it('should be created', inject([StatusCodesService], (service: StatusCodesService) => {
    expect(service).toBeTruthy();
  }));
});
