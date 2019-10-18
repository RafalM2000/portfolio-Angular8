import { TestBed } from '@angular/core/testing';

import { Interaction2Service } from './interaction2.service';

describe('Interaction2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Interaction2Service = TestBed.get(Interaction2Service);
    expect(service).toBeTruthy();
  });
});
