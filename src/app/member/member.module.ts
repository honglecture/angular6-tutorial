import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './member.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MemberRoutingModule } from './member-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { MemberJoinComponent } from './member-join/member-join.component';

@NgModule({
  declarations: [MemberComponent, MemberLoginComponent,  MemberProfileComponent, MemberJoinComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,

    /*custom module */
    SharedModule
  ]
})
export class MemberModule { }