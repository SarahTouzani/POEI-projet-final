import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprises } from '../entreprises';

@Injectable({
  providedIn: 'root'
})
export class SrvEntrepriseService {

  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Array<Entreprises>>("http://localhost:8080/entreprises")
  }

  findById(id : number){
    return this.http.get<Array<Entreprises>>("http://localhost:8080/entreprises/"+id)
  }

  findByDepartement(dpt : string){
    return this.http.get<Array<Entreprises>>("http://localhost:8080/entreprises/dep/"+dpt)
  }

  findByProfession(prof : string){
    return this.http.get<Array<Entreprises>>("http://localhost:8080/entreprises/prof/"+prof)
  }

  findByProfessionDepartement(prof : string, dep : string){
    return this.http.get<Array<Entreprises>>("http://localhost:8080/entreprises/profdep/"+prof+"/"+dep)
  }

}
