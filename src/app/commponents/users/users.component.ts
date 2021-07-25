import {Component, OnInit} from '@angular/core';
import {IUserModel} from "../../model/userModel";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUserModel[] = [{id: 0, name: '', username: ''}]

  constructor(private userService: UserService) {
    console.log(this.userService)
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

}
