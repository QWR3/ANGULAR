import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserInterface} from "../../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private router:Router,private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.chosen.emit(this.user)
    this.router.navigate([this.user.id],{relativeTo:this.activatedRoute, state:this.user})
  }
}


