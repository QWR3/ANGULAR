import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostInterface} from "../../../interfaces/post.interface";
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.scss']
})
export class AboutPostComponent implements OnInit {

  post: PostInterface

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.post = this.router.getCurrentNavigation()?.extras.state as PostInterface
    } else {
      this.activatedRoute.params.subscribe(value => this.postsService.getPost(value.id).subscribe(value => this.post = value))
    }
  }

  ngOnInit(): void {
  }

}
