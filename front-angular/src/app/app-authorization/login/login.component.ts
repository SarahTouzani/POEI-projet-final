import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../shared/authentication.service';
import { UserLogin } from '../shared/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: any;

  constructor(private srv: AuthenticationService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({});
   }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    let user = new UserLogin(this.f['username'].value, this.f['password'].value)
    this.error = "";
    this.srv.login(user).subscribe({
      next: (response) => { sessionStorage.setItem("currentUser", JSON.stringify(response)), console.log(response) },
      error: (err) => { console.log(err); this.error = err.error }
    })
  }

}
