import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user:any

  @Output()
  stateLifting: EventEmitter<IUser> = new EventEmitter<IUser>()


  constructor() { }

  ngOnInit(): void {
  }

  stateLiftingOnClick(){
    console.log("hi")
    this.stateLifting.emit(this.user)
  }

}
