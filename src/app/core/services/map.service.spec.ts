import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MapService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }),
  );

  it('should be created', () => {
    const service: MapService = TestBed.get(MapService);
    expect(service).toBeTruthy();
  });
});
