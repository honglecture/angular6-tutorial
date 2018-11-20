import { Component, OnInit, Input } from '@angular/core';
import { Board } from 'src/app/core/models/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list-item',
  templateUrl: './board-list-item.component.html',
  styleUrls: ['./board-list-item.component.css']
})
export class BoardListItemComponent implements OnInit {

  @Input() board: Board;

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  detail(){
    this.router.navigate([`/board/detail/${this.board['id']}`]);
  }


}
