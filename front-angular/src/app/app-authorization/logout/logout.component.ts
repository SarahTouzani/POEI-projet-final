import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/app-header/header.service';
import { UserSignup } from '../shared/user-signup';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private headersrv: HeaderService) { }

  ngOnInit(): void {
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("panier");
    sessionStorage.removeItem("entreprise");
    this.headersrv.isLogged.next(false);
    this.router.navigate(["/index"]);
  }

}
