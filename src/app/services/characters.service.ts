import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICharacter} from "../models/ICharacter";
import {GeneralService} from "./general.service";
import {IInfo} from "../models/IInfo";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient, private generalService: GeneralService) {
  }

  getAllCharacters(page = 1): Observable<{ info: IInfo, results: ICharacter[] }> {
    return this.httpClient.get<{ info: IInfo, results: ICharacter[] }>(this.generalService.getBaseUrl() + `character?page=${page}`)
  }

  getCharacter(id:number):Observable<ICharacter>{
    return this.httpClient.get<ICharacter>(this.generalService.getBaseUrl()+`character/${id}`)
  }
}
