import { Injectable } from '@angular/core';
// 1. Import HttpHeaders, this will allow us to POST JSON data
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user';

// 2. Create a JSON header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // 3. Add URL as an instance variable
  private url:string = 'http://localhost:3000/api/auth';

  constructor(
    private http:HttpClient
  ) { }

  // 4. Change test() to login() and accept a user object as an argument
  // 5. Expect a User object instead of an array of User objects
  // 6. Change from a GET to a POST request
  // 7. Pass the user object and the HTTP headers into the POST request
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user, httpOptions);
  }

  logout(): Observable<User> {
    return this.http.get<User>(`${this.url}/logout`, httpOptions);
  }
}
