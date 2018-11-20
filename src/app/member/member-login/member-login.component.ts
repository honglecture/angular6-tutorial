import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';
import { Member } from 'src/app/core/models/member.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {

  loginForm:FormGroup;
  message:any;

  constructor(    
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private router: Router) { }

    ngOnInit() {
      this.buildForm();
    }
  
    buildForm(){
      this.loginForm = this.formBuilder.group({
        id: ['', [
          Validators.required
        ]],
        password: ['', [
          Validators.required
        ]],
      });
    }

    get id() {
      return this.loginForm.get('id');
    }
  
    get password() {
      return this.loginForm.get('password');
    }

    onSubmit(){
      let member: Member = new Member();
      member['id'] = this.loginForm.get('id').value;
      member['password'] = this.loginForm.get('password').value;
      this.authService.login(member).subscribe(
        ()=> this.router.navigate(['']),
        result=>{
          this.message = result.error;
        }
      );
      
    }

}
