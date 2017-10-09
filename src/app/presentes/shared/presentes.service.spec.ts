/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PresentesService } from './presentes.service';

describe('Service: Presentes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PresentesService]
    });
  });

  it('should ...', inject([PresentesService], (service: PresentesService) => {
    expect(service).toBeTruthy();
  }));
});
