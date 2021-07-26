import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPostModel} from "../../model/IPostModel";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: IPostModel[] = [{id: 0, userId: 0, title: '', body: ''}]

  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe(value => this.posts = value)
  }

  ngOnInit(): void {
  }
}
