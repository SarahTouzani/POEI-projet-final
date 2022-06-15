export class Entreprises {
    id: number;
    adresse: string;
    departement: string;
    entreprise: string;
    mail: string;
    profession: string;
    telephone: string;
    version: number;

    constructor(id: number, adresse: string, departement: string, entreprise: string, mail: string, profession: string, telephone: string,
        version: number) {
        this.id = id;
        this.adresse = adresse;
        this.departement = departement;
        this.entreprise = entreprise;
        this.mail = mail;
        this.profession = profession;
        this.telephone = telephone;
        this.version = version;
    }

}
