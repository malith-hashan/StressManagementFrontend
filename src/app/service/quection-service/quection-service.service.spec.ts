import { TestBed } from '@angular/core/testing';

import { QuectionServiceService } from './quection-service.service';

describe('QuectionServiceService', () => {
  let service: QuectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
