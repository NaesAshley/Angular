import { TestBed } from '@angular/core/testing';

import { VehicleplaceholderService } from './vehicleplaceholder.service';

describe('VehicleplaceholderService', () => {
  let service: VehicleplaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
