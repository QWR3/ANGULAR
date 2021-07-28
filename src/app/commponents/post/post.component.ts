import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../model/IPost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onClickGetComments(): void {
    console.log("(*.*)")
    this.router.navigate(["commentsToPost", this.post.id], {relativeTo: this.activatedRoute})
  }

}
