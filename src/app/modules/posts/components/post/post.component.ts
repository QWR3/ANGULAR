import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostInterface} from "../../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostInterface

  @Output()
  chosen: EventEmitter<PostInterface> = new EventEmitter<PostInterface>()


  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.chosen.emit(this.post)
  }

}
