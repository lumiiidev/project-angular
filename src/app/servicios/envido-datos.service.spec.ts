import { TestBed } from '@angular/core/testing';

import { EnviandoDatosService } from './envido-datos.service';

describe('EnvidoDatosService', () => {
  let service: EnviandoDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviandoDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
