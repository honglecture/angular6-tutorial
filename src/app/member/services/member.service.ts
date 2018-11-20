import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { shareReplay, catchError } from 'rxjs/operators';
import { Member } from 'src/app/core/models/member.model';

@Injectable()
export class MemberService {
  reqOptions: HttpHeaders;
  appUrl = environment.apiUrl; // localhost:8000

  constructor(private http:HttpClient) {
    this.reqOptions  = new HttpHeaders()
    .set('Content-type', 'application/json');
  }

  join(member:Member):Observable<any>{
    return this.http.post(`${this.appUrl}/member/join`, member)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  picktureUpload(formData:FormData):Observable<any>{
    return this.http.post(`${this.appUrl}/upload/img`, formData)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

  getMember(id:string):Observable<Member>{
    return this.http.get<Member>(`${this.appUrl}/member/${id}`)
    .pipe(shareReplay(),catchError(error=>throwError(error)));
  }

}
