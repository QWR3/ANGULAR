import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserInterface} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserInterface[]
  chosen: UserInterface

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value)
  }

  fillChosen(user:UserInterface){
    this.chosen = user
  }
}
