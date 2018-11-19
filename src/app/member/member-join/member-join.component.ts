import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-join',
  templateUrl: './member-join.component.html',
  styleUrls: ['./member-join.component.css']
})
export class MemberJoinComponent implements OnInit {

  url:string = '';

  constructor(private location: Location) { }

  ngOnInit() {}

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
    }
  }

  back(){
    this.location.back();
  }

}
