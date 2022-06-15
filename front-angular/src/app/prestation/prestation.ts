export class Prestation {
    id : number;
    prestation : string;
    profession : string;
    tarif : number;
    quantite : number;
    version : number;

    constructor(id : number, prestation : string, profession : string, tarif : number, quantite : number, version : number){
        this.id = id;
        this.prestation = prestation;
        this.profession = profession;
        this.tarif = tarif;
        this.quantite = quantite;
        this.version = version;
    }

    toString() : string {
        return `${this.prestation} à ${this.tarif} euros.`
    }
}
