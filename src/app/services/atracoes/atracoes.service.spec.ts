import { TestBed } from '@angular/core/testing';

import { AtracoesService } from './atracoes.service';

describe('AtracoesService', () => {
  let service: AtracoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtracoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
