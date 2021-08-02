import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private _baseUrl="https://rickandmortyapi.com/api/"

  constructor() { }

  getBaseUrl():string {
    return this._baseUrl;
  }
}
