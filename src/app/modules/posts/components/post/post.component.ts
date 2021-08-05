import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostInterface} from "../../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";

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


  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.chosen.emit(this.post)
    this.router.navigate([this.post.id],{state:this.post,relativeTo:this.activatedRoute})
  }

}
