import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {
  licznik = 0;
  _obs = new BehaviorSubject<number>(this.licznik);

  obs()
  {
    return this._obs.asObservable();
  }

  dodaj()
  {
    this.licznik++;
    this._obs.next(this.licznik);
  }

  constructor() { }
}
