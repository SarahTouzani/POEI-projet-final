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
        if (this.listLignePresta) {
            this.listLignePresta.push(ligne);
            this.totalPanier += ligne.totalLigne 
            return;
        }
        this.updatePanier(ligne);  
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

    removeArticle(ligne: LignePresta) {
        let index = this.listLignePresta.findIndex((o) => o.prestation === ligne.prestation);

        this.listLignePresta.splice(index, 1);
        this.totalPanier -= ligne.prestation.tarif;
    }

}
