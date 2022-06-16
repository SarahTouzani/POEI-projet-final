import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private router:Router, private headerSrv: HeaderService) {
    this.headerSrv.isLogged.subscribe( value => {this.isLogged = value});
   }

  ngOnInit(): void {
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
