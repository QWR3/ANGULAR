import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './commponents/users/users.component';
import { UserComponent } from './commponents/user/user.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import { FormComponent } from './commponents/form/form.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,RouterModule.forRoot(routes),HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
