import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();
@Injectable()
export class AuthenticationService {
  user :any ;
  constructor(private http: HttpClient) {}
  
  login(userName: string,password: String) {
   
    let makeRequest = this.http.post(`${environment.apiBaseURL}/admin/login`, {email:userName,password:password});
    return makeRequest;
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      return !jwtHelper.isTokenExpired(token);
    }
    return false;
  }
  isAdmin(): boolean {
    return jwtHelper.decodeToken(this.getToken()).scope === 'admin';
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  getUseRole(): string {
    const token = this.getToken();
    if (token) {
      return jwtHelper.decodeToken(token).role;
    }
    return;
  }
  setCurrentUser(user, token: string): Boolean {
    
      localStorage.setItem('currentUser',user);
      localStorage.setItem('token', token);
      return true;

  }
}
