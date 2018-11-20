import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  private jwtHelper:JwtHelper;
  TOKEN_NAME = environment.tokenName;
  reqOptions: HttpHeaders;
  appUrl = environment.apiUrl; // localhost:8000

  constructor(private http:HttpClient) {
    this.jwtHelper = new JwtHelper();
    this.reqOptions  = new HttpHeaders()
    .set('Content-type', 'application/json');
  }

  login(member:Member): Observable<any>{
    return this.http.post(`${this.appUrl}/member/login`, member)
    .pipe(tap(res => this.setToken(res.token)))
  }

  signout(): void {
    this.removeToken();
  }

  // 토큰 유효성 검증
  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.isTokenExpired(token) : false;
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_NAME);
  }

  isTokenExpired(token: string) {
    return this.jwtHelper.isTokenExpired(token);
  }

  getMemberid(): string {
    return this.jwtHelper.decodeToken(this.getToken()).id;
  }

}