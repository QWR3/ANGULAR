import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../services/users.service";
import {UserInterface} from "../../../interfaces/user.interface";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {

  user:UserInterface

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private usersService:UsersService) {
    if (this.router.getCurrentNavigation()?.extras.state){
      this.user = this.router.getCurrentNavigation()?.extras.state as UserInterface
    }else {
      this.activatedRoute.params.subscribe(({id})=>this.usersService.getUser(id).subscribe(value => this.user=value))
    }
  }

  ngOnInit(): void {
  }

}
