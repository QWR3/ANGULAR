import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './commponents/users/users.component';
import {PostsComponent} from './commponents/posts/posts.component';
import {CommentsComponent} from './commponents/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {routes} from "./routes/routes";
import { UserComponent } from './commponents/user/user.component';
import { PostComponent } from './commponents/post/post.component';
import { CommentComponent } from './commponents/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
