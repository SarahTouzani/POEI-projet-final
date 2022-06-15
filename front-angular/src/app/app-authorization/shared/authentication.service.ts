import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = "http://localhost:8080/api/auth/signin"

  constructor(private http: HttpClient) { }

  
  generateToken(data: UserLogin): Observable<Object> {
  
    const body = JSON.stringify(data);
  
    return this.http.post(this.url, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }

}
