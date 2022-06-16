import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './user-login';
import { UserSignup } from './user-signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  url = "http://localhost:8080/api/auth"

  constructor(private http: HttpClient) { }

  
  login(data: UserLogin): Observable<Object> {
  
    const body = JSON.stringify(data);
  
    return this.http.post(`${this.url}/signin`, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }

  register(data: UserSignup) {

    const body = JSON.stringify(data);

    return this.http.post(`${this.url}/signup`, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }

}
