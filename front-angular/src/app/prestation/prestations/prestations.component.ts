import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/commande/commande';
import { CommandeService } from 'src/app/commande/commande.service';
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

  profession: string = "";
  nomentreprise: string = "";
  adresseentreprise: string = "";
  listPrestations: Array<Prestation> = new Array<Prestation>();

  listeLignePrestations: Array<LignePresta> = new Array<LignePresta>();
  client: string = "";
  panier: PanierPresta = new PanierPresta();

  constructor(private srv: SrvprestationService, private router: Router, private com: CommandeService) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("entreprise") == null) {
      this.router.navigate(['/entreprises']);
    }

    let entreprise: Entreprises = JSON.parse(sessionStorage.getItem("entreprise") || '');
    let user = JSON.parse(sessionStorage.getItem("currentUser") || '')
    this.client = user.contact.lastname + " " + user.contact.firstname;
    this.profession = entreprise.profession;
    this.nomentreprise = entreprise.entreprise;
    this.adresseentreprise = entreprise.adresse;
    this.afficherByProf();
    this.setPanier();
  }

  private afficherByProf() {
    this.srv.findByProfession(this.profession).subscribe({
      next: (data) => { this.listPrestations = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log(this.listeLignePrestations); this.listPrestations.forEach((v) => this.listeLignePrestations.push(new LignePresta(0, v))) }
    })
  }

  select(c: LignePresta) {

    if (c.quantite > 0) {

      let li = new LignePresta(c.quantite, c.prestation);

      let PrestaDejaDansListe = this.panier.listLignePresta.find(p => p.prestation === li.prestation);
      let quantite = c.quantite;
      c.quantite = 0;

      if (PrestaDejaDansListe) {
        PrestaDejaDansListe.updateLigne(quantite);
        this.panier.updatePanier(PrestaDejaDansListe);
        sessionStorage.setItem("panier", JSON.stringify(this.panier));
        return;
      }

      this.panier.client = this.client;
      this.panier.addLigne(li);
      sessionStorage.setItem("panier", JSON.stringify(this.panier));
    }

  }

  valideCommande() {

    let currentUser = JSON.parse(sessionStorage.getItem("currentUser") || "");
    let presta = new Array<string>();

    this.panier.listLignePresta.map((p) => presta.push(JSON.stringify(p)))

    let commande = new Commande();
    commande.date = this.formatDate(new Date());
    commande.idClient = currentUser.id;
    commande.prestations = presta;
    commande.total = this.panier.totalPanier;

    this.com.saveCommande(commande);

    this.router.navigate(['/recapcommande'])
  }

  remove(p: LignePresta) {
    this.panier.removeArticle(p);

    if (this.panier.listLignePresta.length == 0) {
      this.panier = new PanierPresta();
    }
    sessionStorage.setItem("panier", JSON.stringify(this.panier));
  }

  setPanier() {

    if (sessionStorage.getItem("panier")) {

      let oldPanier = JSON.parse(sessionStorage.getItem("panier") || '{}');

      this.panier = new PanierPresta();
      this.panier.client = oldPanier.client;
      this.panier.listLignePresta = oldPanier.listLignePresta;
      this.panier.totalPanier = oldPanier.totalPanier;
    }
  }


  private padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  private formatDate(date: Date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

}
