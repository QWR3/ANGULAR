import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PostsService} from "./posts.service";
import {PostInterface} from "../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<PostInterface[]>{

  constructor(private postsService:PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface[]> | Promise<PostInterface[]> | PostInterface[] {
    return this.postsService.getPosts()
  }
}
