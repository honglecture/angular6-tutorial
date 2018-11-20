import { Injectable } from '@angular/core';
import { Member } from 'src/app/core/models/member.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MemberService } from './member.service';

@Injectable()
export class MemberProfileResolverService implements Resolve<Member> {

  constructor(private authService:AuthService, private memberService:MemberService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const memberId = this.authService.getMemberid();
    console.log(memberId);
    return this.memberService.getMember(memberId);
  }

}
