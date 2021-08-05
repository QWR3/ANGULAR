import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../../interfaces/user.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserInterface[]
  chosen: UserInterface

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({users})=>this.users=users)
  }

  fillChosen(user:UserInterface){
    this.chosen = user
  }
}
