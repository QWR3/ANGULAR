import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {PostsComponent} from './commponents/posts/posts.component';
import {PostComponent} from './commponents/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import { AboutPostComponent } from './commponents/about-post/about-post.component';
import {routes} from "./routes/routes";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AboutPostComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
