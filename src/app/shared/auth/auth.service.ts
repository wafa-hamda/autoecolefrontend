import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {delay, map, tap} from 'rxjs/operators';
import {User} from '../models/User.model';
import {Role} from './Role';
import * as jwt_decode from 'jwt-decode';



@Injectable()
export class AuthService {
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  token: string;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private username: string;
  public jwtHelper: JwtHelperService = new JwtHelperService();

  decodedToken: { [key: string]: string };
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token === null) {
      return false
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.exp.toString().substr(0, 10) > Date.now().toString().substr(0, 10);
  }

  public isAdmin() {
    const isAdmin: boolean = localStorage.getItem('currentUser').includes(Role.Admin);
    console.log('is admin: ' + isAdmin);
    return isAdmin;
  }
  public hasRoles(roles) {
    if (this.isAdmin()) {
      return true;
    }
    let hasRole = true;
    for (const role of roles) {
      const hasrole = localStorage.getItem('currentUser').includes(role);
      hasRole = hasRole && hasrole;
    }
    return hasRole;
  }

  signinUser(username: string, password: string) {
    return this.http.post<any>(`/api/authenticate`, { username, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.id_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.decodedToken = jwt_decode(user.id_token);
          localStorage.setItem('currentUser', JSON.stringify(this.decodedToken));
          localStorage.setItem('token', user.id_token);
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  getToken() {
    return this.token;
  }


  signoutUser() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
