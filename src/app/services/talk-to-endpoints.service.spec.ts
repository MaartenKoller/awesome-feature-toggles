import { TestBed } from '@angular/core/testing';

import { TalkToEndpointsService } from './talk-to-endpoints.service';

describe('TalkToEndpointsService', () => {
  let service: TalkToEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalkToEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
