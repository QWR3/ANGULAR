import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './commponents/users/users.component';
import {UserComponent} from './commponents/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import { AboutUserComponent } from './commponents/about-user/about-user.component';

@NgModule({
  declarations: [
  AppComponent,
    UsersComponent,
    UserComponent,
    AboutUserComponent
  ],
  imports: [BrowserModule,HttpClientModule,RouterModule.forRoot(routes),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
