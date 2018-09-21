/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EtapeService } from './etape.service';

describe('EtapeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtapeService]
    });
  });

  it('should ...', inject([EtapeService], (service: EtapeService) => {
    expect(service).toBeTruthy();
  }));
});
