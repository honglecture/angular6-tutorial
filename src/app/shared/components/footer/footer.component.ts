import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  thisYear:number;

  constructor() { }

  ngOnInit() {
    this.thisYear = new Date().getFullYear();
  }

}
