import { TestBed } from '@angular/core/testing';

import { AuthemployeeService } from './authemployee.service';

describe('AuthemployeeService', () => {
  let service: AuthemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
