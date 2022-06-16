import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isLogged : boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  this.isLogged = JSON.parse(sessionStorage.getItem("isLogged") || '{}')

  }
goLogin(){
  this.router.navigate(['/login']); 
}
goSignUp(){
  this.router.navigate(['/signup']); 
}
logout(){
  this.router.navigate(['/logout']); 
}



}
