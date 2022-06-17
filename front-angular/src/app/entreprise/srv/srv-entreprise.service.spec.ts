import { TestBed } from '@angular/core/testing';

import { SrvEntrepriseService } from './srv-entreprise.service';

describe('SrvEntrepriseService', () => {
  let service: SrvEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
