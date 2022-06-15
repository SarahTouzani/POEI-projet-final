import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestation } from '../prestation';

@Injectable({
  providedIn: 'root'
})
export class SrvprestationService {

  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Array<Prestation>>("http://localhost:8080/prestations")
  }
  
  findByProfession(profession : string){
    return this.http.get<Array<Prestation>>("http://localhost:8080/prestations/prof/"+profession)
  }

}
