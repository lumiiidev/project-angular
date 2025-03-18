import { TestBed } from '@angular/core/testing';

import { EnvidoDatosService } from './envido-datos.service';

describe('EnvidoDatosService', () => {
  let service: EnvidoDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvidoDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
