import { TestBed } from '@angular/core/testing';

import { SrvprestationService } from './srvprestation.service';

describe('SrvprestationService', () => {
  let service: SrvprestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvprestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
