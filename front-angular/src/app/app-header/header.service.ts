import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  isLogged : boolean = false;

  constructor(private router:Router) { }

  init(){
    let user = JSON.parse(sessionStorage.getItem("currentUser") || '')
    if(user){
      this.isLogged = true;
    }
    sessionStorage.setItem("isLogged", JSON.stringify(this.isLogged))
  }
}
