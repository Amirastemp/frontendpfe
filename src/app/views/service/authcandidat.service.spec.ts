import { TestBed } from '@angular/core/testing';

import { AuthcandidatService } from './authcandidat.service';

describe('AuthcandidatService', () => {
  let service: AuthcandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
