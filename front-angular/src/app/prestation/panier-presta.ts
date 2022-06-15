import { LignePresta } from "./ligne-presta";
import { Prestation } from "./prestation";

export class PanierPresta {

    client : string;
    listLignePresta : Array<LignePresta>;
    totalPanier : number;

    constructor () {
        this.client = "";
        this.listLignePresta = new Array<LignePresta>();
        this.totalPanier = 0;
    }

    addLigne(ligne : LignePresta){
        this.listLignePresta.push(ligne);
        this.totalPanier += ligne.totalLigne
    }

    updatePanier(ligne : LignePresta){
        this.listLignePresta.map(Prestation => {
            if (Prestation === ligne) {
                this.totalPanier += ligne.prestation.tarif;
                return ligne;
            }
            return Prestation;
        });
    }

}
