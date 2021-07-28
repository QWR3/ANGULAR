import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../model/IPost";

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.scss']
})
export class AboutPostComponent implements OnInit {

  post: IPost

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id)
      this.postsService.getPost(id).subscribe(value => this.post = value)
    })
  }


}
