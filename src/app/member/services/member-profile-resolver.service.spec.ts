import { TestBed } from '@angular/core/testing';

import { MemberProfileResolverService } from './member-profile-resolver.service';

describe('MemberProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemberProfileResolverService = TestBed.get(MemberProfileResolverService);
    expect(service).toBeTruthy();
  });
});
