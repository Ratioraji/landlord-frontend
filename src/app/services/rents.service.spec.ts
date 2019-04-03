import { TestBed, inject } from '@angular/core/testing';

import { RentsService } from './rents.service';

describe('RentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentsService]
    });
  });

  it('should be created', inject([RentsService], (service: RentsService) => {
    expect(service).toBeTruthy();
  }));
});
