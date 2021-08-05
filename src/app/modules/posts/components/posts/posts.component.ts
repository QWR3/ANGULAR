import {Component, OnInit} from '@angular/core';
import {PostInterface} from "../../../interfaces/post.interface";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostInterface[]
  chosen:PostInterface

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value)
  }

  fillChosen(post:PostInterface){
    this.chosen = post
  }

}
