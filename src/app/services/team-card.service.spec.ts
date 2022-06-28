import { TestBed } from '@angular/core/testing';

import { TeamCardService } from './team-card.service';

describe('TeamCardService', () => {
  let service: TeamCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
