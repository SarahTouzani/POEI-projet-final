import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  url = "http://localhost:8080/commandes"

  constructor(private http: HttpClient) { }

  saveCommande(data: Commande) {

    const body = JSON.stringify(data);

    return this.http.post(this.url, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => { console.log(err); },
      complete: () => { console.log(new Date())}
    })

  }



}
