import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Comment } from 'src/app/core/models/comment.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-board-detail-comment',
  templateUrl: './board-detail-comment.component.html',
  styleUrls: ['./board-detail-comment.component.css']
})
export class BoardDetailCommentComponent implements OnInit {

  @Input() boardId:number;
  comments:Comment[] = [];
  content:string;

  constructor(private boardService:BoardService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.getCommentList();
  }

  getCommentList(){
    this.boardService.getCommentList(this.boardId).subscribe(
      res=>{
        this.comments = res;
        console.log(this.comments);
      }
    )
  }

  reg(){
    if(!this.authService.isAuthenticated()){
      alert('로그인부터 하세요');
      return;
    }
    let comment = new Comment();
    comment['content'] = this.content;
    comment['boardId'] = this.boardId;
    comment['writer'] = this.authService.getMemberid();
    this.boardService.regComment(comment).subscribe(
      comment=>{
        this.comments = [comment, ...this.comments];
        console.log(comment);
        this.content = '';
      }
    )
  }

  delete(comment:Comment){
    this.comments = this.comments.filter(t=> t !== comment);
    this.boardService.deleteComment(comment['id']).subscribe();
  }

}