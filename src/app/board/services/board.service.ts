import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Board } from 'src/app/core/models/board.model';
import { shareReplay, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

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

  

}
