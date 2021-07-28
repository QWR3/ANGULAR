import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../model/IUser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  clickGetPosts(): void {
    console.log(',;,0,;,')
    this.router.navigate(["postsFromUser", this.user.id], {relativeTo: this.activatedRoute})
  }

}
