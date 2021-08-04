import {Routes} from "@angular/router";
import {FormComponent} from "../commponents/form/form.component";
import {UserComponent} from "../commponents/user/user.component";
import {UserResolveService} from "../services/user-resolve.service";
import {UsersResolveService} from "../services/users-resolve.service";

export const routes: Routes = [
  {path: "", component: FormComponent,resolve:{users:UsersResolveService}},
  {path: "user/:id", component: UserComponent, resolve: {user: UserResolveService}}
]
