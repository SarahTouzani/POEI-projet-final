import { LignePresta } from "../prestation/ligne-presta";

export class Commande {

    date : string;
    idClient : number;
    prestations : Array<string>;
    total : number;
 
    constructor(){
        this.date = "";
        this.idClient = 0;
        this.prestations = new Array<string>;
        this.total = 0;
    }

}
