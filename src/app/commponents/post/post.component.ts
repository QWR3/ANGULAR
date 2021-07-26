import {Component, Input, OnInit} from '@angular/core';
import {IPostModel} from "../../model/IPostModel";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  post: IPostModel = {id: 0, userId: 0, title: '', body: ''}

}
