import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member.model';
import { MemberService } from '../services/member.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/validators/custom-validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-member-join',
  templateUrl: './member-join.component.html',
  styleUrls: ['./member-join.component.css']
})
export class MemberJoinComponent implements OnInit {

  memberForm:FormGroup;
  //uploadFile:File;
  url:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private memberService:MemberService,
    private router: Router) { }

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
      }, {validator: CustomValidator.passwordMatch}),
      email: ['', [
        Validators.required
      ]],
      nickname: ['', [
        Validators.required
      ]],
      birth: ['', [
        Validators.required
      ]],
      picture: ['', [
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
    if(!event.target.files || !event.target.files[0])
      return;
    const file = event.target.files[0];

    if(file.type.indexOf("image/") < 0){
      alert("이미지가 아닙니다.");
      return;
    }

    if(file.size > 1024*1024*5){
      alert("죄송합니다. 5MB를 초과할 수 없습니다.")
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) =>{
      this.url = reader.result.toString();
    }
    this.memberForm.patchValue({
      picture: file
    });
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
  get picture() {
    return this.memberForm.get('picture');
  }

  onSubmit(){
    const formdata: FormData = new FormData();
    formdata.append('img', this.memberForm.get('picture').value);
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
            if(result.success){
              this.back();
            }
          }
        )
      }
    )
  }

  back(){
    this.router.navigate(['/member/login']);
  }

}
