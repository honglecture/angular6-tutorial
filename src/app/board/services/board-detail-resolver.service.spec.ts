import { TestBed } from '@angular/core/testing';

import { BoardDetailResolverService } from './board-detail-resolver.service';

describe('BoardDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardDetailResolverService = TestBed.get(BoardDetailResolverService);
    expect(service).toBeTruthy();
  });
});
