import { TestBed } from '@angular/core/testing';

import { ParticipantNavigService } from './participant-navig.service';

describe('ParticipantNavigService', () => {
  let service: ParticipantNavigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantNavigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
