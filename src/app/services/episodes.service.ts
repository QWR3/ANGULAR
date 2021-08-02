import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GeneralService} from "./general.service";
import {Observable} from "rxjs";
import {IEpisode} from "../models/IEpisode";
import {IInfo} from "../models/IInfo";

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private httpClient: HttpClient, private generalService: GeneralService) {
  }

  getAllEpisodes(page = 1): Observable<{ info: IInfo, results: IEpisode[] }> {
    return this.httpClient.get<{ info: IInfo, results: IEpisode[] }>(this.generalService.getBaseUrl() + `episode?page=${page}`)
  }

  getEpisode(id:number):Observable<IEpisode>{
    return this.httpClient.get<IEpisode>(this.generalService.getBaseUrl()+`episode/${id}`)
  }
}
