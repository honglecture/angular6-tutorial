import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Member } from 'src/app/core/models/member.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  member:Member;
  appUrl = environment.apiUrl; // localhost:8000

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private location: Location,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getResolvedData();
  }

  private getResolvedData(){
    const resolvedData = <{member: Member}>this.activatedRoute.snapshot.data;
    console.log(resolvedData);
    this.member = resolvedData.member;
    // 이 부분 고쳐야 함
    this.member['picture'] = `${this.appUrl}${this.member['picture']}`;
  }

  logout(){
    this.authService.signout();
    this.router.navigate(['']);
  }

  back(){
    this.location.back();
  }

}
