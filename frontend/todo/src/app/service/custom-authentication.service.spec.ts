import { TestBed } from '@angular/core/testing';

import { CustomAuthenticationService } from './custom-authentication.service';

describe('CustomAuthenticationService', () => {
  let service: CustomAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
