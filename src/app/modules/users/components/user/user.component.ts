import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserInterface} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserInterface

  @Output()
  chosen:EventEmitter<UserInterface> = new EventEmitter<UserInterface>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.chosen.emit(this.user)
  }
}


