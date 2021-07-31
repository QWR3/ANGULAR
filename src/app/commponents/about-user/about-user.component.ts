import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../model/IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.scss']
})
export class AboutUserComponent implements OnInit {

  user: IUser

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser
    } else {
      this.activatedRoute.params.subscribe(({id}) => this.userService.getUser(id).subscribe(value => this.user = value));
    }
  }

}
