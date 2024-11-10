import { TestBed } from '@angular/core/testing';

import { ParceriasService } from './parcerias.service';

describe('ParceriasService', () => {
  let service: ParceriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParceriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
