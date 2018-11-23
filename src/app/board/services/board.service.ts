import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/core/models/board.model';
import { shareReplay, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Comment } from 'src/app/core/models/comment.model';

@Injectable()
export class BoardService {

  reqOptions: HttpHeaders;
  appUrl = environment.apiUrl; // localhost:8000

  constructor(private http:HttpClient) {
    this.reqOptions  = new HttpHeaders()
    .set('Content-type', 'application/json');
  }

  getBoardList():Observable<Board[]>{
    return this.http.get<Board[]>(`${this.appUrl}/board/list`)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  getBoard(id:number):Observable<Board>{
    return this.http.get<Board>(`${this.appUrl}/board/get/${id}`)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  regBoard(board:Board):Observable<any>{
    return this.http.post<Board>(`${this.appUrl}/board/reg`, board)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  updateBoard(board:Board):Observable<any>{
    return this.http.put<Board>(`${this.appUrl}/board/update`, board)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  deleteBoard(id:number):Observable<any>{
    return this.http.delete<any>(`${this.appUrl}/board/delete/${id}`)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  getCommentList(id:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.appUrl}/comment/list/${id}`)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  regComment(comment:Comment):Observable<Comment>{
    return this.http.post<Comment>(`${this.appUrl}/comment/reg`, comment)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  deleteComment(id:number):Observable<any>{
    return this.http.delete<any>(`${this.appUrl}/comment/delete/${id}`)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }


  

  


}