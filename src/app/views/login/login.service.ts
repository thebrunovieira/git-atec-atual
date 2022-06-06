import { User } from '../../objects/user.obj';
import { Observable } from 'rxjs';
import { baseUrl } from './../../services/base-url.variable';
import { UserModel } from './../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: User;
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(baseUrl + '/users');
  }

  setUserLoged(user: UserModel) {
    this.user = new User(user);
  }

  getUserLoged() { return this.user; }
}
