import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {baseUrl} from "./base-url";
import {IComment} from "../model/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) {
  }

  getComments(id: number): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(`${baseUrl}comments?postId=${id}`)
  }
}
