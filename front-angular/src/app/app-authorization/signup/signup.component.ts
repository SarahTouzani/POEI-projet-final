import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppHeaderComponent } from 'src/app/app-header/app-header.component';
import { HeaderService } from 'src/app/app-header/header.service';
import { AuthenticationService } from '../shared/authentication.service';
import { UserSignup } from '../shared/user-signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  error: any;

  constructor(private srv: AuthenticationService, private formBuilder: FormBuilder, private router : Router, private headersrv : HeaderService) { 
    this.signupForm = formBuilder.group({});
  }

  ngOnInit(): void {
    this.initSignupForm();
  }

  initSignupForm() {
    this.signupForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    })
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    let user = new UserSignup(this.f['username'].value, this.f['password'].value, this.f['email'].value)
    this.error = "";
    this.srv.register(user).subscribe({
      next: (response) => { console.log(response) , this.router.navigate(['/login'])},
      error: (err) => { console.log(err); this.error = err.error }
    })
  }

}
