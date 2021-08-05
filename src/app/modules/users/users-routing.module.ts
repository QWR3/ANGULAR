import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UsersResolveService} from "../services/users-resolve.service";

const routes: Routes = [{path: "", component: UsersComponent, resolve: {users:UsersResolveService}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
