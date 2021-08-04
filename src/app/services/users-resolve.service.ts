import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IUser} from "../models/user";
import {Observable} from "rxjs";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]> {
  constructor(private usersService: UsersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.usersService.getUsers()
  }
}
