import {Component, Input, OnInit} from '@angular/core';
import {IUserModel} from "../../model/userModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  user: IUserModel = {id:0,name:'',username:''}

}
