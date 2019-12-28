import { TestBed } from '@angular/core/testing';

import { CompteurService } from './compteur.service';

describe('CompteurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteurService = TestBed.get(CompteurService);
    expect(service).toBeTruthy();
  });
});
