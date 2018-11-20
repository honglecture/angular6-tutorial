import { TestBed } from '@angular/core/testing';

import { BoardListResolverService } from './board-list-resolver.service';

describe('BoardListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardListResolverService = TestBed.get(BoardListResolverService);
    expect(service).toBeTruthy();
  });
});
