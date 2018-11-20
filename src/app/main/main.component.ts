import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  id:string;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    if(this.authCheck()){
      this.id = this.authService.getMemberid();
    }
  }

  authCheck():boolean{
    return this.authService.isAuthenticated();
  }

}
