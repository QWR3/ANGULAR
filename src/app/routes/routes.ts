import {Routes} from "@angular/router";
import {UsersComponent} from "../commponents/users/users.component";
import {AboutUserComponent} from "../commponents/about-user/about-user.component";
import {CanDeactivateUsersService} from "../services/can-deactivate-users.service";

export const routes:Routes=[
  {path:'users',component:UsersComponent, canDeactivate:[CanDeactivateUsersService]},
  {path:'users/:id',component:AboutUserComponent, }
]
