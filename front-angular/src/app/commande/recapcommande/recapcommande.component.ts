import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanierPresta } from 'src/app/prestation/panier-presta';
import { Entreprises } from '../../entreprise/entreprises';

@Component({
  selector: 'app-recapcommande',
  templateUrl: './recapcommande.component.html',
  styleUrls: ['./recapcommande.component.css']
})
export class RecapcommandeComponent implements OnInit {

  profession : string = "";
  nomentreprise : string = "";
  adresseentreprise : string = "";
  username : String = "";
  adresseUser : String = "";

  panier : PanierPresta = new PanierPresta();

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser")==null){
      this.router.navigate(['/appcarousel']);
    }
    if(sessionStorage.getItem("entreprise")==null){
      this.router.navigate(['/entreprises']);
    }

    let entreprise : Entreprises =  JSON.parse(sessionStorage.getItem("entreprise") || '') ;
    this.profession = entreprise.profession;
    this.nomentreprise = entreprise.entreprise;
    this.adresseentreprise = entreprise.adresse;

    let user = JSON.parse(sessionStorage.getItem("currentUser") || '')
    this.username = user.username;
    this.adresseUser = user.adresse;

    this.panier = JSON.parse(sessionStorage.getItem("panier") || '{}');

  }

}
