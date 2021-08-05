import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import {UsersService} from "../services/users.service";
import { UserComponent } from './components/user/user.component';
import { AboutUserComponent } from './components/about-user/about-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    AboutUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  providers:[UsersService]
})
export class UsersModule { }
