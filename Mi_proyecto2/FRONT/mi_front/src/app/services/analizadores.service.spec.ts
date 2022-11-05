import { TestBed } from '@angular/core/testing';

import { AnalizadoresService } from './analizadores.service';

describe('AnalizadoresService', () => {
  let service: AnalizadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalizadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
