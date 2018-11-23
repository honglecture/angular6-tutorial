import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/core/models/board.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../services/board.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  p:number;

  boards:Board[] = [];

  constructor(
    private route: ActivatedRoute, 
    private boardService:BoardService,
    private authService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
    this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.p = params.p;
    });
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