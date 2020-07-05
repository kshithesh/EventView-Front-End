import { TestBed } from '@angular/core/testing';

import { EventTypeService } from './eventtype.service';

describe('EventtypeService', () => {
  let service: EventTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
