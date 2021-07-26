import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPostModel} from "../model/IPostModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpclient: HttpClient) {
  }

  getPosts(): Observable<IPostModel[]> {
    return this.httpclient.get<IPostModel[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
