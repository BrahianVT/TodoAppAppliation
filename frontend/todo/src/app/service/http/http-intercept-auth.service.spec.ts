import { TestBed } from '@angular/core/testing';

import { HttpInterceptAuthService } from './http-intercept-auth.service';

describe('HttpInterceptAuthService', () => {
  let service: HttpInterceptAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
