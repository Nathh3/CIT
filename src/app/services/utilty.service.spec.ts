import { TestBed } from '@angular/core/testing';

import { UtiltyService } from '../services/utilty.service';

describe('UtiltyService', () => {
  let service: UtiltyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtiltyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
