import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-list-item',
  templateUrl: './board-list-item.component.html',
  styleUrls: ['./board-list-item.component.css']
})
export class BoardListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log('fdsfs');
  }

}
