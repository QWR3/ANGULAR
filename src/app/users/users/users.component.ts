import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {UsersService} from "../services/users.service";
import {IUser} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  clipboard: number
  users: IUser[]
  user:IUser

  constructor(private dataService: DataService, private usersService: UsersService) {

    this.dataService.getDataCell().subscribe(value => this.clipboard = value)
    this.usersService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  ngOnInit(): void {
  }

  decClipboard() {
    this.dataService.decrementDataCell()
  }

  chosen(user:IUser){
    this.user = user
  }

}
