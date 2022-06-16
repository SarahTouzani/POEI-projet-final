import { Component, OnInit } from '@angular/core';
import { UserSignup } from '../shared/user-signup';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  currentUser: any;

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "")
  }

}
