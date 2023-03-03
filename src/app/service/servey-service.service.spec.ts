import { TestBed } from '@angular/core/testing';

import { ServeyServiceService } from './servey-service.service';

describe('ServeyServiceService', () => {
  let service: ServeyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
