import { TestBed } from '@angular/core/testing';

import { AuthrhService } from './authrh.service';

describe('AuthrhService', () => {
  let service: AuthrhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthrhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
