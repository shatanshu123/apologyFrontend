import { TestBed } from '@angular/core/testing';

import { ApologyService } from './apology.service';

describe('ApologyService', () => {
  let service: ApologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
