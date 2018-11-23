import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-board-detail-comment-item',
  templateUrl: './board-detail-comment-item.component.html',
  styleUrls: ['./board-detail-comment-item.component.css']
})
export class BoardDetailCommentItemComponent implements OnInit {

  @Input() comment:Comment;
  @Output() deleteComment = new EventEmitter<Comment>();


  constructor(private authService:AuthService) { }

  ngOnInit() {

  }

  delete(){
    this.deleteComment.emit(this.comment);
  }

  
  showButton():boolean{
    if(!this.authService.isAuthenticated())
      return false;
    return this.comment['writer'] === this.authService.getMemberid();
  }

}
