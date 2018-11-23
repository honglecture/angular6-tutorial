import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/core/models/board.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../services/board.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  board:Board;

  constructor(private route: ActivatedRoute, 
    private boardService:BoardService,
    private router:Router,
    private authService:AuthService) { }

  ngOnInit() {
    this.getResolvedData();
  }

  getBoard(){
    const id = this.route.params['id'];
    this.boardService.getBoard(id).subscribe(
      board => this.board = board
    );
  }

  showButton():boolean{
    if(!this.authService.isAuthenticated())
      return false;
    return this.board['writer'] === this.authService.getMemberid();
  }

  private getResolvedData(){
    const resolvedData = <{board: Board}>this.route.snapshot.data;
    this.board = resolvedData.board;
  }

  deleteBoard(){
    this.boardService.deleteBoard(this.board['id']).subscribe(
      res=>{
        this.router.navigate(['/board/list']);
      }
    );
  }

}