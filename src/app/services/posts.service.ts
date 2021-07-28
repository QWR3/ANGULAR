import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../model/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = "https://jsonplaceholder.typicode.com/"

  constructor(private httpClient:HttpClient) {

  }
  getPosts():Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url+"posts")
  }
  getPost(id:number):Observable<IPost>{
    return this.httpClient.get<IPost>(this.url+"posts/"+id)
  }
}
