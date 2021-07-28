import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../model/IPost";
import {baseUrl} from "./base-url";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(id:number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${baseUrl}posts/?userId=${id}`)
  }
}
