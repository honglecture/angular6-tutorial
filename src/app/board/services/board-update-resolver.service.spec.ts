import { TestBed } from '@angular/core/testing';

import { BoardUpdateResolverService } from './board-update-resolver.service';

describe('BoardUpdateResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardUpdateResolverService = TestBed.get(BoardUpdateResolverService);
    expect(service).toBeTruthy();
  });
});
