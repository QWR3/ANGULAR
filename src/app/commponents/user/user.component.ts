import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:IUser

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(({user}) => this.user=user
    )
  }

  ngOnInit(): void {
  }

}
