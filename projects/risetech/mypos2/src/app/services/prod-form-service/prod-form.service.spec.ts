import { TestBed } from '@angular/core/testing';

import { ProdFormService } from './prod-form.service';

describe('ProdFormService', () => {
  let service: ProdFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
