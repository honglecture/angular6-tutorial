import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { BoardService } from '../services/board.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Board } from 'src/app/core/models/board.model';

@Component({
  selector: 'app-board-update',
  templateUrl: './board-update.component.html',
  styleUrls: ['./board-update.component.css']
})
export class BoardUpdateComponent implements OnInit {
  board:Board;
  boardForm:FormGroup;
  htmlContent:string;
  title:string;

  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private boardService:BoardService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getResolvedData();
    this.htmlContent = this.board['content'];
    this.title = this.board['title'];
  }

  buildForm(){
    this.boardForm = this.formBuilder.group({
      title: ['', [
        Validators.required
      ]],
      content: ['', [
        Validators.required
      ]],
    });
  }

  private getResolvedData(){
    const resolvedData = <{board: Board}>this.route.snapshot.data;
    this.board = resolvedData.board;
  }

  onSubmit(){
    this.board['title'] = this.title;
    this.board['content'] = this.htmlContent;
    this.boardService.updateBoard(this.board).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/board/list']);
      }
    )
  }
}
