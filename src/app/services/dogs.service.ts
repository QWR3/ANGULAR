import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IDogModel} from "../model/IDogModel";

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  api_key = "?api_key=743b927e-b5aa-43cc-bd3e-1e56a581d806"

  constructor(private httpClient:HttpClient) { }

  getDogs():Observable<IDogModel[]>{
    return this.httpClient.get<IDogModel[]>(`https://api.thedogapi.com/v1/breeds${this.api_key}`)
  }
}
