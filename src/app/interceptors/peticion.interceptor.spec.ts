import { TestBed } from '@angular/core/testing';

import { PeticionInterceptor } from './peticion.interceptor';

describe('PeticionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PeticionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PeticionInterceptor = TestBed.inject(PeticionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
