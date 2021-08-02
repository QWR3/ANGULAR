import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeneralService} from "./general.service";
import {Observable} from "rxjs";
import {ILocation} from "../models/ILocation";
import {IInfo} from "../models/IInfo";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpClient: HttpClient, private generalService: GeneralService) {
  }

  getAllLocations(page = 1): Observable<{ info: IInfo, results: ILocation[] }> {
    return this.httpClient.get<{ info: IInfo, results: ILocation[] }>(this.generalService.getBaseUrl() + `location?page=${page}`)
  }
  getLocation(id:number):Observable<ILocation>{
    return this.httpClient.get<ILocation>(this.generalService.getBaseUrl()+`location/${id}`)
  }
}
