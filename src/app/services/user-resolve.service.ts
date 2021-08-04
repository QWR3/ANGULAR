import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../models/user";
import {UsersService} from "./users.service";
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser> {

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (this.location.path()) {
      const splitUrl = this.location.path().split('/')
      const id = +splitUrl[splitUrl.length - 1]
      return this.userService.getUser(id)
    }else {
      const id = + this.router.getCurrentNavigation()?.extras.state?.user
      return this.userService.getUser(id)
    }
  }
}
