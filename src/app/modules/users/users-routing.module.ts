import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UsersResolveService} from "../services/users-resolve.service";
import {AboutUserComponent} from "./components/about-user/about-user.component";
import {CanDeactivateAboutService} from "../services/can-deactivate-about.service";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    resolve: {users: UsersResolveService},
    canDeactivate: [CanDeactivateAboutService]
  },
  {path: ":id", component: AboutUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
