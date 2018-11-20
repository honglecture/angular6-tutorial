import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/core/models/board.model';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  boards:Board[] = [];

  constructor(
    private route: ActivatedRoute, 
    private boardService:BoardService,
    private authService:AuthService) { }

  ngOnInit() {

    this.getResolvedData();
  }

  getList(){
    this.boardService.getBoardList().subscribe(
      boards => this.boards = boards
    );
  }

  private getResolvedData(){
    const resolvedData = <{list: Board[]}>this.route.snapshot.data;
    this.boards = resolvedData.list;
  }

}