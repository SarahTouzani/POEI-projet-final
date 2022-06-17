export class Prestation {
    prestation : string;
    profession : string;
    tarif : number;

    constructor(prestation : string, profession : string, tarif : number){
        this.prestation = prestation;
        this.profession = profession;
        this.tarif = tarif;
    }

    toString() : string {
        return `${this.prestation} à ${this.tarif} euros.`
    }
}
