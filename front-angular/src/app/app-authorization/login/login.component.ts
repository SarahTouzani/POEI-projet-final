import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { UserLogin } from '../shared/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLogin;
  message: any;
  error: any;

  constructor(private srv: AuthenticationService) {
    this.user = new UserLogin("", "");
   }

  ngOnInit(): void {
  }

  verifyLogin() {
    this.error = "";
    this.srv.generateToken(this.user).subscribe({
      next: (response) => { sessionStorage.setItem("loginToken", JSON.stringify(response)) },
      error: (err) => { console.log(err); this.error = err }
    })
  }

}
