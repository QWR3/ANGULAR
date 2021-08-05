import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import {PostsService} from "../services/posts.service";
import { PostComponent } from './components/post/post.component';
import { AboutPostComponent } from './components/about-post/about-post.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    AboutPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  providers:[
    PostsService
  ]
})
export class PostsModule { }
