import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<PostInterface[]>{
    return this.httpClient.get<PostInterface[]>("https://jsonplaceholder.typicode.com/posts/")
  }
}
