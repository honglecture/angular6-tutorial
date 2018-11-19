import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Member } from 'src/app/core/models/member.model';
import { MemberService } from '../services/member.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/MemberPasswordValidator';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-member-join',
  templateUrl: './member-join.component.html',
  styleUrls: ['./member-join.component.css']
})
export class MemberJoinComponent implements OnInit {

  memberForm:FormGroup;
  member:Member;
  uploadFile:File;
  url:string = '';

  constructor(private formBuilder: FormBuilder ,private location: Location, private memberService:MemberService) { }

  ngOnInit() {
    this.buildMemberForm();
  }

  buildMemberForm(){
    this.memberForm = this.formBuilder.group({
      id: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]{4,10}')
      ]],
      passwordGroup: this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {Validators: PasswordValidator.match}),
      email: ['', [
        Validators.required
      ]],
      nickname: ['', [
        Validators.required
      ]],
      birth: ['', [
        Validators.required
      ]],
    });
  }

  openFileBrowser(event:any){
    event.preventDefault();
    let element:HTMLElement = document.querySelector('input[type="file"]') as HTMLElement;
    element.click();
  }

  onFileChange(event:any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) =>{
        this.url = event.target['result']
      }
      this.uploadFile = event.target.files[0];
    }
  }

  get id() {
    return this.memberForm.get('id');
  }

  get passwordGroup() {
    return this.memberForm.get('passwordGroup');
  }

  get password() {
    return this.memberForm.get('passwordGroup.password');
  }

  get confirmPassword() {
    return this.memberForm.get('passwordGroup.confirmPassword');
  }

  get email() {
    return this.memberForm.get('email');
  }

  get nickname() {
    return this.memberForm.get('nickname');
  }

  get birth() {
    return this.memberForm.get('birth');
  }

  onSubmit(){
    const formdata: FormData = new FormData();
    formdata.append('img', this.uploadFile);
    this.memberService.picktureUpload(formdata).subscribe(
      res=>{
        let member: Member = new Member();
        member['id'] = this.memberForm.get('id').value;
        member['password'] = this.memberForm.get('passwordGroup.password').value;
        member['nickname'] = this.memberForm.get('nickname').value;
        member['birth'] = this.memberForm.get('birth').value;
        member['email'] = this.memberForm.get('email').value;
        member['picture'] = res.url
        this.memberService.join(member).subscribe(
          result=>{
            console.log(result);
          }
        )
      }
    )
  }

  back(){
    this.location.back();
  }

}
