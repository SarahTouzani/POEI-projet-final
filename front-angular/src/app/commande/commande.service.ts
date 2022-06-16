import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }

  insert(data : Commande){
    const body = JSON.stringify(data);
   
   
  }

}
