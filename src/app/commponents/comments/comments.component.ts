import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../model/IComment";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments: IComment[]

  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id}) => this.commentsService.getComments(id)
        .subscribe(value => this.comments = value))
  }

}
