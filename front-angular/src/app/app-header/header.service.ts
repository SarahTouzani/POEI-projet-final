import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  // public setIsLogged(val: boolean) {
  //   this.isLogged.next(val);
  // }

  // public getIsLogged() {
  //   return this.isLogged.asObservable();
  // }
}
