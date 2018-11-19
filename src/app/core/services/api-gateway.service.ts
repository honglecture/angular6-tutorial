import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class ApiGatewayService {

  reqOptions: HttpHeaders;
  TOKEN_NAME = environment.tokenName;
  appUrl = environment.apiUrl; // localhost:8000

  constructor(private http:HttpClient) { 
    this.makeDefaultHttpOption();
  }

  makeDefaultHttpOption(){
    const headers = new HttpHeaders()
      .set('Content-type', 'application/json');
    this.reqOptions = headers;
  }

  get<T>(url: string):Observable<T>{
    return this.http.get<T>(`${this.appUrl}/${url}`, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  post<T>(url: string, data: any):Observable<T>{
    return this.http.post<T>(`${this.appUrl}/${url}`, data, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  put<T>(url: string, data: any):Observable<T>{
    return this.http.put<T>(`${this.appUrl}/${url}`, data, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  delete<T>(url: string):Observable<T>{
    return this.http.delete<T>(`${this.appUrl}/${url}`, {headers: this.reqOptions})
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

}