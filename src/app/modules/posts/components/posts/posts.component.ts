import {Component, OnInit} from '@angular/core';
import {PostInterface} from "../../../interfaces/post.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: PostInterface[]
  chosen:PostInterface

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({posts})=>this.posts=posts)
  }

  fillChosen(post:PostInterface){
    this.chosen = post
  }

}
