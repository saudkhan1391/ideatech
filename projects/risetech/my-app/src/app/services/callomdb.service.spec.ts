import { TestBed } from '@angular/core/testing';

import { CallomdbService } from './callomdb.service';

describe('CallomdbService', () => {
  let service: CallomdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallomdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
