import { Component, OnInit } from '@angular/core';
import { Entreprises } from 'src/app/entreprise/entreprises';
import { LignePresta } from '../ligne-presta';
import { PanierPresta } from '../panier-presta';
import { Prestation } from '../prestation';
import { SrvprestationService } from '../srv-presta/srvprestation.service';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.css']
})
export class PrestationsComponent implements OnInit {

  profession : string = "";
  nomentreprise : string = "";
  adresseentreprise : string = "";
  listPrestations : Array<Prestation> = new Array<Prestation>();
  message : string ="";

  prestations : Array<Prestation> = new Array<Prestation>();
  selectedPresta : Prestation = new Prestation(0, "", "", 0, 0,0);
  client : string = "";
  ligne : LignePresta = new LignePresta(0, this.selectedPresta,0);
  panier : PanierPresta = new PanierPresta();
  isAchatCommence : boolean = false;

  constructor(private srv : SrvprestationService) { }

  ngOnInit(): void {
    let entreprise : Entreprises =  JSON.parse(sessionStorage.getItem("entreprise") || '') ;
  this.profession = entreprise.profession; 
  this.nomentreprise = entreprise.entreprise; 
  this.adresseentreprise = entreprise.adresse; 
    this.afficherByProf();
    
   
  }

  init(){
    
  }

  afficherAll(){
    this.srv.findAll().subscribe({
      next:(data) => {this.listPrestations = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listPrestations)}
    })
  }

  afficherByProf(){
    this.srv.findByProfession(this.profession).subscribe({
      next:(data) => {this.listPrestations = data},
      error:(err) => {console.log(err)},
      complete:() => {console.log(this.listPrestations)}
    })
  }

  select(c : Prestation){
    this.selectedPresta = c;
    this.isAchatCommence = true;
    this.ligne.quantite = c.quantite;    
    this.ligne.prestation = this.selectedPresta;
    
    let PrestaDejaDansListe = this.panier.listLignePresta.find(p => p.prestation === this.ligne.prestation);
    let quantite = c.quantite; 
    

    if(PrestaDejaDansListe){
      PrestaDejaDansListe.updateLigne(quantite);
      this.panier.updatePanier(PrestaDejaDansListe);
      console.log(this.ligne.totalLigne);
      return;
    }

    this.panier.client = this.client;
    this.panier.addLigne(this.ligne);
    console.log(this.ligne.totalLigne)
  }

  valideCommande(){
    alert(`${this.client} merci de votre commande de ${this.panier.totalPanier}€`)
  }

}
