import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {UserInterface} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<UserInterface[]>{

  constructor(private usersService:UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.usersService.getUsers();
  }
}
