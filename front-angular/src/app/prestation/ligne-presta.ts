import { Prestation } from "./prestation";

export class LignePresta {
    quantite : number;
    prestation : Prestation;
    totalLigne : number;

    constructor(quantite : number, prestation : Prestation){
        this.quantite = quantite;
        this.prestation = prestation,
        this.totalLigne = this.prestation.tarif * this.quantite;
    }

    updateLigne(quantite : number){
        this.quantite += quantite;
        this.totalLigne = this.quantite * this.prestation.tarif;
    }

    toString() : string {
        return `${this.quantite} x ${this.prestation.toString()} pour un total de ${this.totalLigne} euros.`
    }

}
